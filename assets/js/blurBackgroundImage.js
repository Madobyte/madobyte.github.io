export const blurBackgroundImage = () => {
  const introductionSection = document.getElementById('introduction');
  const filter = document.createElement('div');
  filter.id = 'blur-filter';
  filter.style.cssText = `
    background: url($intro-bg-url);
    height: 100vh;
    filter: blur(5px);
  `;

  introductionSection.insertBefore(filter, introductionSection.firstChild)
}