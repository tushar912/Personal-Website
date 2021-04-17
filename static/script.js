
var i = 0;
var j=0
var txt1 = 'Hi, I am Tushar!'; 
var txt2 = 'I make things that live on the Web'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt1.length) {
    document.querySelector(".hello").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
    
  }else{
    setTimeout(()=>{
        document.querySelector(".hello").innerHTML ="";
    i=0;
    setTimeout(typeWriter, 100);
    },1000)
    
  }
  
}

typeWriter()
function typeWriter2() {
    if (j < txt2.length) {
      document.querySelector(".sub").innerHTML += txt2.charAt(j);
      j++;
      setTimeout(typeWriter2, 100);
      
    }else{
        setTimeout(()=>{
            document.querySelector(".sub").innerHTML ="";
        j=0;
        setTimeout(typeWriter2, 100);
        },1000)
      }
    
  }
  typeWriter2()

  function checkScroll(){
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.nav').addClass("scrolled");
    }else{
        $('.nav').removeClass("scrolled");
    }
}

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}