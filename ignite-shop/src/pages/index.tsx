import Image from "next/image"
import { HomeContainer, Product } from "../styles/pages/home"
import Link from "next/link"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import { stripe } from "../lib/strip"
import { GetServerSideProps } from "next"
import Stripe from "stripe"

interface HomeProps {
  produtos: {
    id: number;
    name: string;
    imageUrl: string;
    preco: string;
  }[]
}

export default function Home({ produtos }:HomeProps) {
  
  // preciso passar uma referencia de um elemento no dom, no caso, o elemento que esta envolta dos slides, para servir de referencia para o array de imagens
  const [ sliderRef ] = useKeenSlider({
    // de dentro do hook eu passo o objeto slides com a quantidade de slides que quero
    slides: {
      perView: 3,
      // retirar os espacamentos dentro do HomeContainer e adicionar aqui, vai pela classe keen-slider, senao da conflito
      spacing: 48,
    }
  })

  return (
    // passar obrigatoriamente a classe para o KeenSlider
    <HomeContainer ref={sliderRef} className="keen-slider" >

      {
        produtos.map((produto) => (
          /**
           * navegacao no Next
           * Meu Product abaixo eh uma tag a, e pode recebr o atributo href
           * utilizar o componente link envolta do meu produto e ele nao vai dar refresh completo
           */
          <Link href={`/product/${produto.id}`} key={produto.id}>
            <Product className="keen-slider__slide" >
              {/**para passar uma imagem precisa inserir a confiracao de imagens no next.config */}
              <Image src={produto.imageUrl} width={520} height={480} alt="" />
              <footer>
                <strong>{produto.name}</strong>
                <span>{produto.preco}</span>
              </footer>
            </Product>
          </Link>
        ))
      }


     
    </HomeContainer>
  )
}

{/*
  * 1. Essa função getServerSideProps é executada no Server Side do Next
  * 2. Ela carrega todos os dados das requisicoes
  * 3. Somente após os dados serem carregados, com o JS desabilitado, ela devolve os dados no Client Side
  * 4. Os dados podem ser obtidos dentro da pasta pages somente, onde cada componente pega atraves de props
  * 
  * Utilizar somente quando a informação desejada seja crucial no Client Side
  * Posso utilizar tambem quando preciso executar codigo que nao pode ser exibido ao usuario
*/}

export const getServerSideProps: GetServerSideProps = async () => {

  const response = await stripe.products.list({
    // isso aqui serve para acessar as propriedades do preco
    expand: ['data.default_price']
  });
  
  // como nao quero todos os dados, vou fazer uma transformacao dos dados recebidos criando uma nova lista de produtos apenas com os dados que eu quero
  const produtos = response.data.map(produto => {
    const preco = produto.default_price as Stripe.Price

    return {
      id: produto.id,
      name: produto.name,
      imageUrl: produto.images[0],
      preco: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(preco.unit_amount / 100),
    }
  })

  return {
    props: {
      produtos
    }
  }  
}