function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");


function smoothScroll(target,duration){
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null ;
  
  function animation(currentTime){
      if(startTime === null) {
          startTime = currentTime;
      }
      var timeLapsed = currentTime - startTime ;
      var run = ease(timeLapsed,startPosition,distance,duration);
      window.scrollTo(0,run);
      if(timeLapsed<duration){
          requestAnimationFrame(animation);
      }
  }

  
  function ease(t, b, c, d) {
t /= d/2;
if (t < 1) return c/2*t*t + b;
t--;
return -c/2 * (t*(t-2) - 1) + b;
  }
  console.log(targetPosition + " " + startPosition);    
  requestAnimationFrame(animation);
}



/* Accordion */

function accordionTrigger(id, content){
  var el = document.querySelector(id);
  var contentEl = document.querySelector(content)
  if(el.classList.contains("accordionUp")){
      accordionDown(el, contentEl);
  }
  else{
      accordionUp(el, contentEl)
  }
}


function accordionUp(element, contentElement){
  element.classList.remove("accordionDown");
  element.classList.add("accordionUp");
  contentElement.classList.remove("accordionContentDown");
  contentElement.classList.add("accordionContentUp");
  

}

function accordionDown(element, contentElement){
  element.classList.remove("accordionUp");
  element.classList.add("accordionDown");
  contentElement.classList.remove("accordionContentUp");
  contentElement.classList.add("accordionContentDown");
  
}

function dropdownTrigger(id, content){
  var el = document.querySelector(id);
  var contentEl = document.querySelector(content)
  if(el.classList.contains("dropdownUp")){
      dropdownDown(el, contentEl);
  }
  else{
    dropdownUp(el, contentEl)
  }
}


function dropdownUp(element, contentElement){
  element.classList.remove("dropdownDown");
  element.classList.add("dropdownUp");
  contentElement.classList.remove("dropdownContentDown");
  contentElement.classList.add("dropdownContentUp");
  

}

function dropdownDown(element, contentElement){
  element.classList.remove("dropdownUp");
  element.classList.add("dropdownDown");
  contentElement.classList.remove("dropdownContentUp");
  contentElement.classList.add("dropdownContentDown");
  
}

var topRange = 100,  // measure from the top of the viewport to X pixels down
edgeMargin = 400,   // margin above the top or margin from the end of the page
animationTime = 1200, // time in milliseconds
contentTop = [];
contentTopDropdown = [];

$(document).ready(function(){ 

 // Stop animated scroll if the user does something
 $('html,body').bind('scroll mousedown DOMMouseScroll mousewheel keyup', function(e){
 if ( e.which > 0 || e.type == 'mousedown' || e.type == 'mousewheel' ){
  $('html,body').stop();
 }
})

 // Set up content an array of locations
 $('#sidemenu').find('a').each(function(){
  contentTop.push( $( $(this).attr('href') ).offset().top );
 })

 // Animate menu scroll to content
  $('#sidemenu').find('a').click(function(){
   var sel = this,
       newTop = Math.min( contentTop[ $('#sidemenu a').index( $(this) ) ], $(document).height() - $(window).height() ); // get content top or top position if at the document bottom
   $('html,body').stop().animate({ 'scrollTop' : newTop }, animationTime, function(){
    window.location.hash = $(sel).attr('href');
   });
   return false;
 })
 
 // adjust side menu
 $(window).scroll(function(){
  var winTop = $(window).scrollTop(),
      bodyHt = $(document).height(),
      vpHt = $(window).height() + edgeMargin;  // viewport height + margin
  $.each( contentTop, function(i,loc){
   if ( ( loc > winTop - edgeMargin && ( loc < winTop + topRange || ( winTop + vpHt ) >= bodyHt ) ) ){
    $('#sidemenu li')
     .removeClass('selected')
     .eq(i).addClass('selected');
   }
  })
 })

 $('#dropdownmenu').find('a').each(function(){
  contentTopDropdown.push( $( $(this).attr('href') ).offset().top );
 })

 // Animate menu scroll to content
  $('#dropdownmenu').find('a').click(function(){
   var sel = this,
       newTop = Math.min( contentTopDropdown[ $('#dropdownmenu a').index( $(this) ) ], $(document).height() - $(window).height() ); // get content top or top position if at the document bottom
   $('html,body').stop().animate({ 'scrollTop' : newTop }, animationTime, function(){
    window.location.hash = $(sel).attr('href');
   });
   return false;
 })
 
 // adjust side menu
 $(window).scroll(function(){
  var winTop = $(window).scrollTop(),
      bodyHt = $(document).height(),
      vpHt = $(window).height() + edgeMargin;  // viewport height + margin
  $.each( contentTopDropdown, function(i,loc){
   if ( ( loc > winTop - edgeMargin && ( loc < winTop + topRange || ( winTop + vpHt ) >= bodyHt ) ) ){
    $('#dropdownmenu li')
     .removeClass('selected')
     .eq(i).addClass('selected');
   }
  })
 })
  
})


// Footer








