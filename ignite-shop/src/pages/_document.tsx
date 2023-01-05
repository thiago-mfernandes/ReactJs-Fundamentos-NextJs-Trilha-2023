import { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "../styles";

// esse eh o index.html. As importações acima sao referentes a construcao basica
// os componentes basicos vem da importacao da lib do next, sao diferentes da tag html... normais
// o main representa aquela div com id root;
// o nextscript eh em qual local da pagina os arquivos js serao carregados/executados;

// manter este arquivo o mais limpo possivel. Next

// toda vez que houver uma modificao neste arquivo eh preciso reiniciar o npm run dev
// caso nao apareca a modificacao, excluir a pasta .next e reiniciar o npm run dev


export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />

        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}