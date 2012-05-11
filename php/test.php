<?php

include 'config.php';

//$beerdata = file_get_contents('http://beeradvocate.com/acbf/beer');
//$beerdata = file_get_contents('small_sample.html');
$beerdata = file_get_contents('sample.txt');

/*
<h2>Abita Brewing Co.</h2><br>
Abita Springs, LA - <a href="http://www.abita.com" target="_new" class="link">abita.com</a> - <a href="http://twitter.com/theabitabeer" target="_new" class="link">@theabitabeer</a>
<ul>
	<li><a href="/beer/profile/3/5" target="_new" class="link">Amber</a> -- Vienna Lager, 4.5%</li>
	<li><a href="/beer/profile/3/39390" target="_new" class="link">Jockamo IPA</a> -- American IPA, 6.5%</li>
	<li><a href="/beer/profile/3/7" target="_new" class="link">Purple Haze</a> -- Fruit / Vegetable Beer, 4.2%</li>
	<li><a href="/beer/profile/3/6" target="_new" class="link">Turbodog</a> -- English Brown Ale, 5.6%</li>
</ul>
*/

mysql_connect("$host", "$username", "$password") or die("cannot connect".mysql_error());
mysql_select_db("$db_name")or die("cannot select DB");

$brewery;
$data;
preg_match_all("/<h2>.*<\/ul>/siU", $beerdata, $matches, PREG_OFFSET_CAPTURE);
// Gets all the breweries
foreach($matches[0] as $match)
{
	preg_match("/<h2>(.*)<\/h2>/siU", $match[0], $titleMatch);
	$brewery = $titleMatch[1];

	preg_match_all("/<li>(.*)<\/li>/siU", $match[0], $beerMatches, PREG_SET_ORDER);

	// Loop over the beers
	foreach($beerMatches as $beerMatch)
	{
		preg_match("/<a href=\"(.*)\".*>(.*)<\/a> -- (.*), (.*%)/siU", $beerMatch[1], $beerTitleMatch);
        $beerTitle = $beerTitleMatch[2];
		$beerLink = "http://www.beeradvocate.com".$beerTitleMatch[1];
		$beerDesc = $beerTitleMatch[3];
		$beerABV = $beerTitleMatch[4];

        $data = $data . $brewery.",".$beerTitle.",".$beerLink.",".$beerDesc.",".$beerABV."<br/>";

		$sql="INSERT INTO $tbl_name(company, name, url, type, abv) VALUES('$brewery', '$beerTitle', '$beerLink', '$beerDesc', '$beerABV')";
        $result=mysql_query($sql);
	}

}

echo $data;

?>