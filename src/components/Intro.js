import React from "react"

import { Container, Title, Button } from "./common"

import "./intro.css"

import portfolio from "../assets/image/portfolio.png"

const Intro = () => {
  return (
    <div className="intro-area">
      <Title title="Follow Me" social height="320px" />
      <Container>
<<<<<<< HEAD
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
=======
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            flexWrap: "wrap", // Makes it responsive
            padding: "20px",
          }}
        >
          <div className="intro">
            <div className="intro-text">
              <p>Hello! I am</p>
              <h1>Muhammad Taosif</h1>
              <h3>App Developer</h3>
              <ul>
                <li>Flutter Developer</li>
                <li>React Native Developer</li>
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
>>>>>>> 2153589 (adding my image to intro)
            </div>
          </div>
          <div className="imageContainer">
            <img
              className="image"
              src={portfolio}
              alt="Portfolio"
              style={{
                maxWidth: "100%",
                height: "auto", // Makes the image responsive
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </div>
        </div>
      </Container>
    </div>
  )
}

export { Intro }
