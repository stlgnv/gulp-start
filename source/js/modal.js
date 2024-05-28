const productButton = document.querySelectorAll('.product__button');
const modalProduct = document.querySelector('.modal__product');
const modalProductClose = document.querySelector('.modal__close');
const modalContinueShopping = document.querySelector('.modal__button');
const modalOverlay = document.querySelector('.overlay');

const modalClose = () => {
  modalProduct.classList.remove('modal__product--showed');
  modalOverlay.classList.remove('overlay--showed');
  modalProductClose.removeEventListener('click', modalClose);
  modalContinueShopping.removeEventListener('click', modalClose);
  modalOverlay.removeEventListener('click', modalClose);
};

function openModal () {
  modalProduct.classList.add('modal__product--showed');
  modalOverlay.classList.add('overlay--showed');
  modalProductClose.addEventListener('click', modalClose);
  modalContinueShopping.addEventListener('click', modalClose);
  modalOverlay.addEventListener('click', modalClose);
}

productButton.forEach(function(productButton){
  productButton.addEventListener('click', openModal);
});
