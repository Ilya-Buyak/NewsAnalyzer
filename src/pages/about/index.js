import './style.css'

const copyright = document.querySelector('.footer__copyright');
copyright.textContent = `© ${new Date().getFullYear()} Supersite`
// на следующем этапе перенесется в отдельный js файл
function sliderInitialization() {
  let Flickity = require('flickity');
  let flkty = new Flickity( '.slider', {
    freeScroll: true,
    wrapAround:  true,
    initialIndex: 6,
    groupCells: true
  });
}

sliderInitialization()