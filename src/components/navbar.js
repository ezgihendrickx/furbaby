import React, { useState } from "react"
import {
  FaItunes,
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaYoutube,
  FaSpotify,
  FaGooglePlay,
} from "react-icons/fa"
import { Link } from "gatsby"

var socialMedia = [
  {
    service: "Spotify",
    url:
      "https://open.spotify.com/artist/1hpsUJGJST9u6Qf8KWn8CR?si=Faiv2grEQX6vwJ9z_4sMQQ",
    icon: <FaSpotify />,
  },
  {
    service: "Apple Music",
    url: "https://music.apple.com/us/artist/furbaby/1520136448",
    icon: <FaItunes />,
  },
  {
    service: "Instagram",
    url: "https://www.instagram.com/furbaby_rocks/",
    icon: <FaInstagram />,
  },
  {
    service: "YouTube",
    url: "https://www.youtube.com/channel/UCSoulFKYB6zGzHhbV-rkPzg",
    icon: <FaYoutube />,
  },
  {
    service: "Facebook",
    url: "https://www.facebook.com/adam.arling",
    icon: <FaFacebook />,
  },
  {
    service: "Google Play",
    url:
      "https://play.google.com/store/music/album/Furbaby_Boxed_In?id=Bfzfwy4277nj3eer6wsleaj2zce",
    icon: <FaGooglePlay />,
  },
  {
    service: "Email",
    url: "mailto:aarling@gmail.com",
    icon: <FaEnvelope />,
  },
]

export default function Navbar() {
  const [burgerOpen, setBurgerOpen] = useState()

  const handleClick = () => {
    setBurgerOpen(!burgerOpen)
  }

  return (
    <nav
      className="navbar is-black"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link to="/" className="navbar-item is-size-4 ">
          Furbaby
        </Link>

        <a
          role="button"
          className={`navbar-burger burger ${burgerOpen ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded={`${burgerOpen ? "true" : "false"}`}
          data-target="navbarBasicExample"
          onClick={handleClick}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        className={`navbar-menu ${burgerOpen ? "is-active" : ""}`}
      >
        <div className="navbar-end">
          <div className="navbar-item">
            <Link to="/press-kit">Press Kit</Link>
          </div>
          {/* <div className="navbar-item">
            <Link to="/music">Music</Link>
          </div> */}
          {/* <div className="navbar-item">
            <Link to="/music">Music</Link>
          </div>
          <div className="navbar-item">
            <Link to="/videos">Videos</Link>
          </div>
          <div className="navbar-item">
            <Link to="/screen-prints">Screen Prints</Link>
          </div>
          <div className="navbar-item">
            <Link to="/photos">Photos</Link>
          </div> */}
          {socialMedia.map(sm => (
            <div key={sm.service} className="navbar-item">
              <a
                href={sm.url}
                className="is-flex"
                target="_blank"
                style={{ alignItems: "center" }}
                title={sm.service}
              >
                <span className="icon is-size-4">{sm.icon}</span>
              </a>
            </div>
          ))}
          {/* <div className="navbar-item">
            <Link to="/about">About</Link>
          </div> */}

          {/* <div className="navbar-item">
            <Link to="/visuals">Visuals</Link>
          </div> */}
        </div>
      </div>
    </nav>
  )
}
