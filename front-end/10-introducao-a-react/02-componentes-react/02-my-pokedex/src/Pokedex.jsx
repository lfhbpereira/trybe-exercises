import React from 'react';
import Pokemon from './Pokemon';
import pokemons from './data';
import './Pokedex.css';

class Pokedex extends React.Component {
  render() {
    return (
      <main>
        <h1 className='title'>Pokedex</h1>
        <div>
          { pokemons.map((pokemon) => {
            return <Pokemon data={ pokemon } key={ pokemon.id } />})
          }
        </div>
      </main>
    );
  }
}

export default Pokedex;
