import { certificates } from "./certificates.js"

export const createCertificateCards = () => {
  const certContainer = document.getElementById('certificates-container');

  certificates.forEach(certificate => {
    /* Creates certificate card */
    const card = document.createElement('div');
    card.id = certificate.title;
    card.classList.add('certificate-card')
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    const infoContainer = document.createElement('div');
    infoContainer.classList.add('info-container');

    card.appendChild(imgContainer);
    card.appendChild(infoContainer);

    imgContainer.style.cssText = `
      background: url(./assets/images/logo-fcc.png) no-repeat;
      background-size: 100%;
      background-position: center;
      background-color: #a8dadc;
    `;

    const certificateTitle = document.createElement('a');
    certificateTitle.href = certificate.url;
    certificateTitle.classList.add('certificate-title');
    certificateTitle.innerText = certificate.title;

    const from = document.createElement('p');
    from.classList.add('from');
    from.innerText = certificate.from;

    infoContainer.appendChild(certificateTitle);
    infoContainer.appendChild(from);

    certContainer.appendChild(card);
  })
}