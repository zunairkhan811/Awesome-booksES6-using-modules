const pageOne = document.querySelector('.book-list');
const pageTwo = document.querySelector('.add-books');
const pageThree = document.querySelector('.contact');

const listLink = document.querySelector('.list-page');
const addLink = document.querySelector('.add-page');
const contactLink = document.querySelector('.contact-page');

listLink.addEventListener('click', () => {
  pageOne.classList.remove('invisible');
  pageTwo.classList.remove('visible');
  pageThree.classList.remove('visible');
});

addLink.addEventListener('click', () => {
  pageOne.classList.add('invisible');
  pageTwo.classList.add('visible');
  pageThree.classList.remove('visible');
});

contactLink.addEventListener('click', () => {
  pageOne.classList.add('invisible');
  pageTwo.classList.remove('visible');
  pageThree.classList.add('visible');
});
