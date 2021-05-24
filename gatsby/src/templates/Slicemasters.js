import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import SEO from '../components/SEO';

export default function SingleMasterPage({ data }) {
  const { name } = data.slicemaster;
  return (
    <>
      <SEO title={name} image={data.slicemaster.image.asset.src} />
      <Img
        fluid={data.slicemaster.image.asset.fluid}
        alt={data.slicemaster.name}
      />
      <h2>
        <span className="mark">{name}</span>
      </h2>
      <p>{data.slicemaster.description}</p>
    </>
  );
}

// This needs to be dynamic based on the slug passed in via context in gatsby-node.js
export const query = graphql`
  query($slug: String!) {
    slicemaster: sanityPerson(slug: { current: { eq: $slug } }) {
      name
      id
      description
      image {
        asset {
          fluid(maxWidth: 1000, maxHeight: 750) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
