 

<?php require_once('header.php');?>

     
<div class="container-fluid">
    <div class="row">
        <div class="col-md-12">
        <div class="col-md-2 board" id="col1" draggable='true'>
        <h1>Step 1<span onclick="showOverlay()" class="glyphicon glyphicon-plus" id="plus_task" aria-hidden="true"></span></h1>
                   <div class="col-md-12 sec2d"  id ="a1" draggable="true">
                    <article>
                <h2>some title</h2>
                    <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
                    <ul>
                    <li>*</li>
                    <li>*</li>
                     </ul>
                </article></div>
                   <div class="col-md-12 sec2d" id="a2" draggable="true">
                    <article>
                <h2>some title</h2>
                    <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
                    <ul>
                    <li>*</li>
                    <li>*</li>
                     </ul>
                </article></div>
        
            </div>
        <div class="col-md-2 board" id="col2"  draggable='true'> 
            <h1>Step 2</h1>
        <div class="col-md-12 sec2d" id="a3" draggable="true">
                    <article>
                <h2>some title</h2>
                    <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
                    <ul>
                    <li>*</li>
                    <li>*</li>
                     </ul>
                </article></div></div>
        <div class="col-md-2 board" id="col3" id="col1"  draggable='true'><h1>Step 3</h1></div>
        <div class="col-md-2 board" id="col4"  draggable='true'><h1>Step 4</h1></div>
        <div class="col-md-2 board" id="col5"  draggable='true'><h1>Step 5</h1></div>
        <div class="col-md-2 board" id="col6"  draggable='true'><h1>Step 6</h1></div>
    </div>
    
    
    </div>

    <div id="overlay">
        <div id="frame">
        <h3>Add a task</h3>
        <table class="table">
            <tr><td>Title</td><td><input type="text"></td></tr>
            <tr><td>Description</td><td><textarea></textarea></td></tr>
            <tr>
                <td>Attachment
                    <label for="attach"><span for="attach" class="glyphicon glyphicon-upload" aria-hidden="true"></span></label></td>
                <td id="at_td"></td>
            </tr>
            <tr><td>Description</td><td><textarea></textarea></td></tr>
            <tr><td>Due date</td><td><input type="date" id="due_date"></td></tr>
            <tr><td colspan='2' class="text-right"><button class="btn-info" id="submit_new_task">Add task</button></td></tr>
            
            </table>
        </div></div>
<input type="file"  id="attach">
<?php require_once('footer.php');?>



