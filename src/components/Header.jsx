import React from "react";
import styled from "styled-components";
import {
  UilPlusSquare,
  UilFacebookMessengerAlt,
} from "@iconscout/react-unicons";
import logo from "../img/logo.png";

const Header = () => {
  return (
    <div>
      <Container>
        <Logo />
        <TopRight>
          <Add>
            <UilPlusSquare />
          </Add>

          <UilFacebookMessengerAlt />
        </TopRight>
      </Container>
    </div>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  margin-top: 40px;
  margin-left: 10px;
  justify-content: space-between;
  margin-right: 10px;
`;

const Add = styled.div`
  margin-right: 15px;
`;

const Logo = styled.div`
  background-image: url(${logo});
  width: 100px;
  background-size: cover;
  background-repeat: no-repeat;
  height: 30px;
`;
const TopRight = styled.div`
  display: flex;
`;
