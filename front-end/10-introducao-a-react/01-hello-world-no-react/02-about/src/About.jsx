import React from 'react';

class About extends React.Component {
  render() {
    const skills = ['HTML', 'CSS', 'JavaScript'];
    const jsxSkills = skills.map((skill) => <li>{ skill }</li>);
    return (
      <div>
        <h1>Luiz Pereira</h1>
        <p>Estudante da Trybe</p>
        <h2>Minhas Habilidades</h2>
        <ul>{ jsxSkills }</ul>
      </div>
    );
  }
}

export default About;
