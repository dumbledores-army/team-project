// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-modal-buy-open]"),
//     closeModalBtn: document.querySelector("[data-modal-buy-close]"),
//     modal: document.querySelector("[data-modal-buy]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle("backdrop-modal-buy--hidden");
//   }
// })();
function openModal() {
        document
          .querySelector('.backdrop-modal-buy')
          .classList.toggle('backdrop-modal-buy--hidden');
      }


