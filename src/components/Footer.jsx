import React from "react";
import styled from "styled-components";
import dp1 from "../img/tk.jpg";
import {
  UilEstate,
  UilSearch,
  UilFilm,
  UilHeart,
} from "@iconscout/react-unicons";

const Footer = () => {
  return (
    <Div>
      <UilEstate style={{ marginLeft: -5 }} size={25} />
      <UilSearch style={{ marginRight: 4 }} size={25} />
      <UilFilm style={{ marginRight: 4 }} size={25} />
      <UilHeart style={{ marginRight: 4 }} size={25} />
      <Img style={{ marginRight: -5 }} />
    </Div>
  );
};

export default Footer;

const Div = styled.div`
  align-items: center;
  justify-content: space-evenly;

  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 52px;
  display: flex;
`;

const Img = styled.img`
  background-image: url(${dp1});
  width: 30px;
  height: 30px;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50px;
`;
