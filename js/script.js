'use strict'

let headerLinks = document.querySelectorAll('.header_block_nav a');
for (let headerLink of headerLinks) {
	headerLink.addEventListener('click', function(event){
		event.preventDefault();

		let href = headerLink.getAttribute('href');

		document.querySelector(href).scrollIntoView({
	    	behavior: 'smooth',
	     	block: 'start'
	    });
	});
}

let menuBtn = document.querySelector('.header_block_btn');
let menu = document.querySelector('.header_block_nav');

menuBtn.addEventListener('click', function(event){
	event.preventDefault();

	let menuBtnEl = document.querySelector('.header_block_btn i');

	menu.classList.toggle('burger');

	if(menu.classList.contains('burger')) {
		showContent(menu);
		menuBtnEl.classList.remove('fa-bars');
		menuBtnEl.classList.add('fa-times');
	} else {
		hideContent(menu);
		menuBtnEl.classList.remove('fa-times');
		menuBtnEl.classList.add('fa-bars');
	}

});

let openItems = document.querySelectorAll('.open_item');
for (let openItem of openItems) {
	openItem.addEventListener('click', function(event){
		event.preventDefault();	

		let itemText = openItem.children[1];

		openItem.classList.toggle('open-text');

		if(openItem.classList.contains('open-text')) {
			showContent(itemText);
		} else {
			hideContent(itemText);
		}
	});
}

function showContent(elem){
	elem.style.height = elem.scrollHeight + 'px';
}

function hideContent(elem){
	elem.style.height = '0';
}

slideShow('.slider', {
  isAutoplay: true
});


let subscribeForm = document.querySelector('.footer_info_subscribe');
let modalSubsribe = document.querySelector('.modal_subscribe');
let closeBtn = document.querySelector('.modal_close');

subscribeForm.addEventListener('submit', function(event){
	event.preventDefault()
	
	showBackground();
	modalSubsribe.style.display = 'flex';

	let timerModal = setTimeout(function(){
			hideBackground();
			closeModal(modalSubsribe);
		}, 5000);

	closeBtn.addEventListener('click', function(event){
		clearTimeout(timerModal);
		closeModal(modalSubsribe);
		hideBackground();
	});
});

function showBackground(){
	let background = document.createElement('div');
	background.id = 'opacity-back';

	document.body.style.overflowY = 'hidden';
	document.body.append(background);
}

function hideBackground(){
	document.getElementById('opacity-back').remove();
    document.body.style.overflowY = '';
}

function closeModal(item){
	item.style.display = '';
}