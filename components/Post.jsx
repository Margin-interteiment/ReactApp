import React from 'react';
import { View, Text, Image } from 'react-native';

import styled from "styled-components/native";

const PostView = styled.View`
  padding: 4px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
  flex: 1;
`;

const PostImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  margin-top: 40px;
  margin-left: 12px;
  
`;

const PostTitle = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;

const PostDate = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
`;

const PostDetails = styled.View`
  margin-left: 120px;
  margin-top: -80px;
  flex-direction: column;
  justify-content: center;
`;






export const Post = ({title, imageUrl, createdAt}) => {
  return (
       
        <PostView>
        <PostImage
          source={{
            uri: imageUrl
          }}
        />

        <PostDetails>
          <PostTitle>{title}</PostTitle>
          <PostDate>{createdAt}</PostDate>
        </PostDetails>
      </PostView>
      
  );
}