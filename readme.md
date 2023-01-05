## Pasta pages

os arquivos dentro do diretorio pages sao rotas;
o diretorio pode estar dentro de outra pasta, como /src;

o arquivo pages/index.tsx é o arquivo de entrada, a home;

## Rotas no Next

- Roteamento baseado em arquivos fisicos

meu arquivo index corresponde a rota "/";
meu arquivo produto.tsx corresponde a rota "/produto"
meu arquivo sucesso.tsx corresponde a rota "/sucesso"

- Parametros na rota
eu posso ter a pasta /products
dentro eu tenho o index.tsx. Esse index eh o arquivo principal dessa rota
se eu colocar um teste.tsx, minha rota products vai ter um /products/teste

o nome dos arquivos pode ser parametrizado:
posso colocar o nome do meu arquivo com o parametro a ser recebido na rota,

  /product
    `[id].tsx`

  como estou em /product, o arquivo exibido sera o index + o parametro
  pego o parametro da rota utilizando de dentro do next o useRouter

## Stitches

lib similar ao styled-components
deixar o stitches configurado pra fazer o css la no arquivo _document.tsx
`<style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />`

pelo lado do servidor Next.js(Node), a funcao getCssText vai executar e retornar dentro da tag style todo o css necessario pra pagina funcionar mesmo com o js desabilitado


