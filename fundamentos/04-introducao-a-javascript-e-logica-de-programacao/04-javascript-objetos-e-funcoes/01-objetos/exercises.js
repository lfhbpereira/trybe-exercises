// 01

let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2, silver: 3
  },
};

// 02

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');

// 03

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

// 04

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes.');

// 05

console.log('A jogadora possui ' + player.medals['golden'] + ' medalhas de ouro e ' + player.medals['silver'] +' medalhas de prata.');
