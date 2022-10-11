import React from "react";
import styled from "styled-components";
import Stories from "./Stories";
import dp1 from "../img/tk.jpg";

const StorySection = () => {
  const usernameArr = [
    "Emmanuel",
    "Favor",
    "London",
    "David",
    "Paris",
    "Jude",
    "Blue",
    "Rose",
    "Goat",
    "ManuFan",
    "Tommy",
    "Dammy",
  ];
  return (
    <Div>
      <MyProf>
        <Img />
        <UName>Your story</UName>
      </MyProf>

      <Stories username={usernameArr[0]} image="2nd.jpg" />
      <Stories username={usernameArr[1]} image="3rd.jpeg" />
      <Stories username={usernameArr[2]} image="back.jpg" />
      <Stories username={usernameArr[3]} image="eliaMn83.jpg" />
      <Stories username={usernameArr[4]} image="man.png" />
      <Stories username={usernameArr[5]} image="tk.jpg" />
      <Stories username={usernameArr[6]} image="tomiwa.jpg" />
      <Stories username={usernameArr[7]} image="eliaMn83.jpg" />
      <Stories username={usernameArr[8]} image="3rd.jpeg" />
      <Stories username={usernameArr[9]} image="tk.jpg" />
      <Stories username={usernameArr[10]} image="2nd.jpg" />
      <Stories username={usernameArr[11]} image="tk.jpg" />
    </Div>
  );
};

export default StorySection;
const Div = styled.div`
  display: flex;
  width: 300px;
  border-bottom: 0.5px solid silver;
  padding-bottom: 10px;
  overflow-x: scroll;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const MyProf = styled.div`
  margin-right: 6px;
  margin-left: 3px;
`;

const Img = styled.img`
  background-image: url(${dp1});
  width: 40px;
  height: 40px;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50px;
  margin-top: 8px;
  border: 2px solid gray;
  margin-right: 10px;
  margin-left: 5px;
`;
const UName = styled.div`
  width: 55px;
  cursor: pointer;
  text-align: center;
  margin-left: 2px;
  font-size: 12px;
  font-weight: 500;
`;
