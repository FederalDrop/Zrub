$(function () {

	$('.header-burger').click(function (event) {
		$('.header-burger').toggleClass('active');
		$('.header').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$('.work-slider').slick({})
	$('.type-slider').slick({})
	var helpers = {
		addZeros: function (n) {
			return (n < 10) ? '0' + n : '' + n;
		}
	};

	// function sliderInitType() {
	// 	var $slider = $('.type-slider');
	// 	$slider.each(function () {
	// 		var $sliderParent = $(this).parent();
	// 		$(this).slick({
	// 			slidesToShow: 1,
	// 			slidesToScroll: 1,
	// 			speed: 1000,
	// 			dots: false,
	// 			infinite: true,
	// 			responsive: [
	// 				{
	// 					breakpoint: 767,
	// 					settings: {
	// 						adaptiveHeight: true
	// 					}
	// 				}
	// 			]
	// 		});

	// 		if ($(this).find('.head-slider__item').length > 1) {
	// 			$(this).siblings('.slides-numbers').show();
	// 		}

	// 		$(this).on('afterChange', function (event, slick, currentSlide) {
	// 			$sliderParent.find('.slides-numbers .slide-active').html(helpers.addZeros(currentSlide + 1));
	// 		});

	// 		var sliderItemsNum = $(this).find('.slick-slide').not('.slick-cloned').length;
	// 		$sliderParent.find('.slides-numbers .total').html(helpers.addZeros(sliderItemsNum));

	// 	});

	// 	//   $('.slick-next').on('click', function () {
	// 	//     console.log('test');
	// 	//     $('.slider-holder').slick('slickGoTo', 5);
	// 	// });
	// };
	// sliderInitType();

	function sliderInitTest() {
		var $slider = $('.head-slider');
		$slider.each(function () {
			var $sliderParent = $(this).parent();
			$(this).slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				speed: 1000,
				dots: false,
				infinite: true,
				responsive: [
					{
						breakpoint: 767,
						settings: {
							adaptiveHeight: true
						}
					}
				]
			});

			if ($(this).find('.head-slider__item').length > 1) {
				$(this).siblings('.slides-numbers').show();
			}

			$(this).on('afterChange', function (event, slick, currentSlide) {
				$sliderParent.find('.slides-numbers .slide-active').html(helpers.addZeros(currentSlide + 1));
			});

			var sliderItemsNum = $(this).find('.slick-slide').not('.slick-cloned').length;
			$sliderParent.find('.slides-numbers .total').html(helpers.addZeros(sliderItemsNum));

		});

		//   $('.slick-next').on('click', function () {
		//     console.log('test');
		//     $('.slider-holder').slick('slickGoTo', 5);
		// });
	};
	sliderInitTest();

	function sliderInit() {
		var $slider = $('.project-slider');
		$slider.each(function () {
			var $sliderParent = $(this).parent();
			$(this).slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				speed: 1000,
				dots: false,
				infinite: true,
				responsive: [
					{
						breakpoint: 767,
						settings: {
							adaptiveHeight: true
						}
					}
				]
			});

			if ($(this).find('.project-item').length > 1) {
				$(this).siblings('.slides-numbers').show();
			}

			$(this).on('afterChange', function (event, slick, currentSlide) {
				$sliderParent.find('.slides-numbers .slide-active').html(helpers.addZeros(currentSlide + 1));
			});

			var sliderItemsNum = $(this).find('.slick-slide').not('.slick-cloned').length;
			$sliderParent.find('.slides-numbers .total').html(helpers.addZeros(sliderItemsNum));

		});

		//   $('.slick-next').on('click', function () {
		//     console.log('test');
		//     $('.slider-holder').slick('slickGoTo', 5);
		// });
	};

	sliderInit();

});

if (window.matchMedia('(max-width: 1000px)').matches) {
	$('.types-items').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		speed: 1000,
		dots: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
	$('.price-items').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		speed: 1000,
		dots: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 650,
				settings: {
					slidesToShow: 1,
					adaptiveHeight: true,
				}
			},
		]
	});
}

window.addEventListener('load', function () {

	const onScrollHeader = () => { // объявляем основную функцию onScrollHeader

		const header = document.querySelector('.header') // находим header и записываем в константу

		let prevScroll = window.pageYOffset // узнаем на сколько была прокручена страница ранее
		let currentScroll // на сколько прокручена страница сейчас (пока нет значения)

		window.addEventListener('scroll', () => { // при прокрутке страницы
			currentScroll = window.pageYOffset // узнаем на сколько прокрутили страницу
			const headerHidden = () => header.classList.contains('header_bg') // узнаем скрыт header или нет
			if (currentScroll > prevScroll && !headerHidden()) { // если прокручиваем страницу вниз и header не скрыт
				header.classList.add('header_bg') // то скрываем header
			}
			if (currentScroll < prevScroll && headerHidden()) { // если прокручиваем страницу вверх и header скрыт
				header.classList.remove('header_bg') // то отображаем header
			}
			prevScroll = currentScroll // записываем на сколько прокручена страница на данный момент
		})
	}
	onScrollHeader() // вызываем основную функцию onScrollHeader

	//Выапдающие FAQ
	let vipad = document.querySelectorAll('.faq-item__plug');
	vipad.forEach(element => {
		element.addEventListener('click', event => {
			let currentelement = document.querySelector('.faq-item__plug.down');
			if (currentelement && currentelement !== element) {
				currentelement.classList.remove('down');
				currentelement.nextElementSibling.style.maxHeight = 0;
				currentelement.nextElementSibling.style.overflow = 'hidden';
			}
			element.classList.toggle('down');
			let answer = element.nextElementSibling;
			if (element.classList.contains('down')) {
				answer.style.maxHeight = answer.scrollHeight + 'px';
				answer.style.opacity = '1';
			}
			else {
				answer.style.maxHeight = 0;
				answer.style.opacity = '0';
				answer.style.overflow = 'hidden';
			}
		})
	})

	//Для окрашивания svg в форме обратной связи
	let callbackInput = document.querySelectorAll('.popup-callback__item input');
	callbackInput.forEach(element => {
		element.onfocus = function () {
			element.nextElementSibling.classList.add('active');
		}
	})
	callbackInput.forEach(element => {
		element.onblur = function () {
			element.nextElementSibling.classList.remove('active');
		}
	})

	function popupAir() {
		const footerElement = document.querySelector('footer');
		if (!footerElement) {
			alert('dont find teg footer')
		}
		else {
			let airElements = document.querySelectorAll('.popup-air');
			if (airElements.length > 0) {
				let airBtnOpen = document.querySelectorAll('.air-open-btn');
				createAirPopups()

				for (let i = 0; i < airBtnOpen.length; i++) {
					airBtnOpen[i].onclick = openAirPopup
				}
			}
			else {
				return
			}

			function createAirPopups() {
				let airConteiner = document.createElement("div");
				airConteiner.classList.add('air-conteiner');

				for (let i = 0; i < airElements.length; i++) {
					let airCloseIcon = document.createElement("div");
					airCloseIcon.classList.add('air-close');
					airElements[i].appendChild(airCloseIcon)
					airConteiner.appendChild(airElements[i])

				}
				footerElement.after(airConteiner)
			}

			function openAirPopup() {
				let currentAirPopupBtn = this.getAttribute('data-popup-current');
				let allPopups = document.querySelectorAll('.popup-air');
				let currentAirPopup = document.querySelector(`.popup-air[data-air="${currentAirPopupBtn}"]`)
				let closeAirIcon = currentAirPopup.querySelector('.air-close');
				closeAllAirPopups(allPopups);
				openAirConteiner();
				currentAirPopup.classList.add('air-popup_active');

				closeAirIcon.addEventListener('click', function () {
					currentAirPopup.classList.remove('air-popup_active');
					closeAirConteiner()
				})
			}


			function openAirPopupForForm(curretnDonePopup) {
				let allPopups = document.querySelectorAll('.popup-air');
				let currentAirPopup = document.querySelector(`.popup-air[data-air="${curretnDonePopup}"]`)
				let closeAirIcon = currentAirPopup.querySelector('.air-close');
				closeAllAirPopups(allPopups);
				openAirConteiner();
				currentAirPopup.classList.add('air-popup_active');

				closeAirIcon.addEventListener('click', function () {
					currentAirPopup.classList.remove('air-popup_active');
					closeAirConteiner()
				})

			}



			function openAirConteiner() {
				let airConteier = document.querySelector('.air-conteiner');
				airConteier.classList.add('air-conteiner_active');
			}

			function closeAllAirPopups(allPopups) {
				for (let i = 0; i < allPopups.length; i++) {
					allPopups[i].classList.remove('air-popup_active');
				}
			}
			function closeAirConteiner() {
				let airConteier = document.querySelector('.air-conteiner');
				airConteier.classList.remove('air-conteiner_active');
			}

			function sendFormDone() {
				let allPopups = document.querySelectorAll('.popup-air');
				let curretnDonePopup = 'formdone';
				closeAllAirPopups(allPopups)
				openAirPopupForForm(curretnDonePopup);
				setTimeout(function () {
					closeAllAirPopups(allPopups)
					setTimeout(closeAirConteiner, 1000);

				}, 3000);
			}

			//Успешная отправка формы
			document.addEventListener('wpcf7mailsent', function (event) {
				if ('279' == event.detail.contactFormId) {
					sendFormDone();
				}
				if ('280' == event.detail.contactFormId) {
					sendFormDone();
				}
				if ('311' == event.detail.contactFormId) {
					sendFormDone();
				}
				if ('199' == event.detail.contactFormId) {
					sendFormDone();
				}
				if ('108' == event.detail.contactFormId) {
					sendFormDone();
				}
			}, false);
		}
	}
	popupAir()

	function videoLoad() {
		let videoBtn = document.querySelectorAll('.video-btn');
		for (let i = 0; i < videoBtn.length; i++) {
			videoBtn[i].addEventListener('click', function () {
				let videoUrl = this.getAttribute('data-video-src');
				let closeVideoBtn = document.querySelector('.video-popup').closest('.popup-air').querySelector('.air-close');
				document.querySelector('.video-popup iframe').setAttribute('src', videoUrl)
				closeVideoBtn.addEventListener('click', function () {
					setTimeout(function () {
						document.querySelector('.video-popup iframe').setAttribute('src', '')
					}, 800)
				});
			})
		}
	}
	videoLoad()

	function formStars() {
		let stars = document.querySelectorAll('.form-star');
		let inputOut = document.querySelector('.counter');
		for (let i = 0; i < stars.length; i++) {
			stars[i].addEventListener('click', function () {
				inputOut.value = i + 1;
				for (let k = 0; k < stars.length; k++) {
					stars[k].classList.remove('active');
				}
				stars[i].classList.add('active');
				if (i == 1) {
					stars[0].classList.add('active');
				}
				if (i == 2) {
					stars[0].classList.add('active');
					stars[1].classList.add('active');
				}
				if (i == 3) {
					stars[0].classList.add('active');
					stars[1].classList.add('active');
					stars[2].classList.add('active');
				}
				if (i == 4) {
					stars[0].classList.add('active');
					stars[1].classList.add('active');
					stars[2].classList.add('active');
					stars[3].classList.add('active');
				}
			})
		}
	}
	formStars();

	[].forEach.call(document.querySelectorAll('input[type=tel]'), function (input) {
		var keyCode;
		function mask(event) {
			event.keyCode && (keyCode = event.keyCode);
			var pos = this.selectionStart;
			if (pos < 3) event.preventDefault();
			var matrix = "+38 (___) ___ __ __",
				i = 0,
				def = matrix.replace(/\D/g, ""),
				val = this.value.replace(/\D/g, ""),
				new_value = matrix.replace(/[_\d]/g, function (a) {
					return i < val.length ? val.charAt(i++) || def.charAt(i) : a
				});
			i = new_value.indexOf("_");
			if (i != -1) {
				i < 5 && (i = 3);
				new_value = new_value.slice(0, i)
			}
			var reg = matrix.substr(0, this.value.length).replace(/_+/g,
				function (a) {
					return "\\d{1," + a.length + "}"
				}).replace(/[+()]/g, "\\$&");
			reg = new RegExp("^" + reg + "$");
			if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
			if (event.type == "blur" && this.value.length < 5) this.value = ""
		}

		input.addEventListener("input", mask, false);
		input.addEventListener("focus", mask, false);
		input.addEventListener("blur", mask, false);
		input.addEventListener("keydown", mask, false)

	});

}, false);