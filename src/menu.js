import './style.css';
// eslint-disable-next-line import/no-cycle
import { createNavBar } from './index';
import pizzaImage from './images/pizza.jpg';
import pastaImage from './images/pasta.jpg';
import dessertImage from './images/dessert.jpg';
import beverageImage from './images/beverage.jpg';
import logo from './images/logo.png';

const menuImages = {
  pizzas: pizzaImage,
  pastas: pastaImage,
  desserts: dessertImage,
  beverages: beverageImage,
};

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

const menu = (() => {
  const pizzas = [];
  pizzas.push(new Product('Margherita', '12$'));
  pizzas.push(new Product('Quattro Formaggi', '13$'));
  pizzas.push(new Product('Siciliana', '13$'));
  pizzas.push(new Product('Tonno E Cipolla', '15$'));
  pizzas.push(new Product('Vegeteriana', '11$'));

  const pastas = [];
  pastas.push(new Product('Pasta E Fagioli', '10$'));
  pastas.push(new Product('Pasta Alla Zozzona', '12$'));
  pastas.push(new Product('Spagetthi Bolognaise', '12$'));
  pastas.push(new Product('Rigatoni Puttanesca', '11$'));
  pastas.push(new Product('Pork Ragu Rigatoni', '15$'));

  const desserts = [];
  desserts.push(new Product('Tiramisù', '9$'));
  desserts.push(new Product('Sbrisolona', '8$'));
  desserts.push(new Product('Sfogliatelle', '12$'));
  desserts.push(new Product('Cannoli', '9$'));
  desserts.push(new Product('Babà', '6$'));

  const beverages = [];
  beverages.push(new Product('Fresh Orange Juice', '5$'));
  beverages.push(new Product('Mineral Water', '2$'));
  beverages.push(new Product('Soda', '4$'));
  beverages.push(new Product('Wine (Red/White)', '4$'));
  beverages.push(new Product('Espresso', '3$'));

  return {
    pizzas, pastas, desserts, beverages,
  };
})();

function createContentMenu(mainContainer) {
  const contentContainer = document.createElement('div');
  contentContainer.classList.add('content-body');
  mainContainer.appendChild(contentContainer);
  // eslint-disable-next-line no-restricted-syntax, guard-for-in
  for (const part in menu) {
    const partContainer = document.createElement('div');
    partContainer.classList.add('menu-section');
    partContainer.classList.add(`${part}`);
    contentContainer.appendChild(partContainer);

    const productContainer = document.createElement('div');
    productContainer.classList.add('products');
    partContainer.appendChild(productContainer);

    const header = document.createElement('h2');
    header.innerHTML = part.toUpperCase();
    productContainer.appendChild(header);

    for (let i = 0; i < menu[part].length; i += 1) {
      const product = document.createElement('div');
      product.classList.add('menu-row');
      productContainer.appendChild(product);

      const productName = document.createElement('div');
      productName.classList.add('name');
      productName.innerHTML = `${menu[part][i].name}`;
      product.appendChild(productName);

      const productPrice = document.createElement('div');
      productPrice.classList.add('price');
      productPrice.innerHTML = `${menu[part][i].price}`;
      product.appendChild(productPrice);
    }

    const image = document.createElement('div');
    image.classList.add('image');

    image.classList.add(`${part.slice(0, -1)}`);
    partContainer.appendChild(image);

    const img = document.createElement('img');
    img.setAttribute('alt', `${part}`);
    img.src = menuImages[part];
    image.appendChild(img);
  }
}

export function createFooterMenuContent(id) {
  const mainContainer = document.getElementById(id);
  const footerContainer = document.createElement('div');
  footerContainer.classList.add('footer-container');
  mainContainer.appendChild(footerContainer);

  const footer = document.createElement('div');
  footer.classList.add('footer');
  footerContainer.appendChild(footer);

  const logoContainer = document.createElement('div');
  logoContainer.classList.add('logo-container');
  footer.appendChild(logoContainer);

  const a = document.createElement('a');
  a.setAttribute('href', './index.html');
  logoContainer.appendChild(a);

  const img = document.createElement('img');
  img.setAttribute('id', 'logo');
  img.setAttribute('alt', 'Company logo');
  img.src = logo;
  a.appendChild(img);

  const contact = document.createElement('div');
  contact.classList.add('contact');
  footer.appendChild(contact);

  contact.innerHTML = '<h4>Call For Reservation</h4> <a href="tel:+01234567890"><span>+0 123-456-7890</span></a>';
}

export default function callMenuPage() {
  const body = document.querySelector('body');
  body.innerHTML = '';
  const mainContainer = document.createElement('div');
  mainContainer.setAttribute('id', 'content-menu');
  body.appendChild(mainContainer);
  createNavBar('content-menu');
  createContentMenu(mainContainer);
  createFooterMenuContent('content-menu');
}
