import { createCertificateCards } from './assets/js/createCertificateCards.js';
import { createProjectCards } from './assets/js/createProjectCards.js';
import { headerAnimation } from './assets/js/header.js';
import { infiniteSlider } from './assets/js/infiniteSlider.js';
import { showHideResume } from './assets/js/showHideResume.js'
import { typeWriter } from './assets/js/typeWriter.js';

headerAnimation();
typeWriter();
createProjectCards();
showHideResume();
createCertificateCards();
infiniteSlider();