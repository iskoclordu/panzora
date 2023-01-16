import './style.css';
// eslint-disable-next-line import/no-cycle
import { createNavBar } from './index';
import { createFooterMenuContent } from './menu';
import location from './images/location.png';

function createContentContact(mainContainer) {
  const contentContainer = document.createElement('div');
  contentContainer.classList.add('content-body');
  mainContainer.appendChild(contentContainer);

  const contactSection = document.createElement('div');
  contactSection.classList.add('contact-section');
  contentContainer.appendChild(contactSection);

  const contactInfo = document.createElement('div');
  contactInfo.classList.add('contact-section-info');
  contactSection.appendChild(contactInfo);

  contactInfo.innerHTML = '<div class="adress">1314 N Front st, Philadelphia</div><div class="phone"><a href="tel:+01234567890">+0 123-456-7890</a></div><div class="email"><a href="mailto:info@panzora.com">info@panzora.com</a></div>';

  const form = document.createElement('div');
  form.classList.add('customer-form');
  contactSection.appendChild(form);

  const formRow1 = document.createElement('div');
  formRow1.classList.add('form-row');
  formRow1.innerHTML = '<input type="text" id="full-name" name="full-name" placeholder="Name*" required>';
  form.appendChild(formRow1);

  const formRow2 = document.createElement('div');
  formRow2.classList.add('form-row');
  formRow2.innerHTML = '<input type="email" id="email" name="email" placeholder="joe@example.com*" required>';
  form.appendChild(formRow2);

  const formRow3 = document.createElement('div');
  formRow3.classList.add('form-row');
  formRow3.innerHTML = '<textarea name="text" id="text" placeholder="Write your message here."></textarea>';
  form.appendChild(formRow3);

  const button = document.createElement('button');
  button.innerHTML = 'Send Us';
  form.appendChild(button);

  const locationImageContainer = document.createElement('div');
  locationImageContainer.classList.add('location');
  contentContainer.appendChild(locationImageContainer);

  const locationImage = document.createElement('img');
  locationImage.setAttribute('alt', 'Map view for location of restaurant');
  locationImage.src = location;
  locationImageContainer.appendChild(locationImage);
}
export default function callContactPage() {
  const body = document.querySelector('body');
  body.innerHTML = '';
  const mainContainer = document.createElement('div');
  mainContainer.setAttribute('id', 'content-contact');
  body.appendChild(mainContainer);
  createNavBar('content-contact');
  createContentContact(mainContainer);
  createFooterMenuContent('content-contact');
}
