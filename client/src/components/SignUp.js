import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Wrap = styled.div`
  
`

const SignPage = (props) => (
  <Wrap>
    <h1>SignUp</h1>
    <Link to="/">login</Link>
  </Wrap>
)

export default SignPage