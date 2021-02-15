export const headerAnimation = () => {
  const headerIcons = document.querySelector('nav').childNodes;
  headerIcons.forEach(icon => {
    if (icon.nodeName !== '#text') {
      icon.addEventListener('mouseenter', () => {
        
      })
    }
  })
}