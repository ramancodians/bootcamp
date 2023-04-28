import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "./Routes";
import "./utils/axiosConfig";
import { BrowserRouter } from "react-router-dom";

const Wrapper = styled.div``;

const App = () => {
  return (
    <Wrapper>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <ToastContainer position="bottom-left" theme="colored" />
    </Wrapper>
  );
};

export default App;
