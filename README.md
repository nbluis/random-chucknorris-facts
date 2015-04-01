# Random Chuck Norris Facts em Português (pt_BR)

## Como utilizar
Você pode utilizar o random-chucknorris-facts de duas formas.
Como um comando de console (1) ou como um módulo acoplado ao seu projeto (2).

Independente da forma de uso, é imprescindível que a conexão com a internet esteja disponível para o módulo, pois os fatos são carregados de web.

#### Como comando do sistema operacional.
Instalando globalmente, ele irá permitir rodar uma linha de comando que imprime no console um random fact.

Ex:

`$ npm -g install random-chucknorris-facts`

`$ random-chucknorris-facts`

#### Como módulo acoplado a outro programa
Neste caso adicione random-chucknorris-fact as dependências de seu programa e utilize um callback para obter o random fact;

Ex:

```
var RandomChuckNorrisFacts = require('random-chucknorris-facts');

new RandomChuckNorrisFacts().random(function(fact) {
	console.log(fact);
});
```

## License:
(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
