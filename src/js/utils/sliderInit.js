export function sliderInitialization() {
  let Flickity = require('flickity');
  let flkty = new Flickity( '.slider', {
    freeScroll: true,
    wrapAround:  true,
    initialIndex: 6,
    groupCells: true
  });
}