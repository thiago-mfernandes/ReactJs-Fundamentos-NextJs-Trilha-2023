
import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import logo from "../assets/logo.svg"
import { Container, Header } from "../styles/pages/app";
import Image from "next/image"
// o app funciona como um container para as paginas da aplicacao:

// todo componente carregado da minha aplicacao possui envolta dele um componente app envolvendo e mais as pageprops que eh cada pagina

//colocar o globalStyles fora do App, pra ser executado apenas uma vez
globalStyles();

// tudo que for colocado fora do "<Component {...pageProps} />" vai aparecer em todas as paginas

export default function App({ Component, pageProps }: AppProps) {
  return( 
    <Container>
      <Header>
        <Image src={logo} alt="" />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
