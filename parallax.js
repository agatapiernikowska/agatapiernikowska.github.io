window.addEventListener('scroll', function (event) {
  document.querySelector('.hero-headline').style.top = (window.pageYOffset * 0.7) + 'px';
})
