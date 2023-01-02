import styled from '@emotion/styled';
import React from 'react';
import CustomDropDown from './CustomDropDown';

function PostGender() {
  const option = [];
  for (let i = 0; i <= 8; i++) {
    option.push({ value: `${i}명` });
  }
  return (
    <Container>
      <Subject>모집 성별</Subject>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <CustomDropDown
          width={88}
          title="남성"
          placeholder="인원 수"
          options={option}
        />
        <CustomDropDown
          width={88}
          title="여성"
          placeholder="인원 수"
          options={option}
        />
      </div>
    </Container>
  );
}

export default PostGender;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 20px;
`;

const Subject = styled.h4`
  margin-bottom: 10px;
`;

const GenderContainer = styled.div`
  display: flex;
  align-items: center;
  :first-of-type {
    margin-right: 28px;
  }
`;

const GenderItem = styled.span`
  font-weight: 500;
  font-size: 0.875rem;
  margin-right: 10px;
`;
