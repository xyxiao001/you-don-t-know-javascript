import { message } from './message.js';

console.log(message);

const add = document.querySelector('#add');

const reduce = document.querySelector('#reduce');

const num = document.querySelector('#num');

let id = 0;

add.addEventListener('click', () => {
  id += 1;
  num.innerHTML = id;
});

reduce.addEventListener('click', () => {
  id -= 1;
  num.innerHTML = id;
});
