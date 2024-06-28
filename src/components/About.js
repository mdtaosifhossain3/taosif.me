import React from "react"

import { Container, Title, Button } from "./common"

import profile from "../assets/image/profile_pic.png"

import "./about.css"

const About = () => {
  return (
    <div id="about" className="about-area">
      <Container>
        <Title side="right" title="About Me" />
        <div className="about">
          <div className="about-details">
            <p>
              Hello! I'm Taosif, I am a App Developer and SEO expert with a
              passion for building apps. I am passionate about learning and
              sharing my knowledge with others as much as possible. I love
              solving real world problems. I pride myself on doing quality work
              and maintaining excellent communication. I am available for any
              kind of job opportunity that suits my interests.
            </p>
            <div className="about-action">
              <Button
                link="https://github.com/zonayedpca/zonayed.me/raw/master/src/data/file/MyResume.pdf"
                target="_blank"
                bgColor="#00cf5d"
                title="Get Resume"
              />
              <Button clickEvent link="#skill" ml="15px" title="My Skills" />
            </div>
          </div>
          <div className="about-image">
            <div className="image">
              <img alt="profile" src={profile} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { About }
