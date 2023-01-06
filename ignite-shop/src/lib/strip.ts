import Stripe from "stripe";
import { env } from 'process';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
  // aqui vai ficar um log no Stripe com o nome de quem fez a requisicao
  appInfo: {
    name: 'Ignite Shop'
  }
})