//Declaração das variáveis
let nome = 'Vesper';
let heroXP = 1000;
let nivel = ' ';

//Categorização do nível do herói
if (heroXP <= 1000) {
  nivel = 'Ferro';
} else if (1001 <= heroXP && heroXP <= 2000) {
  nivel = 'Bronze';
} else if (2001 <= heroXP && heroXP <= 5000) {
  nivel = 'Prata';
} else if (5001 <= heroXP && heroXP <= 7000) {
  nivel = 'Ouro';
} else if (7001 <= heroXP && heroXP <= 8000) {
  nivel = 'Platina';
} else if (8001 <= heroXP && heroXP <= 9000) {
  nivel = 'Ascendente';
} else if (9001 <= heroXP && heroXP <= 10000) {
  nivel = 'Imortal';
} else if (heroXP >= 10001) {
  nivel = 'Radiante';
}

//Declaração do nível
console.log('O herói de nome ' + nome + ' tem o nível ' + nivel);
