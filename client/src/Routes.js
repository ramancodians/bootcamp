import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./components/Login";

const Wrap = styled.div``;

const RouterWrap = (props) => (
  <Wrap>
    <Switch>
      <Route exact path="/" component={LoginPage} />
    </Switch>
  </Wrap>
);

export default RouterWrap;
