import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { ToastContainer, toast } from 'react-toastify';
import SEO from '../components/SEO';
import { calculatePizzaPrice } from '../utils/calculatePizzaPrice';
import formatMoney from '../utils/formatMonet';
import usePizza from '../utils/UsePizza';
import useForm from '../utils/useForm';
import 'react-toastify/dist/ReactToastify.css';

const PizzaGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  @media (max-width: 450px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
  button {
    margin: 5px;
    margin-top: 20px;
  }
`;

export default function SinglePizzaPage({ data: { pizza } }) {
  const { values } = useForm({
    name: '',
    email: '',
    mapleSyrup: '',
  });

  const { addToOrder } = usePizza({
    pizza,
    values,
  });
  return (
    <>
      <SEO title={pizza.name} image={pizza.image.asset.fluid.src} />
      <PizzaGrid>
        <Img fluid={pizza.image.asset.fluid} alt={pizza.name} />
        <div>
          <h2 className="mark">{pizza.name}</h2>
          <div>
            {['S', 'M', 'L'].map((size) => (
              <button
                type="button"
                key={size}
                onMouseDown={() =>
                  toast(`${pizza.name} (${size}) added to order`)
                }
                onMouseUp={() =>
                  addToOrder({
                    id: pizza.id,
                    size,
                  })
                }
              >
                {size} {formatMoney(calculatePizzaPrice(pizza.price, size))}
              </button>
            ))}
          </div>

          <ul>
            {pizza.toppings.map((topping) => (
              <li key={topping.id}>{topping.name}</li>
            ))}
          </ul>
        </div>
        <ToastContainer />
      </PizzaGrid>
    </>
  );
}

// This needs to be dynamic based on the slug passed in via context in gatsby-node.js
export const query = graphql`
  query($slug: String!) {
    pizza: sanityPizza(slug: { current: { eq: $slug } }) {
      name
      id
      price
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      toppings {
        name
        id
        vegetarian
      }
    }
  }
`;
