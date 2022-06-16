const irmaoDoElementoOndeVoceEsta = document.createElement('section');
document.getElementById('elementoOndeVoceEsta').parentElement.appendChild(irmaoDoElementoOndeVoceEsta);

const filhoDoElementoOndeVoceEsta = document.createElement('section');
document.getElementById('elementoOndeVoceEsta').appendChild(filhoDoElementoOndeVoceEsta);

const filhoDoPrimeiroFilhoDoFilho = document.createElement('section');
document.getElementById('primeiroFilhoDoFilho').appendChild(filhoDoPrimeiroFilhoDoFilho);

const terceiroFilho = filhoDoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling;
console.log(terceiroFilho);
