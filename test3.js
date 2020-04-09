window.onload = function(){
   var bt01 = this.document.querySelector('.bt01');
   var lightbox = this.document.querySelector('.lightbox');
   var ok_bt = this.document.querySelector('.xxx');

   bt01.addEventListener('click',function(){
       lightbox.style.display = 'block';

   });

   ok_bt.addEventListener('click',function(){
    lightbox.style.display = 'none';


   });



}