import { createCertificateCards } from './assets/js/createCertificateCards.js';
import { createProjectCards } from './assets/js/createProjectCards.js';
import { headerAnimation } from './assets/js/header.js';
import { hoverProjectCards } from './assets/js/hoverProjectCards.js';
import { infiniteSlider } from './assets/js/infiniteSlider.js';
import { scrollAction } from './assets/js/scrollAction.js';
import { showHideResume } from './assets/js/showHideResume.js'

headerAnimation();
scrollAction();
createProjectCards();
hoverProjectCards();
showHideResume();
createCertificateCards();
infiniteSlider();