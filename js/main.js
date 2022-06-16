var layer=document.querySelector('.layer');
var imges=Array.from(document.querySelectorAll('.item img'));
var lightBox=document.querySelector('.light-box')
var close = document.getElementById('close');
var next = document.getElementById('next');
var prev = document.getElementById('prev');
var currentIndex=0;
for(var i=0;i<imges.length;i++)
{
    imges[i].addEventListener("click",function(e){
      var currentSrc = e.target.src;
      layer.classList.remove('d-none');
      lightBox.style.backgroundImage= `url(${currentSrc})`
     currentIndex= imges.indexOf(e.target);
    })
}
close.addEventListener("click", closeSlider)
next.addEventListener("click",getNextSlide)
prev.addEventListener("click",getPrevSlide)
function getNextSlide()
{
    currentIndex++;
    if(currentIndex==imges.length)
    {
        currentIndex=0;
    }
    var currentSrc = imges[currentIndex].src;
     lightBox.style.backgroundImage=`url(${currentSrc})`
}
function getPrevSlide()
{
    currentIndex--;
    if(currentIndex<0)
    {
        currentIndex=imges.length-1;
    }
    var currentSrc = imges[currentIndex].src;
     lightBox.style.backgroundImage=`url(${currentSrc})`
}
function closeSlider()
{
    layer.classList.add('d-none')
}
document.addEventListener("keydown",function(e){
    if(e.key=='ArrowRight')
    {
        getNextSlide()
    }
    else if(e.key=='ArrowLeft')
    {
        getPrevSlide()
    }
    else if(e.key=='Escape')
    {
        closeSlider()
    }
})
/* 
if(e.key==ArrowRight)
    {
        getNextSlide()
    }
    else if(e.key==ArrowLeft)
    {
        getPrevSlide
    }
    else if(e,key==Escape)
    {
        closeSlider()
    }*/