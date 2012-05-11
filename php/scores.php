<?php

include 'config.php';

$limit = 50;
$delay = 10;

mysql_connect("$host", "$username", "$password") or die("cannot connect".mysql_error());
mysql_select_db("$db_name")or die("cannot select DB");

$sql = "SELECT * FROM Beers WHERE bascore is null LIMIT " . $limit;

$query = mysql_query($sql);

while($beer = mysql_fetch_row($query))
{
	$beerLink = $beer[3];
	echo $beer[0]." ".$beer[1]." ".$beer[2]."-".$beerLink." ";
    $beerData = file_get_contents($beerLink);
    //$beerData = file_get_contents('beer.html');
    preg_match("/BA SCORE\n.*<span class=\"BAscore_big\">(.*)<\/span>/siU", $beerData, $baScoreMatch);
    preg_match("/THE BROS\n.*<span class=\"BAscore_big\">(.*)<\/span>/siU", $beerData, $baScoreMatch1);

	$updateSQL = "UPDATE Beers SET bascore='$baScoreMatch[1]', broscore='$baScoreMatch1[1]' WHERE id = $beer[0]";
	mysql_query($updateSQL);
    echo $baScoreMatch[1].",".$baScoreMatch1[1]."<br>";
    echo $updateSQL."<br/>";
    sleep($delay);
}

?>