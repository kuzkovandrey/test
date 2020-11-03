(function() {
	let slideIndex   = 0;
	let indicators   = document.getElementsByClassName("indicators__item");
	let slides 		 = document.getElementsByClassName("review-slide");
	let leftButton   = document.getElementsByClassName("tools__button--previous")[0];
	let rightButton  = document.getElementsByClassName("tools__button--next")[0];

	function currentSlide(n) {
		clearInterval(timer);
		showSlides(slideIndex = n);

		timer = setInterval(() => {
			showSlides(++slideIndex);
			}, interval);
	}

	function showSlides(index) {

		if (index >= slides.length) {
			slideIndex = 0;
		}

		if (index < 0) {
			slideIndex = slides.length - 1;
		}

		Array.from(indicators).forEach(indicator => indicator.className = "indicators__item");
		Array.from(slides).forEach(slide => slide.style.transform = `translateX(-${slideIndex * 150}%)`);
	    indicators[slideIndex].className += " indicators__item--active";
	}

	let interval = 3000;
	let timer = setInterval(() => {
		showSlides(++slideIndex);
	}, interval);


	leftButton.addEventListener("click", e => {
		e.preventDefault();
		clearInterval(timer);
		showSlides(--slideIndex);
		timer = setInterval(() => {
			showSlides(++slideIndex);
			}, interval);

	});

	rightButton.addEventListener("click", e => {
		e.preventDefault();
		clearInterval(timer);
		showSlides(++slideIndex);
		timer = setInterval(() => {
			showSlides(++slideIndex);
			}, interval);
	});

	Array.from(indicators).forEach((indicator, index, indicators) => {
		indicators[index].addEventListener("click", e => {
		e.preventDefault();
		currentSlide(index);
		});
	});
	showSlides(slideIndex); 
})();