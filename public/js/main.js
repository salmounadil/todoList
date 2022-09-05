let ajouter = document.getElementById('ajouter');
let divTaches = document.getElementById('taches');
let newInput = document.createElement('input');

ajouter.addEventListener('click',()=>{
    
    let nouvelleTache = document.getElementById('newTask')
   let divNewTask = document.createElement('div');
   divNewTask.classList.add('afaire');
   let pNewTask = document.createElement('p') ;
   let textContent = document.createTextNode(`${nouvelleTache.value}`);
   let divFont = document.createElement('div');
   nouvelleTache.value = '';
   let font1 = document.createElement('i');
   let font2 = document.createElement('i');
   let font3 = document.createElement('i');
   font1.classList.add('fa-solid');
   font1.classList.add('fa-circle-check');
   font2.classList.add('fa-solid');
   font2.classList.add('fa-pen-to-square');
   font3.classList.add('fa-solid');
   font3.classList.add('fa-trash-can');
   let font4 = document.createElement('i');
    font4.classList.add('fa-solid');
    font4.classList.add('fa-floppy-disk');
    font1.classList.add('check');
    font2.classList.add('edit');
    font4.classList.add('edit');
    font3.classList.add('delete');
    divNewTask.style.backgroundColor ='#e4e4e4';
    divNewTask.style.margin = '15px 0';
    divNewTask.style.borderRadius = '5px';
    pNewTask.style.paddingLeft ='10px';


   divFont.appendChild(font1);
   divFont.appendChild(font2);
   divFont.appendChild(font4);
   divFont.appendChild(font3);
   font4.style.display = 'none'
   divFont.classList.add('flex2');
   divFont.classList.add('flex');
   pNewTask.classList.add('flex10')
   pNewTask.appendChild(textContent);
   divNewTask.appendChild(pNewTask);
   divNewTask.appendChild(divFont);
   divNewTask.classList.add('flex')
   divTaches.appendChild(divNewTask);
   let i = 0;
   tous.value = `Tous(${divTaches.childElementCount})`
    font1.addEventListener('click',()=>{
        if(i ==0){
        font1.parentElement.parentElement.classList.remove('terminer');
        font1.parentElement.parentElement.classList.remove('afaire');
        font1.parentElement.parentElement.classList.toggle('terminer');
        
        };
        if (i==1) {
            font1.parentElement.parentElement.classList.remove('terminer');
            font1.parentElement.parentElement.classList.remove('afaire');
            font1.parentElement.parentElement.classList.toggle('afaire'); 
            i-=2;
        }
        i++;
    });
    font3.addEventListener('click',()=>{
        font3.parentElement.parentElement.style.display = 'none';
         
    });
    font2.addEventListener('click',()=>{
        
            
        newInput.value = font2.parentElement.parentElement.firstElementChild.innerText;
        font2.parentElement.parentElement.firstElementChild.classList.remove('flex10')
            font2.parentElement.parentElement.firstElementChild.style.visibility = 'hidden';
            font2.parentElement.parentElement.prepend(newInput);
            newInput.classList.add('flex10');
            newInput.style.margin = '15px 10px';
            
            newInput.style.height = '20px';
            newInput.style.border ='4px solid #7db7f4';
            newInput.autofocus;
            
            font2.style.display ='none';
            font4.style.display = 'block';
            font4.style.color = 'green';
            


            
        ;
     
        
    })
   ;
   font4.addEventListener('click',()=>{
   
        
        
        font2.style.display ='block';
        
        font4.style.display = 'none';
        font4.parentElement.parentElement.firstElementChild.nextElementSibling.innerText = newInput.value;
        font4.parentElement.parentElement.firstElementChild.nextElementSibling.style.flex = '0 !important'
        font4.parentElement.parentElement.firstElementChild.nextElementSibling.style.visibility = 'visible';
        font4.parentElement.parentElement.firstElementChild.nextElementSibling.classList.add('flex10')
        font4.parentElement.parentElement.firstElementChild.remove();

        
        

    }
   )
});

let afaire = document.getElementsByTagName('input')[2];
let terminer = document.getElementsByTagName('input')[3];
let tous = document.getElementsByTagName('input')[4];
// let tab =document.querySelectorAll('#taches');

afaire.addEventListener('click',()=>{
    let tab =document.querySelectorAll('#taches > div');
   tab.forEach(element => {
    if (element.classList.contains('terminer')) {
        element.style.display ='none';
        
    };
    if (element.classList.contains('afaire')) {
        element.style.display ='flex';
        
    };
   });
        
    
})
terminer.addEventListener('click',()=>{
    let tab =document.querySelectorAll('#taches > div');
   tab.forEach(element => {
    if (element.classList.contains('afaire')) {
       
        element.style.display='none';
        
    };
    if (element.classList.contains('terminer')) {
        
        element.style.display='flex';
    }
   });
        
    
});

tous.addEventListener('click',()=>{
    let tab =document.querySelectorAll('#taches > div');
    tab.forEach(element => {
        if (element.classList.contains('afaire')) {
           
            element.style.display='flex';
            
        };
        if (element.classList.contains('terminer')) {
            
            element.style.display='flex';
        }
       });
      
});




tous.value = `Tous(${divTaches.childElementCount})`




