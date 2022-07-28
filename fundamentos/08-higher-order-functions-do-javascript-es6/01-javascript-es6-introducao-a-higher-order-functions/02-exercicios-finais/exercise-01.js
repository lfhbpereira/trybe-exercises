const newEmployees = () => {
  const employees = {
    id1: employeeGenerator('Pedro Guerra'),
    id2: employeeGenerator('Luiza Drumond'),
    id3: employeeGenerator('Carla Paiva'),
  }
  return employees;
};

const employeeGenerator = (nomeCompleto) => {
  const email = nomeCompleto.toLowerCase().replace(' ', '_');
  return {nomeCompleto, email: `${email}@trybe.com`};
}

console.log(newEmployees());
