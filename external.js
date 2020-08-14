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

/* Accordion End */

/* Index Highlight 

window.addEventListener('scroll', function() {
	var element = document.querySelector('.indexChange');
    var position = element.getBoundingClientRect();
    var id = element.id;
    var indexElement = document.getElementById(id)
    var currentIndex = document.getElementsByClassName("w--current")
    console.log('indexElement: ' + indexElement);
    console.log('currentElement: ' + currentIndex);


    

	// checking whether fully visible
	if(position.top >= 0 && position.bottom <= window.innerHeight) {
        currentIndex.classList.remove("w--current")
		indexElement.classList.add("w--current");
	}

	// checking for partial visibility
	if(position.top < window.innerHeight && position.bottom >= 0) {
		
	}
});

Index Highlight End */

/*
window.onscroll = function() {onScroll()};

function onScroll(){
    var scrollPos = window.top;
    document.querySelectorAll(".services-list a").forEach(function () {
        var currLink = this;
        var refElement = currLink.getAttribute('href');
        if (refElement.offsetTop <= scrollPos && refElement.offsetTop + refElement.height > scrollPos) {
            document.querySelectorAll(".services-list a").classList.remove("w--current");
            currLink.classList.remove("w--current");
        }
        else{
            currLink.classList.remove("w--current");
        }
    });
}
*/