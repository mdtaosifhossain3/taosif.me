import React from "react"

import {
  Intro,
  LoveToDo,
  Portfolio,
  About,
  Skill,
  Contact,
} from "../components"
import { Layout } from "../components/common"

const IndexPage = () => (
  <>
    <Layout>
      <Intro />
      <About />
      <Skill />
      <LoveToDo />
      <Portfolio />
      <Contact />
    </Layout>
  </>
)

export default IndexPage
