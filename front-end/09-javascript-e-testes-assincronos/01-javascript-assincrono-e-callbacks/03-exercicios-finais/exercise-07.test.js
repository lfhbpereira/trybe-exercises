const uppercase = require('./exercise-07');

describe('Verifica se retorna o texto em letras maiúsculas', () => {
  it('Teste de uppercase', (done) => {
    uppercase('teste', (str) => {
      try {
        expect(str).toBe('TESTE');
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});
