import React from "react"

import { Container, Title, Button } from "./common"

import "./intro.css"

const Intro = () => {
  return (
    <div className="intro-area">
      <Title title="Follow Me" social height="320px" />
      <Container>
        <div className="intro">
          <div className="intro-text">
            <p>Hello! I am</p>
            <h1>Muhammad Taosif</h1>
            <h3>App Developer</h3>
            <ul>
              <li>Flutter Developer</li>
              <li>Programmer</li>
            </ul>
            <div className="action">
              <Button
                link="https://github.com/mdtaosifhossain3/taosif.me/blob/11574c33b4c0e55df9e70f7cb5268767c3879e26/cc.pdf"
                target="__blank"
                bgColor="#00cf5d"
                title="Get Resume"
              />
              <Button clickEvent link="#about" ml="15px" title="About Me" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { Intro }
