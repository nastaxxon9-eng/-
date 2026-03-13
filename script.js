let styleMode = localStorage.getItem("styleMode");
let lang = localStorage.getItem("lang");

const styleToggle = document.querySelector(".button");
const styleButton = document.getElementById("styleButton");

let languageContent = {
  "en": {
    "logo": "ALEXANDER ALLIS",
    "nav-home": "HOME",
    "nav-portfolio": "PORTFOLIO",
    "nav-resume": "RESUME",
    "nav-blog": "BLOG",
    "nav-contacts": "CONTACTS",
    "welcome-1": "— HELLO",
    "welcome-2.1": "I'm",
    "welcome-2.2": "Allis",
    "welcome-2.3": "Alexander",
    "welcome-3": "This page is a reflection of me, my abilities, <br/>talents and hobbies",
    "welcome-download": "DOWNLOAD RESUME",
    "dark": "DARK",
    "light": "LIGHT",
  },
  "ru": {
    "logo": "АЛЕКСАНДР АЛЛИС",
    "nav-home": "ГЛАВНАЯ",
    "nav-portfolio": "ПОРТФОЛИО",
    "nav-resume": "РЕЗЮМЕ",
    "nav-blog": "БЛОГ",
    "nav-contacts": "КОНТАКТЫ",
    "welcome-1": "— ПРИВЕТ",
    "welcome-2.1": "Я",
    "welcome-2.2": "Аллис",
    "welcome-2.3": "Александр",
    "welcome-3": "Данная страница отражение меня, моих способностей, <br/>талантов и увлечений",
    "welcome-download": "СКАЧАТЬ РЕЗЮМЕ",
    "dark": "ТЕМНАЯ",
    "light": "СВЕТЛАЯ",
  }
}

const enableDarkStyle = () => {
  document.body.classList.add("dark-style");
  localStorage.setItem("styleMode", "dark");
  refreshLangButton();
};

const disableDarkStyle = () => {
  document.body.classList.remove("dark-style");
  localStorage.setItem("styleMode", "light");
  refreshLangButton();
};

styleToggle.addEventListener("click", () => {
  styleMode = localStorage.getItem("styleMode");
  if (styleMode !== "dark") {
    enableDarkStyle();
  } else {
    disableDarkStyle();
  }
});

if (styleMode === "dark") {
  enableDarkStyle();
}


// Смена языка
if (lang === "en") {
  switchLang("en");
} 

function refreshLangButton() {
  localLang = localStorage.getItem("lang");
  styleMode = localStorage.getItem("styleMode");
  
  if (styleMode === "light") {
    styleButton.textContent = languageContent[localLang]["dark"];
  } else {
    styleButton.textContent = languageContent[localLang]["light"];
  }
}

function switchLang(lang) {
  localStorage.setItem("lang", lang);

  const buttonRU = document.getElementById("lang-ru");
  const buttonEN = document.getElementById("lang-en");

  if (lang === "ru") {
    buttonEN.classList.remove("active");
    buttonRU.classList.add("active");
  } else {
    buttonRU.classList.remove("active");
    buttonEN.classList.add("active");
  }

  refreshLangButton();

  for (let key in languageContent[lang]) {
    document.getElementById(key).innerHTML = languageContent[lang][key];
  }
}