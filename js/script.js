const i18Obj = {
	'en': {
		'skills': 'Skills',
		'portfolio': 'Portfolio',
		'video': 'Video',
		'price': 'Price',
		'contacts': 'Contacts',
		'hero-title': 'Alexa Rise',
		'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
		'hire': 'Hire me',
		'skill-title-1': 'Digital photography',
		'skill-text-1': 'High-quality photos in the studio and on the nature',
		'skill-title-2': 'Video shooting',
		'skill-text-2': 'Capture your moments so that they always stay with you',
		'skill-title-3': 'Retouch',
		'skill-text-3': 'I strive to make photography surpass reality',
		'skill-title-4': 'Audio',
		'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
		'winter': 'Winter',
		'spring': 'Spring',
		'summer': 'Summer',
		'autumn': 'Autumn',
		'price-description-1-span-1': 'One location',
		'price-description-1-span-2': '120 photos in color',
		'price-description-1-span-3': '12 photos in retouch',
		'price-description-1-span-4': 'Readiness 2-3 weeks',
		'price-description-1-span-5': 'Make up, visage',
		'price-description-2-span-1': 'One or two locations',
		'price-description-2-span-2': '200 photos in color',
		'price-description-2-span-3': '20 photos in retouch',
		'price-description-2-span-4': 'Readiness 1-2 weeks',
		'price-description-2-span-5': 'Make up, visage',
		'price-description-3-span-1': 'Three locations or more',
		'price-description-3-span-2': '300 photos in color',
		'price-description-3-span-3': '50 photos in retouch',
		'price-description-3-span-4': 'Readiness 1 week',
		'price-description-3-span-5': 'Make up, visage, hairstyle',
		'order': 'Order shooting',
		'contact-me': 'Contact me',
		'send-message': 'Send message'
	},
	'ru': {
		'skills': 'Навыки',
		'portfolio': 'Портфолио',
		'video': 'Видео',
		'price': 'Цены',
		'contacts': 'Контакты',
		'hero-title': 'Алекса Райс',
		'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
		'hire': 'Пригласить',
		'skill-title-1': 'Фотография',
		'skill-text-1': 'Высококачественные фото в студии и на природе',
		'skill-title-2': 'Видеосъемка',
		'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
		'skill-title-3': 'Ретушь',
		'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
		'skill-title-4': 'Звук',
		'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
		'winter': 'Зима',
		'spring': 'Весна',
		'summer': 'Лето',
		'autumn': 'Осень',
		'price-description-1-span-1': 'Одна локация',
		'price-description-1-span-2': '120 цветных фото',
		'price-description-1-span-3': '12 отретушированных фото',
		'price-description-1-span-4': 'Готовность через 2-3 недели',
		'price-description-1-span-5': 'Макияж, визаж',
		'price-description-2-span-1': 'Одна-две локации',
		'price-description-2-span-2': '200 цветных фото',
		'price-description-2-span-3': '20 отретушированных фото',
		'price-description-2-span-4': 'Готовность через 1-2 недели',
		'price-description-2-span-5': 'Макияж, визаж',
		'price-description-3-span-1': 'Три локации и больше',
		'price-description-3-span-2': '300 цветных фото',
		'price-description-3-span-3': '50 отретушированных фото',
		'price-description-3-span-4': 'Готовность через 1 неделю',
		'price-description-3-span-5': 'Макияж, визаж, прическа',
		'order': 'Заказать съемку',
		'contact-me': 'Свяжитесь со мной',
		'send-message': 'Отправить'
	}
}


window.lang = 'en'
window.theme = 'light'

/*   ---Burger---   */

const burger = document.querySelector('.burger-btn');
const menu = document.querySelector('.nav-list');
const link = document.querySelectorAll('.nav-link');
burger.addEventListener('click', () => {
	menu.classList.toggle('open');
	burger.classList.toggle('open');
	if (checker.classList.contains("light-theme")) {
		navWh.classList.toggle('light-theme')
	}
});
link.forEach((el) => el.addEventListener('click', () => {
	menu.classList.remove('open')
	burger.classList.remove('open')
	navWh.classList.remove('light-theme')
}));

/*   ---Portfolio BTN---   */

const portfolioBtn = document.querySelectorAll(".black-button");
const portfolioImg = document.querySelectorAll(".portfolio-img");
const portfolioBtns = document.querySelector(".portfolio-btn");
const checker = document.querySelector("body");
function changeImage(event) {
	if (event.target.classList.contains("black-button")) {
		portfolioImg.forEach((img, index) => img.src = `./assets/img/${event.target.dataset.season}/${index + 1}.jpg`)

		portfolioBtn.forEach((button) => button.classList.remove('black-button-wh-active'))
		portfolioBtn.forEach((button) => button.classList.remove('black-button-focus'))

		if (checker.classList.contains("light-theme")) {
			event.target.classList.add('black-button-wh-active')
		} else {
			event.target.classList.add('black-button-focus')
		}
	}
}
portfolioBtns.addEventListener('click', changeImage);

/*   ---Language---   */

const langBtn = document.querySelector(".header-lang");
langBtns = document.querySelectorAll('.lang-link')
function translate(event) {
	if (event.target.classList.contains('lang-link')) {
		const translateList = document.querySelectorAll('[data-iks]');
		translateList.forEach((item) => {
			item.textContent = i18Obj[event.target.dataset.lang][item.dataset.iks]
			langBtns.forEach((item) => item.classList.remove('lang-link-focus'))
			event.target.classList.add('lang-link-focus')
			if (event.target.dataset.lang === 'en') {
				lang = 'en'
			} else if (event.target.dataset.lang === 'ru') {
				lang = 'ru'
			}

		})
	}
}
langBtn.addEventListener('click', translate)

/*   ---Theme---   */

const lightBtn = document.querySelector(".theme");
const switchers = document.querySelectorAll("body, .section-skills, .section-portfolio, .section-video, .section-price, .skill-header, .skill-item, .portfolio-header")
const hero = document.querySelector(".section-hero");
const head = document.querySelector('.header-container');
const contact = document.querySelector(".section-contact")
const logo = document.querySelectorAll(".logo-link, .video-btn ");
const linkItem = document.querySelectorAll(".nav-link, .footer-link, .lang-link, .contact-header")
const input = document.querySelectorAll(".contact-input, .text-input")
const burg = document.querySelectorAll(".line")
const gb2 = document.querySelectorAll(".gold-button-2")
const gb = document.querySelectorAll(".gold-button")
const bb = document.querySelectorAll(".black-button");
const bbFocus = document.querySelector(".black-button-focus")
const navWh = document.querySelector(".nav-list")
const themeIcon = document.querySelector(".theme")

function lightOn() {
	switchers.forEach((item) => item.classList.toggle('light-theme'))
	hero.classList.toggle('section-hero-wh')
	head.classList.toggle('header-wh')
	contact.classList.toggle('section-contact-wh')
	linkItem.forEach((item) => item.classList.toggle('link-wh'))
	input.forEach((el) => el.classList.toggle('input-wh'))
	logo.forEach((item) => item.classList.toggle('logo-link-wh'))
	burg.forEach((el) => el.classList.toggle('bg-color'))
	gb2.forEach((el) => el.classList.toggle('gold-button-wh'))
	gb.forEach((el) => el.classList.toggle('gold-button-wh2'))
	bb.forEach((el) => el.classList.toggle('black-btn-wh'))
	themeIcon.classList.toggle('switcher')
	if (themeIcon.classList.contains('switcher')) {
		theme = 'light'
	} else {
		theme = 'dark'
	}
}
lightBtn.addEventListener('click', lightOn)

/*   ---Local Storage---   */

function setLocalStorage() {
	localStorage.setItem('lang', lang);
	localStorage.setItem('theme', theme);
}
window.addEventListener('beforeunload', setLocalStorage)

function translates(lang) {
	const translateList = document.querySelectorAll('[data-iks]');
	translateList.forEach((item) => {
		item.textContent = i18Obj[lang][item.dataset.iks]
	})
}

function getLocalStorage() {
	lang = localStorage.getItem('lang')
	theme = localStorage.getItem('theme')
	translates(lang)
	if (theme === 'light' && themeIcon.classList.contains('theme')) {
		lightOn()
	}
}
window.addEventListener('load', getLocalStorage)

/*   ---Video---   */

const videoScreen = document.querySelector(".video-scr")
const videoBtn = document.querySelector(".play-pause")
const scrBtn = document.querySelector(".video-btn")
const volumeBar = document.querySelector(".volume-bar")
const volumeBtn = document.querySelector(".volume-btn")
const progressBar = document.querySelector(".progress-bar")
const progressFill = document.querySelector(".progress-fill")

function playOn() {
	let point;
	if (videoScreen.paused || videoScreen.ended) {
		videoScreen.play()
		videoBtn.classList.add('pause')
		scrBtn.classList.add('video-btn-none')
		point = window.setInterval(progress, 100)
	} else {
		videoScreen.pause()
		videoBtn.classList.remove('pause')
		scrBtn.classList.remove('video-btn-none')
	}
}

function updateVolume() {
	if (videoScreen.muted) {
		videoScreen.muted = false
	}
	videoScreen.volume = volumeBar.value
	if (volumeBar.value < 0.02 || videoScreen.muted) {
		volumeBtn.classList.add('volume-btn-none')
	}
	if (volumeBar.value > 0) {
		volumeBtn.classList.remove('volume-btn-none')
	}
	const value = this.value;
	volumeBar.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${value * 100}%, #fff ${value * 100}%, #fff 100%)`
}

function volumeOff() {
	videoScreen.muted = !videoScreen.muted
	if (videoScreen.muted) {
		volumeBar.setAttribute('data-volume', volumeBar.value)
		volumeBar.value = 0
		volumeBar.style.background = `#fff`
	} else {
		volumeBar.value = volumeBar.dataset.volume
		volumeBar.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${volumeBar.dataset.volume * 100}%, #fff ${volumeBar.dataset.volume * 100}%, #fff 100%)`
	}
	volumeBtn.classList.toggle('volume-btn-none')
}

function progress() {
	let length = videoScreen.currentTime / videoScreen.duration;
	progressFill.style.flexBasis = `${(Math.floor(length * 100))}%`;
}

function remote(q) {
	let curPos = (q.clientX - progressBar.offsetLeft) / progressBar.clientWidth;
	progressFill.style.flexBasis = `${(Math.floor(curPos * 100))}%`;
	videoScreen.currentTime = curPos * videoScreen.duration
}

videoBtn.addEventListener('click', playOn)
videoScreen.addEventListener('click', playOn)
scrBtn.addEventListener('click', playOn)
volumeBtn.addEventListener('click', volumeOff)
volumeBar.addEventListener('input', updateVolume)
progressBar.addEventListener('click', remote)
videoScreen.addEventListener('ended', () => {
	videoBtn.classList.remove('pause')
	scrBtn.classList.remove('video-btn-none')
})
document.addEventListener('keydown', () => {
	if (videoScreen.played || videoScreen.paused) {
		if (event.code === 'ArrowRight') {
			videoScreen.currentTime = videoScreen.currentTime + 3
		}
		if (event.code === 'ArrowLeft') {
			videoScreen.currentTime = videoScreen.currentTime - 2
		}
	}
})
window.addEventListener('load', () => {
	alert('Перемотка видео реализована на стрелках')
})
