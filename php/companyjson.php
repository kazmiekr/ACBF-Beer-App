<?php

include 'config.php';

mysql_connect("$host", "$username", "$password") or die("cannot connect".mysql_error());
mysql_select_db("$db_name")or die("cannot select DB");

$sql = "SELECT * FROM Beers ORDER BY id";

$query = mysql_query($sql);

echo '{<br/>"companies":[';

$jsonString = "{";
$priorCompany = "";

while($beer = mysql_fetch_row($query))
{
	$company = $beer[1];
	if ( $company != $priorCompany )
	{
		if ( $priorCompany != "" )
			echo "},";
		echo "{ \"company\": \"$company\" ";
	}
	else
	{
		//echo ",";
	}
	//$beerName = json_encode($beer[2]);
	//$beerJson = "{ \"id\": \"$beer[0]\", \"company\": \"$beer[1]\", \"name\": $beerName, \"url\": \"$beer[3]\", \"type\": \"$beer[4]\", \"abv\": \"$beer[5]\", \"bascore\": \"$beer[6]\", \"broscore\": \"$beer[7]\"}";
	//echo $beerJson."<br/>";
	//$jsonString = $jsonString.$beerJson;
    $priorCompany = $company;
}

echo "}]}";

?>