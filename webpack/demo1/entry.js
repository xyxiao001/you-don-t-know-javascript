import { message } from './message.js';

console.log(message);

const btn = document.querySelector('#btn');

const num = document.querySelector('#num');

let id = 0

btn.addEventListener('click', () => {
  id += 1
  num.innerHTML = id
})
