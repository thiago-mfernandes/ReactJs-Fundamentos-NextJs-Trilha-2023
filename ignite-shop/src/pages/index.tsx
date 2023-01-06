import Image from "next/image"
import { HomeContainer, Product } from "../styles/pages/home"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import camiseta1 from "../assets/1.png"
import camiseta2 from "../assets/2.png"
import camiseta3 from "../assets/3.png"


export default function Home() {
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
      <Product className="keen-slider__slide">
        <Image src={camiseta1} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta2} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta3} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta3} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
