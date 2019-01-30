function testing() {
  const element = document.createElement('div');
  element.innerHTML = "Testing Webpack setup";
  return element;
}

document.body.appendChild(testing());
