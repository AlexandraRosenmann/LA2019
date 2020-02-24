
// 72: Wrap every letter in a span
var textWrapper = document.querySelector('.ml3');

anime.timeline({loop: false})
  .add({
    targets: '.ml3',
    opacity: [0,1],
    easing: "easeInQuad",
    duration: 1050,
    delay: (el, i) => 250 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 1,
    duration: 100,
    delay: 1000
  });
// HOURS: Wrap every letter in a span
var textWrapper = document.querySelector('.ml1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml1 .letter',
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 450 * (i+1)
  }).add({
    targets: '.ml1 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=875',
    delay: (el, i, l) => 80 * (l - i)
  });
// IN: Wrap every letter in a span

var ml4 = {};
ml4.opacityIn = [0,1];
ml4.scaleIn = [0.1, 1];
ml4.durationIn = 6500;
ml4.delay = 50;

anime.timeline({loop: false})
  .add({
    targets: '.ml4 .letters-1',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-1',
    opacity: 0,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  });
//LOS ANGELES: Wrap every letter in a span
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml2 .letter',
    scale: [10,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 7050,
    delay: (el, i) => 1*i
  }).add({
    targets: '.ml2',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
(function() {
  var elements;
  var windowHeight;

  function init() {
    elements = document.querySelectorAll('.hidden');
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        element.classList.add('fade-in-element');
        element.classList.remove('hidden');
      }
    }
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);

  init();
  checkPosition();
})();