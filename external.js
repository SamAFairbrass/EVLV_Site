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
    
    //top to bottom
    var section1 = document.querySelector(".section1");
    section1.addEventListener('click',()=> {
        smoothScroll(".mainTextBlock",750);
    });

