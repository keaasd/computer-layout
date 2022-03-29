{
function openModal() {
    document.getElementById("modal__mb").style.left = "0px";
}
// function openModal() {    
//     document.getElementById("modal-popup").style.top = "1589px";
// }
function closeModal() {
    document.getElementById("modal__mb").style.left = "-200%";
}
}
// modal window
const modalWindow = document.querySelector('.modal');
const buttonModals = document.querySelectorAll('.modal__button');
const modalClose = document.querySelector('.modal__close');
const body = document.querySelector('body');

// по клику по кнопке включаем меню 
// убираем прокрутку с body 
buttonModals.forEach((item) => {
	item.addEventListener('click', () => {
		modalWindow.style.display = 'flex';
		body.classList.add('noscroll');
	});
});
// закрываем модалку при нажатии вне
// вернем прокрутку в body  
modalWindow.addEventListener('click', (e) => {
	const isModal = e.target.closest('.modal__inner');
	if (!isModal) {
	modalWindow.style.display = 'none';
	body.classList.remove('noscroll');
}
});
// по клику на крестик включаем скрол 
modalClose.addEventListener('click', () => {
	modalWindow.style.display = 'none';
	body.classList.remove('noscroll');
})