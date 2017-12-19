var pymChild = pym.Child({ polling: 500 });

var A2030;

(function(global, document, $, pym) {
  'use strict';
  A2030 = {};

  A2030.pymChild = pym.Child({ polling: 500 });

  A2030.currentIndex = 1;
  A2030.intervalTime = 4 * 1000;
  A2030.intervalId = null;
  A2030.$timer = $('#timer');
  A2030.$container = $('#a2030-container');

  A2030.onLeave = function(index, nextIndex, direction) {
    if ($.isFunction(A2030.onLeaveFunctions['slide-' + index])) {
      A2030.onLeaveFunctions['slide-' + index].call();
      if (nextIndex == 1) {
        A2030.$controls.fadeOut();
      } else {
        A2030.$controls.fadeIn();
      }
    }
  };

  A2030.afterLoad = function(anchorLink, index) {
    if ($.isFunction(A2030.afterLoadFunctions['slide-' + index])) {
      A2030.afterLoadFunctions['slide-' + index].call();
      A2030.currentIndex = index;
    }
  };

  A2030.afterRender = function() {
    A2030.afterLoadFunctions['slide-1'].call();
    A2030.currentIndex = 1;

    //var controlsHTML = '<div id=\'controls\'><div id=\'play\'>play</div> - <div id=\'pause\'>pause</div> // <div id=\'next\'>next</div> - <div id=\'prev\'>prev</div></div>';
    var controlsHTML =
      '<div id=\'controls\'><div id=\'prev\' class=\'btn-control\'>&#9664;</div><div id=\'next\' class=\'btn-control\'>&#9654;</div></div>';

    $('#pp-nav').append(controlsHTML);
    A2030.$controls = $('#controls').fadeOut();
    //A2030.$controls.find('#play').on('click touchstart', A2030.play);
    //A2030.$controls.find('#pause').on('click touchstart', A2030.pause);
    A2030.$controls.find('#next').on('click touchstart', A2030.next);
    A2030.$controls.find('#prev').on('click touchstart', A2030.prev);

    A2030.$container.find('#btn-avanzar').on('click touchstart', A2030.next);

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
        width: '0%'
      },
      A2030.intervalTime,
      function() {
        $.fn.pagepiling.moveSectionDown();
        A2030.clearBar();
      }
    );
  };

  A2030.clearBar = function(e) {
    A2030.$timer.css('width', '100%');
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
      direction: 'vertical',
      verticalCentered: true,
      sectionsColor: [],
      anchors: [],
      scrollingSpeed: 700,
      easing: 'swing',
      loopBottom: true,
      loopTop: false,
      css3: true,
      navigation: {
        textColor: '#fff',
        bulletsColor: '#fff',
        position: 'left',
        tooltips: [
          'Estamos en 2030',
          'Revolución Industrial',
          'Demanda energética',
          'Bono demográfico',
          'Desafíos',
          'Argentina 2030',
          'Equipo',
          'Ejes de trabajo',
          'Camino a 2030'
        ]
      },
      normalScrollElements: null,
      normalScrollElementTouchThreshold: 5,
      touchSensitivity: 5,
      keyboardScrolling: true,
      sectionSelector: '.section',
      animateAnchor: false,

      //events
      onLeave: A2030.onLeave,
      afterLoad: A2030.afterLoad,
      afterRender: A2030.afterRender
    };

    A2030.$pagepiling = $('#pagepiling');

    A2030.$pagepiling.pagepiling(ppSettings);
  };

  A2030.onLeaveFunctions = {
    'slide-1': function() {},
    'slide-2': function() {},
    'slide-3': function() {},
    'slide-4': function() {},
    'slide-5': function() {},
    'slide-6': function() {},
    'slide-7': function() {
      setTimeout(function() {
        $('#slide7 [data-toggle="popover"]').popover('hide');
      }, 500);
    },
    'slide-8': function() {
      setTimeout(function() {
        $('#slide8 [data-toggle="popover"]').popover('hide');
      }, 500);
    },
    'slide-9': function() {}
  };

  A2030.afterLoadFunctions = {
    'slide-1': function() {
      A2030Charts.lines.randomize();
    },
    'slide-2': function() {
      //A2030Charts.lines.randomize();
      var w = $('#a2030-container').width();
      A2030Charts.lines.render([0, 0, 0, 0, 0, w, w, w, w, w]);
      //A2030Charts.network.init();
    },
    'slide-3': function() {
      A2030Charts.energy.init();
    },
    'slide-4': function() {
      A2030Charts.population.init();
    },
    'slide-5': function() {
      A2030Charts.lines.randomize();
    },
    'slide-6': function() {
      A2030Charts.lines.randomize();
    },
    'slide-7': function() {
      A2030Charts.lines.randomize();
      $('#slide7 [data-toggle="popover"]').each(function(i) {
        var el = $(this);
        setTimeout(function() {
          if (A2030.currentIndex == 7) el.popover('show');
        }, i * 1000);
      });
    },
    'slide-8': function() {
      A2030Charts.lines.randomize();
      $('#slide8 [data-toggle="popover"]').each(function(i) {
        var el = $(this);
        setTimeout(function() {
          if (A2030.currentIndex == 8) el.popover('show');
        }, i * 1000);
      });
    },
    'slide-9': function() {
      A2030Charts.lines.randomize();
    }
  };
})(window, document, jQuery, pym);

//Init
$(document).ready(function() {
  A2030.init();
  $('[data-toggle="popover"]').popover();
});
