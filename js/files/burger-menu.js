let unlock = true;
//=================
//Menu
let iconMenu = document.querySelector(".menu-container");
let menuBody = document.querySelector(".header__menu");
if (iconMenu != null) {
	let delay = 500;
	let menuBody = document.querySelector(".header__menu");
	iconMenu.addEventListener("click", function (e) {
		if (unlock) {
			body_lock(delay);
			iconMenu.classList.toggle("active");
			menuBody.classList.toggle("active");
		}
	});
};
function menu_close() {
	let iconMenu = document.querySelector(".menu-container");
	let menuBody = document.querySelector(".header__menu");
	iconMenu.classList.remove("active");
	menuBody.classList.remove("active");
}
//=================

//Menu2
let iconMenu2 = document.querySelector(".icon-menu2");
let menuBody2 = document.querySelector(".dashboard__navigation");
if (iconMenu2 != null) {
	let delay = 500;
	let menuBody2 = document.querySelector(".dashboard__navigation");
	iconMenu2.addEventListener("click", function (e) {
		if (unlock) {
			body_lock(delay);
			iconMenu2.classList.toggle("active");
			menuBody2.classList.toggle("active");
		}
	});
};
function menu_close() {
	let iconMenu2 = document.querySelector(".icon-menu");
	let menuBody2 = document.querySelector(".dashboard__navigation");
	iconMenu2.classList.remove("active");
	menuBody2.classList.remove("active");
}

//=================

//BodyLock
function body_lock(delay) {
	let body = document.querySelector("body");
	if (body.classList.contains('_lock')) {
		body_lock_remove(delay);
	} else {
		body_lock_add(delay);
	}
}
function body_lock_remove(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		setTimeout(() => {
			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index];
				el.style.paddingRight = '0px';
			}
			body.style.paddingRight = '0px';
			body.classList.remove("_lock");
		}, delay);

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
function body_lock_add(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		for (let index = 0; index < lock_padding.length; index++) {
			const el = lock_padding[index];
			el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		}
		body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		body.classList.add("_lock");

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}