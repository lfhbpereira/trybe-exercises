const { getPokemonDetails } = require('./exercise-08');

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokemon que não existe no banco de dados', (done) => {
    const err = new Error('Não temos esse pokémon para você :(');
    function callback(error, result) {
      expect(error).toEqual(err);
      done();
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Pikachu', callback);
  });

  it('retorna um pokemon que existe no banco de dados', (done) => {
    function callback(error, result) {
      expect(result).toBe('Olá, seu pokémon é o Squirtle, o tipo dele é Water e a habilidade principal dele é Water Gun');
      done();
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Squirtle', callback);
  });
});
