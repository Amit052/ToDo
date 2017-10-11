var currentItem;
var img_arr = Array('jpg','jpeg','bmp','gif','png','ico');

function createPreview(f,f_type){
    
    let f_upload_div = document.createElement('div');
        f_upload_div.setAttribute('class','f_upload');
    if(f_type === 'img'){
    let f_upload_img = document.createElement('img');
        f_upload_img.setAttribute('class','img-responsive prev_img');
        f_upload_img.setAttribute('src',f);
    f_upload_div.appendChild(f_upload_img);
    }else{
        f_upload_div.innerHTML += f;
    }
    document.getElementById('at_td').appendChild(f_upload_div);
    f_upload_div.addEventListener('click',function(e){document.getElementById('at_td').removeChild(this);})
     
}
function showOverlay(){
          document.getElementById('overlay').style.display ='block';
}

 function secDropped(event){

 if(currentItem != undefined && currentItem.innerHTML != undefined && currentItem.classList.contains('sec2d')) {
     if(currentItem.parentElement == this.parentElement){
// switch elems
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
 this.innerHTML +=  currentItem.outerHTML;
   currentItem.remove();
   currentItem = "";
    } 
   } 
     event.stopPropagation();
 }
    
 document.addEventListener("dragstart", function(event) { 
  
 ///////////////*section drag////////////////////////////
     if(event.srcElement.classList.contains('sec2d')){ 
 
         currentItem = event.srcElement;
    
         event.stopPropagation;
            }
 
    
}); 

document.addEventListener("DOMContentLoaded", function(event) { 
     
 
    
    
     for(const board of document.querySelectorAll('div.board')){
         board.addEventListener("dragenter", function(event){event.preventDefault();}, false)
         board.addEventListener("dragover", function(event){event.preventDefault();}, false);
         board.addEventListener("drop", boardDropped, false);
             }
     for(const sec of document.querySelectorAll('div.sec2d')){
         sec.addEventListener("dragenter", function(event){event.preventDefault();}, false)
         sec.addEventListener("dragover", function(event){event.preventDefault();}, false);
          sec.addEventListener("drop", secDropped, false);
             }
  

    
document.getElementById('attach').addEventListener('change',function(e){
        if(img_arr.includes(e.target.files[0].name.split('.').pop())){
        var reader = new FileReader();
        var img = document.createElement('img');
            reader.onload = function(event){  
                createPreview(event.target.result,'img');
                };
       reader.readAsDataURL(e.target.files[0]);
                }else createPreview(e.target.files[0].name,'file');
    
}); 
 




    

     document.getElementById('overlay').addEventListener('click',function(e){
      document.getElementById('overlay').style.display = 'none';
 
});
         document.getElementById('frame').addEventListener('click',function(e){
      e.stopPropagation();
 
});
 
 /******************************************************************/
    document.getElementById('due_date').valueAsDate = new Date(); 
});
