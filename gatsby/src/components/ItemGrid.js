import { Link } from 'gatsby';
import React from 'react';
import { ItemsGrid, ItemStyles } from '../styles/Grids';

export default function ItemGrid({ items }) {
  return (
    <ItemsGrid>
      {items.map((item) => (
        <ItemStyles key={item._id}>
          {/* {console.log(item.slug.current)} */}
          <p>
            <Link
              to={`${item._type === 'person' ? 'slicemasters/' : 'pizza/'}${
                item.slug.current
              }`}
            >
              <span className="mark">{item.name}</span>
            </Link>
          </p>
          <img
            id={item.name}
            width="500"
            height="400"
            src={`${item.image.asset.url}?w=500&h=400&fit=crop`}
            alt={item.name}
            style={{
              background: `url(${item.image.asset.metadata.lqip})`,
              backgroundSize: `cover`,
            }}
          />
        </ItemStyles>
      ))}
    </ItemsGrid>
  );
}
