(function() {

	let slideIndex   = 0;
	let slides 		 = document.getElementsByClassName("slider__slide");
	let leftButton   = document.getElementsByClassName("slider__button--previous")[0];
	let rightButton  = document.getElementsByClassName("slider__button--next")[0];


	function showSlides(index) {

		if (index >= slides.length) {
			slideIndex = 0;
		}

		if (index < 0) {
			slideIndex = slides.length - 1;
		}

		Array.from(slides).forEach(slide => slide.style.transform = `translateX(-${slideIndex * 100}%)`);

	}

	let interval = 5000;
	let timer = setInterval(() => {
		showSlides(++slideIndex);
	}, interval);


	leftButton.addEventListener("click", (e) => {
		e.preventDefault();
		clearInterval(timer);
		showSlides(--slideIndex);
		timer = setInterval(() => {
			showSlides(++slideIndex);
			}, interval);

	});

	rightButton.addEventListener("click", (e) => {
		e.preventDefault();
		clearInterval(timer);
		showSlides(++slideIndex);
		timer = setInterval(() => {
			showSlides(++slideIndex);
			}, interval);
	});

	//showSlides(slideIndex);

})();

