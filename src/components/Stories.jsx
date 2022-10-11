import React from "react";
import styled from "styled-components";

const Stories = ({ username, image }) => {
  return (
    <Div>
      <Img
        style={{
          backgroundImage: `url(${require(`../img/${image}`)})`,
        }}
      />
      <UName>
        {username.length > 8 ? username.slice(0, 7) + "..." : username}
      </UName>
    </Div>
  );
};

export default Stories;

const Div = styled.div``;

const Img = styled.img`
  width: 40px;
  height: 40px;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50px;
  margin-top: 8px;
  border: 2px solid rgb(131, 58, 180);
  margin-right: 15px;
  cursor: pointer;
`;
const UName = styled.div`
  width: 50px;
  cursor: pointer;
  text-align: center;
  margin-left: -2px;
  font-size: 12px;
  font-weight: 500;
`;
