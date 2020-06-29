import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import mp3 from "../boxed-in-sample.mp3"
import {
  FaSpotify,
  FaAmazon,
  FaGooglePlay,
  FaApple,
  FaItunes,
} from "react-icons/fa"

export const musicSources = [
  { label: "Spotify", url: "", icon: <FaSpotify /> },
  {
    label: "Apple Music",
    url: "https://music.apple.com/us/album/boxed-in-single/1520141383",
    icon: <FaApple />,
  },
  {
    label: "iTunes",
    url: "https://music.apple.com/us/album/boxed-in-single/1520141383",
    icon: <FaItunes />,
  },
  {
    label: "Google Play",
    url:
      "https://play.google.com/store/music/album/Furbaby_Boxed_In?id=Bfzfwy4277nj3eer6wsleaj2zce",
    icon: <FaGooglePlay />,
  },
  {
    label: "Amazon Music",
    url: "https://www.amazon.com/gp/product/B08BQZ7VS9",
    icon: <FaAmazon />,
  },
]

function MusicButton({ label, url, icon }) {
  return (
    <div className="column is-half">
      <a
        href={url}
        className="button is-outlined is-black is-inverted is-fullwidth"
      >
        <span className="icon">{icon}</span>
        <span>{label}</span>
      </a>
    </div>
  )
}

export default function BoxedIn() {
  var data = useStaticQuery(graphql`
    query {
      boxedInSingle: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "FURBABY-boxed-in-cover-art-no-outline.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <div className="columns is-centered">
        <div className="column is-8">
          <div className="mb-4">
            <Img fluid={data.boxedInSingle.childImageSharp.fluid} />
          </div>
          <div className="columns is-multiline">
            {musicSources.map(item => (
              <MusicButton
                key={item.label}
                label={item.label}
                url={item.url}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}