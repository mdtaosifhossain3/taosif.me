import React from "react"
import {
  FaGithub,
  FaYoutube,
  FaLinkedinIn,
  FaMediumM,
  FaTwitter,
} from "react-icons/fa"

import "./title.css"

export const Title = ({ title, social, side, height }) => {
  return (
    <div
      style={{ height }}
      className={`title ${side} ${social ? "social" : ""}`}
    >
      {social && (
        <ul>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/mdtaosifhossain3"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/channel/UCPb6ODZu_fHVuqMx2INnGmw"
            >
              <FaYoutube />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/md-taosif-hossain-th/"
            >
              <FaLinkedinIn />
            </a>
          </li>
          {/* <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://hashnode.com/@mdtaosifhossain3"
            >
              <FaHashnode />
            </a>
          </li> */}
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://x.com/taosif_hossain"
            >
              <FaTwitter />
            </a>
          </li>
        </ul>
      )}
      <p>{title}</p>
    </div>
  )
}

Title.defaultProps = {
  side: "left",
  height: "160px",
}
