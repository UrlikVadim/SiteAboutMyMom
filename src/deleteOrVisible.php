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
    $sql ="SELECT accessKey FROM accessKey";
    $result = $db->query($sql)->fetchAll();
    if($result[0][0] == $_POST['accessKey']){
        echo "accesskey принят ";   
        if($_POST['type'] == "delete"){
            $sql0 = "DELETE FROM tableOfTanya WHERE id =  :id";
            $stmt0 = $db->prepare($sql0);
            $stmt0->bindParam(':id', $_POST['id'], PDO::PARAM_INT);   
            $stmt0->execute();
            echo"Комментарий удален";
        }
        if($_POST['type'] == "visible"){           
            $sql1 ="UPDATE tableOfTanya SET allView = 1 WHERE id =  :id";
            $stmt1 = $db->prepare($sql1);
            $stmt1->bindParam(':id',  $_POST['id'], PDO::PARAM_INT);
            $stmt1->execute(); 
            echo"Комментарий показан";           
        } 
              
    }else{
    echo "accesskey не принят";   
    }    
  mysql_close($db);
?>