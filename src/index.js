import "./styles.css";
import loadPageHome from './home.js';
import loadPageMenu from './menu.js';
import loadPageAbout from './about.js';

const contentDiv = document.getElementById('content');

function clearContent() {
    contentDiv.innerHTML = "";
}

loadPageHome();

const homeButton = document.getElementById('home-button');
homeButton.addEventListener('click', () => {
    clearContent();
    loadPageHome();
});

const menuButton = document.getElementById('menu-button');
menuButton.addEventListener('click', () => {
    clearContent();
    loadPageMenu();
});

const aboutButton = document.getElementById('about-button');
aboutButton.addEventListener('click', () => {
    clearContent();
    loadPageAbout();
});