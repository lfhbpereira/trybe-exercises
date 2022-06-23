const randomNumber = () => Math.floor((Math.random() * 5) + 1);

const drawnNumber = (number) => {
  return randomNumber() === number ? 'Parabéns, você ganhou!' : 'Tente de novo';
};

console.log(drawnNumber(3));
