import printMe from './print';

function testing() {
  const element = document.createElement('div');
  element.innerHTML = "Testing Webpack setup";

  const btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console! ;)';
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}

document.body.appendChild(testing());
