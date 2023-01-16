/* eslint-disable no-script-url */
import './style.css';
import logo from './images/logo.png';
// eslint-disable-next-line import/no-cycle
import callMenuPage from './menu';

function createNavBar(id) {
  const mainContainer = document.getElementById(id);
  const navBarContainer = document.createElement('div');
  navBarContainer.classList.add('navbar-container');
  mainContainer.appendChild(navBarContainer);

  const navBarElements = document.createElement('div');
  navBarElements.classList.add('navbar-elements');
  navBarContainer.appendChild(navBarElements);

  const aHome = document.createElement('a');
  aHome.setAttribute('href', 'javascript:callHomePage()');
  navBarElements.appendChild(aHome);

  const home = document.createElement('div');
  home.classList.add('home');
  aHome.appendChild(home);

  const homeText = document.createElement('h3');
  homeText.innerHTML = 'HOME';
  home.appendChild(homeText);

  const aMenu = document.createElement('a');
  aMenu.setAttribute('href', 'javascript:callMenuPage()');
  navBarElements.appendChild(aMenu);

  const menu = document.createElement('div');
  menu.classList.add('menu');
  aMenu.appendChild(menu);

  const menuText = document.createElement('h3');
  menuText.innerHTML = 'MENU';
  menu.appendChild(menuText);

  const aContact = document.createElement('a');
  aContact.setAttribute('href', 'javascript:callContactPage()');
  navBarElements.appendChild(aContact);

  const contact = document.createElement('div');
  contact.classList.add('contact');
  aContact.appendChild(contact);

  const contactText = document.createElement('h3');
  contactText.innerHTML = 'CONTACT';
  contact.appendChild(contactText);

  // eslint-disable-next-line no-use-before-define
  home.addEventListener('click', callHomePage);
  menu.addEventListener('click', callMenuPage);
}

function createContentHome() {
  const mainContainer = document.getElementById('content-home');
  const contentContainer = document.createElement('div');
  contentContainer.classList.add('content-body');
  mainContainer.appendChild(contentContainer);

  const logoContainer = document.createElement('div');
  logoContainer.classList.add('logo-container');
  contentContainer.appendChild(logoContainer);

  const a = document.createElement('a');
  a.setAttribute('href', './index.html');
  logoContainer.appendChild(a);

  const img = document.createElement('img');
  img.setAttribute('id', 'logo');
  img.setAttribute('alt', 'Company logo');
  img.src = logo;
  a.appendChild(img);
}

function createFooterHome() {
  const mainContainer = document.getElementById('content-home');
  const footerContainer = document.createElement('div');
  footerContainer.classList.add('footer-container');
  mainContainer.appendChild(footerContainer);

  const footer = document.createElement('div');
  footer.classList.add('footer');
  footerContainer.appendChild(footer);

  footer.innerHTML = '<span>1314 N Front St, Philadelphia</span><span>|</span><a href="tel:+01234567890"><span>+0 123-456-7890</span></a>';
}

function callHomePage() {
  const body = document.querySelector('body');
  body.innerHTML = '';
  const mainContainer = document.createElement('div');
  mainContainer.setAttribute('id', 'content-home');
  body.appendChild(mainContainer);
  createNavBar('content-home');
  createContentHome();
  createFooterHome();
}

export {
  callHomePage,
  createNavBar,
};
