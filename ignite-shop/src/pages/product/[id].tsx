import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router"
import Stripe from "stripe";
import { stripe } from "../../lib/strip";
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product";

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
  }
}

export default function Product({ product }: ProductProps) {
  // dentro da query eu tenho os dados
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={product.imageUrl} width={520} height={420} alt="" />
      </ImageContainer>
      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>

        <p>{product.description}</p>

        <button>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}

//esse metodo retorna os parametros para a geracao dos arquivos estaticos 
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],

    //se eu acessar uma pagina que nao teve o id passado para gerar o estatico, o fallback false retorna page not found
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  // preciso receber o id do produto
  const productId = String(params.id);  
  // preicos buscar meu produto no stripe
  const produto = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const preco = produto.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: produto.id,
        name: produto.name,
        imageUrl: produto.images[0],
        preco: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(preco.unit_amount / 100),
        description: produto.description,
      }
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}