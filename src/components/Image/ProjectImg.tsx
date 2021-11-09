import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

interface Props {
  filename: string;
  alt: string;
}

const ProjectImg = ({ filename, alt }: Props) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 1366) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n: { node: { relativePath: string | string[] } }) =>
        n.node.relativePath.includes(filename)
      );

      if (!image) {
        return null;
      }

      const imageFluid = image.node.childImageSharp.fluid;
      return <Img alt={alt} fluid={imageFluid} />;
    }}
  />
);

export default ProjectImg;
