<?php
  $output = array();
  $index =0;  
  try {
    $db = new PDO("mysql:host=localhost;dbname=urlikvadim_bd;charset=utf8", "urlikvadim_bd", "uv21051996", array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'utf8'"));
    }
    catch(PDOException $e)
    {
    echo $e->getMessage();
    die("Ошибка подключения.");
    }        
 if($_POST['name'] == "tanya" && $_POST['text'] == "0302"){
    $kek = rand(1000, 99999);
    $sql1 ="UPDATE accessKey SET accessKey = :accessKey";
    $stmt1 = $db->prepare($sql1);
    $stmt1->bindParam(':accessKey', $kek , PDO::PARAM_INT);
    $stmt1->execute(); 
    echo $kek;
 }
  else{
  $sql ="INSERT INTO tableOfTanya( name, text) VALUES (:name,:text)";  
  $stmt = $db->prepare($sql);
  $stmt->bindParam(':name', $_POST['name'], PDO::PARAM_STR); 
  $stmt->bindParam(':text', $_POST['text'], PDO::PARAM_STR); 
  $stmt->execute();
  } 
  mysql_close($db);
?>