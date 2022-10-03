# cielo-test #

Teste admissional da Cielo

## Building & Execução ##

Inicialmente crie um arquivo `.env`, na raiz do projeto, com os dados da api. Para o teste, insira o seguinte conteúdo:

``` sh
API_HOST=httpbin.org
```

Para buildar execute o seguinte comando que irá criar uma versão pra produção em `dist`

``` sh
webpack
```
ou via NPM usando
```sh
npm run build
```

Para desenvolvimento 

1. Execute o servidor dev
   ```sh
   webpack-dev-server
   ```
   ou 
   ```sh
   npm run start
   ```
2. Visite `http://localhost:4200`
