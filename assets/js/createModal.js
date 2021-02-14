export const createModal = content => {
  const modal = document.createElement('div');
  modal.id = 'modal';
  const modalContent = document.createElement('div');
  modalContent.id = 'modal-content';

  modal.appendChild(modalContent);
  modalContent.appendChild(content);
  document.body.insertBefore(modal, document.body.firstChild);

  modal.addEventListener('click', () => {
    modal.style.cssText = `animation: fadeout 0.5s forwards;`
    modalContent.style.cssText = `animation: popout 0.5s forwards;`

    modalContent.addEventListener('animationend', () => {
      modal.remove()
    })
  })
}