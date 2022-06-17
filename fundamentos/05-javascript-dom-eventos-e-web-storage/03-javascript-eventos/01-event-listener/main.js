const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

function changeClass(click) {
  const tech = document.querySelector('.tech');
  const selectedItem = click.target;
  tech.classList.remove('tech');
  selectedItem.classList.add('tech');
}

firstLi.addEventListener('click', changeClass);
secondLi.addEventListener('click', changeClass);
thirdLi.addEventListener('click', changeClass);

function changeText() {
  const tech = document.querySelector('.tech');
  tech.innerText = input.value;
}

input.addEventListener('input', changeText);

function redirectToPage() {
  location.href = 'https://github.com/lfhbpereira';
}

myWebpage.addEventListener('dblclick', redirectToPage);

function changeColor(mouseover) {
  const h3 = mouseover.target;
  h3.style.color = '#2fc18c';
}

function returnColor(mouseout) {
  const h3 = mouseout.target;
  h3.style.color = 'white';
}

myWebpage.addEventListener('mouseover', changeColor);
myWebpage.addEventListener('mouseout', returnColor);
