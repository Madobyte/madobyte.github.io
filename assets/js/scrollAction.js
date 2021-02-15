export const scrollAction = () => {
  var lastScrollTop = 0;

  window.addEventListener("scroll", function(){ 
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop){
        //console.log('scrolldown')
    } else {
        //console.log('scrollup')
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  }, false);
}