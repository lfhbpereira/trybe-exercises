const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
console.log(elementoOndeVoceEsta);

const pai = elementoOndeVoceEsta.parentElement;
console.log(pai.style.color = 'purple');

const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
console.log(primeiroFilhoDoFilho.innerText = 'Lorem Ipsum');

const primeiroFilho = pai.firstElementChild;
console.log(primeiroFilho);

const primeiroFilhoDeNovo = elementoOndeVoceEsta.previousElementSibling;
console.log(primeiroFilhoDeNovo);

const text = elementoOndeVoceEsta.nextSibling;
console.log(text);

const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;
console.log(terceiroFilho);
