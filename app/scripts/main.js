var pymChild = pym.Child({ polling: 500 });

var A2030;

(function(global, document, $, pym) {
  "use strict";
  A2030 = {};

  A2030.pymChild = pym.Child({ polling: 500 });

  A2030.currentIndex = 1;
  A2030.intervalTime = 4 * 1000;
  A2030.intervalId = null;
  A2030.$timer = $("#timer");

  A2030.onLeave = function(index, nextIndex, direction) {
    if ($.isFunction(A2030.onLeaveFunctions["slide-" + index])) {
      A2030.onLeaveFunctions["slide-" + index].call();
      if (nextIndex == 1) {
        A2030.$controls.fadeOut();
      } else {
        A2030.$controls.fadeIn();
      }
    }
  };

  A2030.afterLoad = function(anchorLink, index) {
    if ($.isFunction(A2030.afterLoadFunctions["slide-" + index])) {
      A2030.afterLoadFunctions["slide-" + index].call();
      A2030.currentIndex = index;
    }
  };

  A2030.afterRender = function() {
    A2030.afterLoadFunctions["slide-1"].call();
    A2030.currentIndex = 1;

    $("#pp-nav").append(
      "<div id='controls'><div id='play'>play</div> - <div id='pause'>pause</div> // <div id='next'>next</div> - <div id='prev'>prev</div></div>"
    );
    A2030.$controls = $("#controls").fadeOut();
    A2030.$controls.find("#play").on("click touchstart", A2030.play);
    A2030.$controls.find("#pause").on("click touchstart", A2030.pause);
    A2030.$controls.find("#next").on("click touchstart", A2030.next);
    A2030.$controls.find("#prev").on("click touchstart", A2030.prev);

    A2030Charts.lines.init();
  };

  A2030.timerStart = function(e) {
    A2030.animateBar();
    A2030.intervalId = setInterval(function() {
      A2030.animateBar();
    }, A2030.intervalTime);
  };

  A2030.animateBar = function(e) {
    A2030.$timer.animate(
      {
        width: "0%"
      },
      A2030.intervalTime,
      function() {
        $.fn.pagepiling.moveSectionDown();
        A2030.clearBar();
      }
    );
  };

  A2030.clearBar = function(e) {
    A2030.$timer.css("width", "100%");
  };

  A2030.play = function(e) {
    e.preventDefault();
    A2030.timerStart();
  };

  A2030.pause = function(e) {
    if (e) e.preventDefault();
    clearInterval(A2030.intervalId);
    A2030.clearBar();
    A2030.$timer.clearQueue();
  };

  A2030.next = function(e) {
    e.preventDefault();
    A2030.pause();
    $.fn.pagepiling.moveSectionDown();
  };

  A2030.prev = function(e) {
    e.preventDefault();
    A2030.pause();
    $.fn.pagepiling.moveSectionUp();
  };

  A2030.init = function() {
    //https://github.com/alvarotrigo/pagePiling.js
    var ppSettings = {
      menu: null,
      direction: "vertical",
      verticalCentered: true,
      sectionsColor: [],
      anchors: [],
      scrollingSpeed: 700,
      easing: "swing",
      loopBottom: true,
      loopTop: false,
      css3: true,
      navigation: {
        textColor: "#fff",
        bulletsColor: "#fff",
        position: "left",
        tooltips: []
      },
      normalScrollElements: null,
      normalScrollElementTouchThreshold: 5,
      touchSensitivity: 5,
      keyboardScrolling: true,
      sectionSelector: ".section",
      animateAnchor: false,

      //events
      onLeave: A2030.onLeave,
      afterLoad: A2030.afterLoad,
      afterRender: A2030.afterRender
    };

    A2030.$pagepiling = $("#pagepiling");

    A2030.$pagepiling.pagepiling(ppSettings);
  };

  A2030.onLeaveFunctions = {
    "slide-1": function() {
      console.log("onLeave 1");
    },
    "slide-2": function() {
      console.log("onLeave 2");
    },
    "slide-3": function() {
      console.log("onLeave 3");
    },
    "slide-4": function() {
      console.log("onLeave 4");
    },
    "slide-5": function() {
      console.log("onLeave 5");
    },
    "slide-6": function() {
      console.log("onLeave 6");
    },
    "slide-7": function() {
      console.log("onLeave 7");
    },
    "slide-8": function() {
      console.log("onLeave 8");
    },
    "slide-9": function() {
      console.log("onLeave 9");
    }
  };

  A2030.afterLoadFunctions = {
    "slide-1": function() {
      console.log("afterLoad 1");
      A2030Charts.lines.randomize();
    },
    "slide-2": function() {
      console.log("afterLoad 2");
      A2030Charts.lines.randomize();
    },
    "slide-3": function() {
      console.log("afterLoad 3");
      A2030Charts.lines.randomize();
    },
    "slide-4": function() {
      console.log("afterLoad 4");
      A2030Charts.lines.randomize();
    },
    "slide-5": function() {
      console.log("afterLoad 5");
      A2030Charts.lines.randomize();
    },
    "slide-6": function() {
      console.log("afterLoad 6");
      A2030Charts.lines.randomize();
    },
    "slide-7": function() {
      console.log("afterLoad 7");
      A2030Charts.lines.randomize();
    },
    "slide-8": function() {
      console.log("afterLoad 8");
      A2030Charts.lines.randomize();
    },
    "slide-9": function() {
      console.log("afterLoad 9");
      A2030Charts.lines.randomize();
    }
  };
})(window, document, jQuery, pym);

//Init
$(document).ready(function() {
  A2030.init();
});
