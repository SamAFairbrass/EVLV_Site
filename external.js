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

function filterTrigger(id, content){
  var el = document.querySelector(id);
  var contentEl = document.querySelector(content)
  if(el.classList.contains("filterUp")){
    filterDown(el, contentEl);
  }
  else{
    filterUp(el, contentEl)
  }
}


function filterUp(element, contentElement){
  element.classList.remove("filterDown");
  element.classList.add("filterUp");
  contentElement.classList.remove("filterContentDown");
  contentElement.classList.add("filterContentUp");
  

}

function filterDown(element, contentElement){
  element.classList.remove("filterUp");
  element.classList.add("filterDown");
  contentElement.classList.remove("filterContentUp");
  contentElement.classList.add("filterContentDown");
  
}

var topRange = 100,  // measure from the top of the viewport to X pixels down
edgeMargin = 400,   // margin above the top or margin from the end of the page
animationTime = 1200, // time in milliseconds
contentTop = [];
contentTopDrop = [];



// Footer








