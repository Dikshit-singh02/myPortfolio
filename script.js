const backToTopButton=document.getElementById('backToTop');

window.onscroll=function(){
    if(document.documentElement.scrollTop>200){
        backToTopButton.style.display="block";
    }else{
        backToTopButton.style.display="none";
    }
};

backToTopButton.addEventListener('click',function(){
    window.scrollTo({top:0,behavior:'smooth'});
});