const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (rightAnswer, studentAnswer) => {
  if (studentAnswer === 'N.A') return 0;
  return studentAnswer === rightAnswer ? 1 : -0.5;
};

const countPoints = (right, student, action) => {
  let count = 0;
  for (let index = 0; index < right.length; index += 1) {
    const result = action(right[index], student[index]);
    count += result;
  }
  return count;
};

console.log(countPoints(rightAnswers, studentAnswers, compareAnswers));
