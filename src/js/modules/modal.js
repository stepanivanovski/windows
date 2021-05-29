function modal(callModal, askModal, callBut, askbuts){
  const callButton = document.querySelector(callBut),
      askButtons =  document.querySelectorAll(askbuts),
      modalPopup = document.querySelector(askModal),
      modalPopupEng = document.querySelector(callModal);


  function openModal(modal) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';     
  }

  function closeModal(modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';         
  }

  function watchModal(modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.classList.contains('popup_close')) {
        closeModal(modal);
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.code === "Escape" && window.getComputedStyle(modal).display === 'block') { 
          closeModal(modal);
      }
    });
  }

  callButton.addEventListener('click', () => {
    openModal(modalPopupEng);
    watchModal(modalPopupEng);
  });

  askButtons.forEach((item) => {
    item.addEventListener('click', () => {
      openModal(modalPopup);
      watchModal(modalPopup);
    });
  });
}

export default modal;



      
