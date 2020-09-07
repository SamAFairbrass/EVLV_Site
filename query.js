var topRange = 100, // measure from the top of the viewport to X pixels down
  edgeMargin = 400, // margin above the top or margin from the end of the page
  animationTime = 1200, // time in milliseconds
  contentTop = [];
  
  
var graphToShow = document.querySelector(".graphAnimation")

$(document).ready(function () {
  // Stop animated scroll if the user does something
  $("html,body").bind(
    "scroll mousedown DOMMouseScroll mousewheel keyup",
    function (e) {
      if (e.which > 0 || e.type == "mousedown" || e.type == "mousewheel") {
        $("html,body").stop();
      }
    }
  );

  // Set up content an array of locations
  $("#sidemenu")
    .find("a")
    .each(function () {
      contentTop.push($($(this).attr("href")).offset().top);
    });

  // Animate menu scroll to content
  $("#sidemenu")
    .find("a")
    .click(function () {
      var sel = this,
        newTop = Math.min(
          contentTop[$("#sidemenu a").index($(this))],
          $(document).height() - $(window).height()
        ); // get content top or top position if at the document bottom
      $("html,body")
        .stop()
        .animate({ scrollTop: newTop }, animationTime, function () {
          window.location.hash = $(sel).attr("href");
        });
      return false;
    });

  // adjust side menu
  $(window).scroll(function () {
    var winTop = $(window).scrollTop(),
      bodyHt = $(document).height(),
      vpHt = $(window).height() + edgeMargin; // viewport height + margin
    $.each(contentTop, function (i, loc) {
      if (
        loc > winTop - edgeMargin &&
        (loc < winTop + topRange || winTop + vpHt >= bodyHt)
      ) {
        $("#sidemenu li").removeClass("selected").eq(i).addClass("selected");
        
      }
    });

    
    
    
  });


  var scroll = window.requestAnimationFrame ||
  function(callback){ window.setTimeout(callback, 1000/60)};

  var barToShow = document.querySelectorAll('.barAnimation');
  var circleToShow = document.querySelectorAll('.circleAnimation');
  

  function loop() {

    barToShow.forEach(function (bar) {
      if (isBarInViewport(bar)) {
        bar.classList.add('bar-graph-one');
      } else {
        bar.classList.remove('bar-graph-one');
      }
    });
    circleToShow.forEach(function (circle) {
        if (isCircleInViewport(circle)) {
            circle.classList.remove('circle-chart-circle-static');
            circle.classList.add('circle-chart-circle');
          
        } else {
            circle.classList.remove('circle-chart-circle');
            circle.classList.add('circle-chart-circle-static');
        }
      });
      
  
    scroll(loop);
  }

  loop();

  // Helper function from: http://stackoverflow.com/a/7557433/274826
function isBarInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0
        && rect.bottom <= 0)
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
  }

  function isCircleInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0
        && rect.bottom >= 0)
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
  }

  function isGraphInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0
        && rect.bottom <= 0)
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
  }


});





