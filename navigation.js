import {
  pageOne, pageTwo, pageThree, listLink, addLink, contactLink,
} from './modules/navigation_module.js';

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
