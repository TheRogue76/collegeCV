import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

interface Props {
  filename: string;
  alt: string;
}

const AboutImg = (props: Props) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fixed(width: 350) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n: { node: { relativePath: string | string[] } }) =>
        n.node.relativePath.includes(props.filename)
      );

      if (!image) {
        return null;
      }

      const imageFixed = image.node.childImageSharp.fixed;
      return <Img className="rounded shadow-lg" alt={props.alt} fixed={imageFixed} />;
    }}
  />
);

export default AboutImg;
