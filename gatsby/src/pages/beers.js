import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';
import formatMoney from '../utils/formatMonet';
import { calculatePizzaPrice } from '../utils/calculatePizzaPrice';

const BeerGridStyle = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const SingleBeerStyles = styled.div`
  border: 1px solid var(--grey);
  padding: 2rem;
  text-align: center;
  img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    display: block;
    display: grid;
    align-items: center;
    font-size: 10px;
  }
`;

export default function BeersPage({ data }) {
  const beers = data.beers.nodes;
  return (
    <>
      <SEO title={`Beers! ${beers.length} remaining. Hurry Up!!!`} />
      <h2 className="center">
        We have {beers.length} Beers available. Dine Only
      </h2>
      <BeerGridStyle>
        {beers
          .filter((beer) => beer.image)
          .map((beer) => {
            const price = parseFloat(beer.price.replace(/[$]/i, ''));
            const rating = Math.round(beer.rating?.average);
            console.log(beer.image.status);
            return (
              <SingleBeerStyles key={beer.id}>
                <img src={beer.image} alt={beer.name} />
                <h3>{beer.name}</h3>
                {formatMoney(calculatePizzaPrice(price, 'R'))}
                <p title={`${rating} out of 5 stars`}>
                  {`⭐️`.repeat(rating)}
                  <span style={{ filter: `grayscale(100%)` }}>
                    {`⭐️`.repeat(5 - rating)}
                  </span>
                  <span>({beer.rating?.reviews})</span>
                </p>
              </SingleBeerStyles>
            );
          })}
      </BeerGridStyle>
    </>
  );
}

export const query = graphql`
  query {
    beers: allBeer {
      nodes {
        id
        name
        price
        image
        rating {
          average
          reviews
        }
      }
    }
  }
`;
