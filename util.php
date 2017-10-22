
<?php


function create_task(){
    
    echo 'create_task';
}







if(isset($_GET)){
    
    
    if($_GET['q'] === 'create_task') create_task();
}


