 

<?php require_once('header.php');?>

     
<div class="container-fluid">
    <div class="row">
        <div class="col-md-12">
        <div class="col-md-2 board" id="col1" draggable='true' >
        <h1 onclick='showOverlay("frame")'>Step 1<span class="glyphicon glyphicon-plus" id="plus_task" aria-hidden="true"></span></h1>

        
            </div>
        <div class="col-md-2 board" id="col2"  draggable='true'> 
            <h1>Step 2</h1>
            </div>
        <div class="col-md-2 board" id="col3" id="col1"  draggable='true'><h1>Step 3</h1></div>
        <div class="col-md-2 board" id="col4"  draggable='true'><h1>Step 4</h1></div>
        <div class="col-md-2 board" id="col5"  draggable='true'><h1>Step 5</h1></div>
        <div class="col-md-2 board" id="col6"  draggable='true'><h1>Step 6</h1></div>
    </div>
    
    
    </div>

    <div id="overlay">
        <div id="frame" class="frame">
        <h3>Add a task</h3>
        <form action="util.php" method="post"  id="new_task_form">
    <table class="table">
<tr>
    <td><label for="title">Title</label></td><td><input type="text" id="title" name="title"></td>
        </tr>
<tr>
    <td><label for="desc">Description</label></td><td><textarea id="desc" name="desc"></textarea></td>
        </tr>
<tr>
    <td><label id="attach" for="attach">Attachment</label><label for="attach"><span for="attach"class="glyphicon glyphicon-upload" aria-hidden="true"></span></label></td><td id="at_td"></td>
        </tr>
<tr>
    <td><label for="dueDate_cb">Due date</label><input type="checkbox" id="dueDate_cb"></td><td><input name="due_date" type="date" id="due_date" disabled></td>
        </tr>
<tr>
    <td colspan='2' class="text-right"><button type="submit" class="btn-info" id="submit_new_task">Add task</button></td>
        </tr>
            
    </table>
        </form>
        </div>
    <!----------------------------------------------------->
    <div id="task_frame"  class="frame">
        
        </div>
    </div>

<?php require_once('footer.php');?>



