const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
console.log(elementoOndeVoceEsta);

const pai = elementoOndeVoceEsta.parentElement;
console.log(pai.style.color = 'purple');

const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
console.log(primeiroFilhoDoFilho.innerText = 'Lorem Ipsum');
