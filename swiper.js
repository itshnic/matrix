const swiper = new Swiper(".swiper", {
	loop: true,
	speed: 800,
	spaceBetween: 400,
	centeredSlides: true,

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
