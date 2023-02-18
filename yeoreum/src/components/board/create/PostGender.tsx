import styled from '@emotion/styled';
import React, { useState, useEffect } from 'react';
import { PostCreateData } from '../../../types/post';
import CustomDropDown from './CustomDropDown';

interface PostGenderProps {
  setPostData: React.Dispatch<React.SetStateAction<PostCreateData>>;
}

export interface GenderOptionObject {
  title: string;
  keyName: string;
  placeholder: string;
  options: Option[];
}

interface Option {
  text: string;
  value: number;
}

function PostGender({ setPostData }: PostGenderProps) {
  const maleOption: GenderOptionObject = {
    title: '남성',
    keyName: 'recruitMale',
    placeholder: '인원 수',
    options: [],
  };
  const femaleOption: GenderOptionObject = {
    title: '여성',
    keyName: 'recruitFemale',
    placeholder: '인원 수',
    options: [],
  };
  for (let i = 1; i <= 8; i++) {
    maleOption.options.push({ text: `${i}명`, value: i });
    femaleOption.options.push({ text: `${i}명`, value: i });
  }

  return (
    <Container>
      <Subject>모집 성별</Subject>
      <GenderWrapper>
        <CustomDropDown options={maleOption} setPostData={setPostData} />
        <CustomDropDown options={femaleOption} setPostData={setPostData} />
      </GenderWrapper>
    </Container>
  );
}

export default PostGender;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 30px;
`;

const Subject = styled.h4`
  margin-bottom: 10px;
`;

const GenderWrapper = styled.div`
  display: flex;
  align-items: center;
`;
