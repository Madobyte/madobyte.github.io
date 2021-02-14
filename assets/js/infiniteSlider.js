export const infiniteSlider = () => {
  const tools = document.getElementById('tools');

  const slider = document.createElement('div');
  slider.classList.add('slider');
  const slideTrack = document.createElement('div');
  slideTrack.classList.add('slide-track');

  logos.forEach(logo => {
    const slide = document.createElement('div');
    slide.classList.add('slide');
    const img = document.createElement('img');
    img.alt = logo.name;
    img.src = logo.src;
 
    slide.appendChild(img);
    slideTrack.appendChild(slide);
  });

  slider.appendChild(slideTrack);
  tools.appendChild(slider);
}

const logos = [
  {
    name: 'figma',
    src: './assets/images/logo-figma.svg'
  },
  {
    name: 'photoshop',
    src: './assets/images/logo-photoshop.png'
  },
  {
    name: 'illustrator',
    src: './assets/images/logo-illustrator.png'
  },
  {
    name: 'vscode',
    src: './assets/images/logo-vscode.png'
  },
  {
    name: 'github',
    src: './assets/images/logo-github.png'
  },
  {
    name: 'ubuntu',
    src: './assets/images/logo-ubuntu.png'
  },
  {
    name: 'wordpress',
    src: './assets/images/logo-wordpress.png'
  },
  {
    name: 'figma',
    src: './assets/images/logo-figma.svg'
  },
  {
    name: 'photoshop',
    src: './assets/images/logo-photoshop.png'
  },
  {
    name: 'illustrator',
    src: './assets/images/logo-illustrator.png'
  },
  {
    name: 'vscode',
    src: './assets/images/logo-vscode.png'
  },
  {
    name: 'github',
    src: './assets/images/logo-github.png'
  },  
  {
    name: 'ubuntu',
    src: './assets/images/logo-ubuntu.png'
  },
]