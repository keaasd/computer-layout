{
function openModal() {
    document.getElementById("modal").style.left = "0px";
}
// function openModal() {    
//     document.getElementById("modal-popup").style.top = "1589px";
// }
function closeModal() {
    document.getElementById("modal").style.left = "-200%";
}
}
// modal window
const modalWindow = document.querySelector('.modal');
const buttonModals = document.querySelectorAll('.modal__button');
const modalClose = document.querySelector('.modal__close');
const body = document.querySelector('body');

buttonModals.forEach((item) => {
	item.addEventListener('click', () => {
		modalWindow.style.display = 'flex';
	});
});

modalWindow.addEventListener('click', (e) => {
	const isModal = e.target.closest('.modal__inner');
	if (!isModal) {
	modalWindow.style.display = 'none';
	body.classList.remove('noscroll');
}
});

modalClose.addEventListener('click', () => {
	modalWindow.style.display = 'none';
	body.classList.remove('noscroll');
})