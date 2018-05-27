document.addEventListener("DOMContentLoaded", function () {
  var funcBox = document.querySelectorAll('.func-box');

  function showFuncBoxes (){
    funcBox.forEach(function (element) {
      var elementRect = element.getBoundingClientRect();
      // Element.getBoundingClientRect() method returns position of the element relative to the viewport
      // window.innerHeight calculates Height (in pixels) of the browser window viewport
      if (elementRect.top < window.innerHeight - (elementRect.height / 3)) {
        element.classList.add('func-show-box');
      }
      else {
        element.classList.remove('func-show-box');
      }
    });
  }
  showFuncBoxes();

  document.addEventListener("scroll", function () {
    showFuncBoxes();
  });
});