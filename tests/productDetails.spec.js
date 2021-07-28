const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    /* Consultei o repositório do Vitor Oliveira Silva para resolver essa parte
    link: https://github.com/tryber/sd-014-b-project-js-unit-tests/pull/68/commits/790fc3e05008978c1377da2db0f0722153e353cc */
    const products = productDetails('Alcool gel', 'Máscara');
    assert.strictEqual(Array.isArray(products), true);
    assert.strictEqual(products.length, 2);
    assert.strictEqual(typeof products[0], 'object');
    assert.strictEqual(typeof products[1], 'object');
    assert.notDeepStrictEqual(products[0], products[1]);
    assert.strictEqual(products[0].details.productId.endsWith('123'), true);
    assert.strictEqual(products[1].details.productId.endsWith('123'), true);
  });
});
