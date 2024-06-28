import React from "react"

import { Container, Title } from "./common"

import writtingblog from "../assets/image/writtingblog.svg"
import travelling from "../assets/image/travelling.svg"
import mountainhiking from "../assets/image/mountainhiking.svg"
import movie from "../assets/image/movie.svg"
import football from "../assets/image/football.svg"

import "./lovetodo.css"

const LoveToDo = () => {
  return (
    <div className="love-to-do-area">
      <Container>
        <Title side="right" title="Love To Do" />
        <div className="love-to-do">
          <div className="stickpad">
            <img alt="" src={writtingblog} />
            <h4>Blogging</h4>
          </div>
          <div className="stickpad">
            <img alt="" src={football} />
            <h4>Playing Football</h4>
          </div>
          <div className="stickpad">
            <img alt="" src={travelling} />
            <h4>Travelling</h4>
          </div>

          <div className="stickpad">
            <img alt="" src={movie} />
            <h4>Watching Movies</h4>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { LoveToDo }
