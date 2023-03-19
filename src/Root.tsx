import React from "react";
import {Outlet} from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";

interface ThemeProps {
  bgColor: string
}

const Container = styled.div`
  
`
const Root = () => {
  return (
    <>
      <Container>
        <Header />
        <Outlet />
      </Container>
    </>

  );
}

export default Root;
