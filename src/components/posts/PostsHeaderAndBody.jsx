import React, { useState } from "react";
import styled from "styled-components";
import "./Post.css";
import {
  UilEllipsisH,
  UilHeart,
  UilComment,
  UilMessage,
  UilBookmarkFull,
} from "@iconscout/react-unicons";

const PostsHeader = ({ image, username, postimage, caption, user }) => {
  ///number of likes
  let likes = Math.trunc(Math.random() * 200);

  const [liked, setLiked] = useState(false);

  const handleLiked = () => {
    setLiked(!liked);
  };

  return (
    <Container>
      <Div>
        <Left>
          <Img
            style={{
              backgroundImage: `url(${require(`../../img/${image}`)})`,
            }}
          />
          <UName>{username}</UName>
        </Left>
        <Right>
          <UilEllipsisH size={20} style={{ marginRight: 10, marginTop: 10 }} />
        </Right>
      </Div>
      <PostImg
        style={{
          backgroundImage: `url(${require(`../../img/${postimage}`)})`,
        }}
      />
      <Icons>
        <LeftIcons>
          <UilHeart
            className={liked ? "liked" : null}
            size={22}
            style={{ marginRight: 10, cursor: "pointer" }}
            onClick={handleLiked}
          />
          <UilComment
            size={22}
            style={{ marginRight: 10, cursor: "pointer" }}
          />
          <UilMessage
            size={22}
            style={{ marginRight: 10, cursor: "pointer" }}
          />
        </LeftIcons>
        <RightIcons>
          <UilBookmarkFull
            size={22}
            style={{ marginRight: 3, cursor: "pointer" }}
          />
        </RightIcons>
      </Icons>
      <Likes>{likes} Likes</Likes>

      <Caption>
        <b style={{ fontWeight: 600, paddingRight: 5 }}>{user}</b>
        {caption.length > 61 ? caption.slice(0, 61) + "..." : caption}
      </Caption>
    </Container>
  );
};

export default PostsHeader;

const Container = styled.div``;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
`;
const Right = styled.div``;

const Img = styled.div`
  width: 25px;
  height: 25px;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50px;
  margin-top: 8px;
  border: 2px solid rgb(131, 58, 180);
  margin-left: 5px;
  cursor: pointer;
`;
const UName = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-top: 10px;
  margin-left: 3px;
`;

const PostImg = styled.div`
  margin-top: 3px;
  width: 100vw;
  height: 300px;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
`;
const LeftIcons = styled.div`
  margin-left: 5px;
`;
const RightIcons = styled.div``;

const Likes = styled.div`
  margin-left: 6px;
`;
const CaptionSection = styled.div`
  display: flex;
`;
const Username = styled.div`
  font-size: 14px;
  font-weight: 500;
`;
const Caption = styled.div`
  margin-left: 7.5px;
`;
