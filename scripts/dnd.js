var currentItem;
var filesArr = []; 
var img_arr = Array('jpg','jpeg','bmp','gif','png','ico');
/**************************************************/
function makeElement(tagName, attributes,f,text) {
 let tmp = document.createElement(tagName);   
   tmp.addEventListener('click',f);
 for(let e of Object.entries(attributes)){
  tmp.setAttribute(e[0],e[1]);
 }
    if(typeof(text) !== 'undefined' || text != '')tmp.innerHTML = text;
    return tmp;
}
 /*******************************************************/
function display_task(i){
     let new_task = makeElement('div',{class: 'col-md-12 sec2d',draggable:true,id:i},
                        (e)=>{ showOverlay('task_frame',i); },'');
 
         let header = document.createElement('h3');
 
             header.innerHTML = tasks[i].title;
 
             new_task.appendChild(header);
         let ddate = document.createElement('label');
             ddate.innerHTML = 'Due date: '+tasks[i].due_date
      if(tasks[i].use_dd) new_task.appendChild(ddate);
      
            document.getElementById('col1').appendChild(new_task);
 document.getElementById('new_task_form').reset();
 document.getElementById('at_td').innerHTML = '';
 document.getElementById('due_date').valueAsDate = new Date();

 
}
    
    
    
function create_task(title,desc,due_date,dueDate_cb,files){
    
    
    new Promise(function(resolve, reject){
        let l = tasks.length;
        tasks.push(new  task.create(title,desc,due_date,dueDate_cb,files));
            
         (tasks.length > l)? resolve(true): reject(false);   
     }).then(function(response){
            display_task(tasks.length-1);
       },function(err){
        //error;
    });
        
    }


function createPreview(f,f_type){
     let f_upload_div = makeElement('div',{class:'f_upload'},'','');
 
    if(f_type === 'img'){
    let f_upload_img = makeElement('img',{class:'img-responsive prev_img',src:f},(e)=>{
        document.getElementById('at_td').removeChild(e.target.parentElement);
    },'');
    f_upload_div.appendChild(f_upload_img);
    }else{
        f_upload_div.innerHTML += f;
    }
    document.getElementById('at_td').appendChild(f_upload_div);
      
}
function showOverlay(frame,i){
          document.getElementById('overlay').style.display ='block';
    let tmp =  document.getElementById(frame);
    
        tmp.style.display ='block';
        if(i >= 0){
            while(tmp.firstChild)tmp.removeChild(tmp.firstChild);
            tmp.appendChild(makeElement('h3',{},'',tasks[i].title));        
            tmp.appendChild(makeElement('label',{},'','Due date: '+tasks[i].due_date  ));         
            tmp.appendChild(makeElement('p',{},'', tasks[i].desc)); 
            
                for(let i=0 ; i < tasks[i].files.length ; i++){

                console.log(tasks[i].files);
                var reader = new FileReader();
                var img = document.createElement('img');
                reader.onload = function(event){  
                let tmpImg = document.createElement('img'); 
                };
                reader.readAsDataURL(tasks[i].files[0]);
                tmp.appendChild(img);
                } 
            
                  }   
    
    
}
 
 function boardDropped(event){
     
   if(currentItem != undefined && currentItem.innerHTML != undefined) {
       let isIn = false;
       for(let i = 0 ; i < this.childElementCount ; i++){if(this.children[i] == currentItem)
      isIn = true;
           }
       
       if(!isIn && currentItem.classList.contains('sec2d')){
           
event.preventDefault();
           console.log(this);
           console.log(currentItem);
   this.appendChild(currentItem);
    } 
   } 
 }
    
 document.addEventListener("dragstart", function(event) { 
  
 ///////////////*section drag////////////////////////////
     if(event.srcElement.classList.contains('sec2d')){ 
 
         currentItem = event.srcElement;
    
         event.stopPropagation;
            }
 
    
}); 

document.addEventListener("DOMContentLoaded", function(event) { 
     
 
    for(let i = 0 ; i < tasks.length ; i++){
           display_task(i);
    }
    
     for(const board of document.querySelectorAll('.board')){
         board.addEventListener("dragenter", function(event){event.preventDefault();}, false)
         board.addEventListener("dragover", function(event){event.preventDefault();}, false);
         board.addEventListener("drop", boardDropped, false);
             }
     for(const sec of document.querySelectorAll('.sec2d')){
         sec.addEventListener("dragenter", function(event){event.preventDefault();}, false)
         sec.addEventListener("dragover", function(event){event.preventDefault();}, false);
          sec.addEventListener("drop", function(event){event.preventDefault();}, false);
             }
  

    
document.getElementById('attach').addEventListener('click',function(e){
    
let files = makeElement('input',{type:'file',class:'attach',name:"attach[]",multiple:"multiple"},'','');
        files.click();
        document.querySelector('body').appendChild(files);
    files.addEventListener('change',(e)=>{
                filesArr.push(e.target.files[0]);
        if(img_arr.includes(e.target.files[0].name.split('.').pop())){
        var reader = new FileReader();
        var img = document.createElement('img');
            img.src = reader.result;
            reader.onload = function(event){  
                createPreview(event.target.result,'img');
                };
       reader.readAsDataURL(e.target.files[0]);
                }else createPreview(e.target.files[0].name,'file');
   
    });

}); 
 




    

     document.getElementById('submit_new_task').addEventListener('click',function(e){
         e.preventDefault();
   if(!document.getElementById('title').value =='' || !document.getElementById('desc').value ==''){
   create_task(document.getElementById('title').value,document.getElementById('desc').value,document.getElementById('due_date').value,document.getElementById('dueDate_cb').checked,document.querySelectorAll("input[type=file]"));
            }
     });
     document.getElementById('dueDate_cb').addEventListener('click',function(e){
         if(!this.checked)
        document.getElementById('due_date').setAttribute('disabled',false);
         else
          document.getElementById('due_date').removeAttribute('disabled');
     });
     document.getElementById('overlay').addEventListener('click',function(e){
      document.getElementById('overlay').style.display = 'none';
      document.getElementById('frame').style.display = 'none';
      document.getElementById('task_frame').style.display = 'none';
 
});
         document.getElementById('frame').addEventListener('click',function(e){
      e.stopPropagation();
 
});
 
 /******************************************************************/
    document.getElementById('due_date').valueAsDate = new Date(); 
});
