import React from "react";
import styled from "styled-components";
import PostsHeaderAndBody from "./PostsHeaderAndBody";
import StorySection from "../StorySection";
import Header from "../Header";

const Posts = () => {
  const captions = [
    "Whatever is good for your soul, do that Whatever is good for your soul, do that",
    "Even the stars were jealous of the sparkle in her eyes",
    "Stress less and enjoy the best",
    "Get out there and live a little",
    "Im not high maintenance, youre just low effort",
    "Im not gonna sugar coat the truth, Im not Willy Wonka",
    "Life is better when youre laughing",
    "Look for the magic in every moment",
    "Vodka may not be the answer but its worth a shot",
    "A sass a day keeps the basics away",
  ];

  const uName = [
    "eatingaroundtheworld",
    "julesontour",
    "pinchofsalt",
    "weworewhat",
    "lustforlife",
    "secretsofacontentmanager",
    "wineandwhine",
    "themummydiaries",
    "violetchild",
    "hazelbell",
  ];
  return (
    <div>
      <Header />
      <StorySection />
      <Container>
        <PostsHeaderAndBody
          image="tk.jpg"
          username={uName[0]}
          user={uName[0]}
          postimage="back.jpg"
          caption={captions[0]}
        />
        <PostsHeaderAndBody
          image="pic1.jpg"
          username={uName[1]}
          user={uName[1]}
          postimage="2nd.jpg"
          caption={captions[1]}
        />
        <PostsHeaderAndBody
          image="pic2.jpg"
          username={uName[2]}
          user={uName[2]}
          postimage="tk.jpg"
          caption={captions[2]}
        />
        <PostsHeaderAndBody
          image="pic3.avif"
          username={uName[3]}
          user={uName[3]}
          postimage="tomiwa.jpg"
          caption={captions[3]}
        />
        <PostsHeaderAndBody
          image="pic4.avif"
          username={uName[4]}
          user={uName[4]}
          postimage="back.jpg"
          caption={captions[4]}
        />
        <PostsHeaderAndBody
          image="pic5.avif"
          username={uName[5]}
          user={uName[5]}
          postimage="eliaMn83.jpg"
          caption={captions[5]}
        />
        <PostsHeaderAndBody
          image="pic6.avif"
          username={uName[6]}
          user={uName[6]}
          postimage="3rd.jpeg"
          caption={captions[6]}
        />
        <PostsHeaderAndBody
          image="tomiwa.jpg"
          username={uName[7]}
          user={uName[7]}
          postimage="tk.jpg"
          caption={captions[7]}
        />
        <PostsHeaderAndBody
          image="tk.jpg"
          username={uName[8]}
          user={uName[8]}
          postimage="back.jpg"
          caption={captions[8]}
        />
      </Container>
    </div>
  );
};

export default Posts;

const Container = styled.div`
  height: 430px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
