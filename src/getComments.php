<?php
  $output = array();
  $index =0;
 
  //$db = mysql_connect('127.0.0.1','urlikvadim','uv21051996');
  try {
    $db = new PDO("mysql:host=localhost;dbname=urlikvadim_bd;charset=utf8", "urlikvadim_bd", "uv21051996", array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'utf8'"));
    }
    catch(PDOException $e)
    {
    echo $e->getMessage();
    die("Ошибка подключения.");
    }
    
  $sql ="SELECT accessKey FROM accessKey";
  $result = $db->query($sql)->fetchAll();
  if($result[0][0] != $_POST['accesskey']){
    $sql ="SELECT name,text FROM tableOfTanya WHERE allView = 1";
    $result = $db->query($sql)->fetchAll(); 
    foreach ($result as $kek)
    {    
      echo $kek[0].','.$kek[1].','; 
    }
  }
  else
  {
    $sql ="SELECT name,text,id,allView FROM tableOfTanya";
    $result = $db->query($sql)->fetchAll(); 
    foreach ($result as $kek)
    {    
      echo $kek[0].','.$kek[1].','.$kek[2].','.$kek[3].','; 
    }
  }
  
  mysql_close($db);

?>