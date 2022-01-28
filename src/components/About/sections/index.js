import React from 'react'
import Fade from 'react-reveal/Fade'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function AboutGettingInvolved() {
  const fetchImgData = useStaticQuery(graphql`
    query AboutMeImages {
      allFile(filter: { sourceInstanceName: { eq: "aboutMeImages" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                transformOptions: { cropFocus: CENTER }
              )
            }
          }
        }
      }
    }
  `)
  const aboutMeImage = getImage(fetchImgData.allFile.edges[0].node)

  return (
    <>
      <Fade>
        <div className="about" id="about">
          <h3>Getting Involve with The Community</h3>
          <p>SAVE OUR SEA! SAVE OUR SEA!!!!!</p>
        </div>
      </Fade>
      <div className="contact" id="contact">
        <GatsbyImage
          image={aboutMeImage}
          alt="Luis is at the Salton Sea Lake and standing on the top of half submerged rubber tries"
          placeholder="blurred"
        />
      </div>
    </>
  )
}
