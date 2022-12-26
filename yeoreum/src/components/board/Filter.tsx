import React from 'react';
import styled from '@emotion/styled';
import CustomSelect from './CustomSelect';

function Filter() {
  const options1 = [{ value: '전체' }, { value: '남성' }, { value: '여성' }];
  const options2 = [
    { value: '모집 중' },
    { value: '여름 진행 중' },
    { value: '여름 마감' },
  ];
  const options3 = [];
  for (let i = 1; i <= 8; i++) {
    options3.push({ value: `${i}명` });
  }
  return (
    <Filtering>
      <CustomSelect width={60} title={'성별'} options={options1} />
      <CustomSelect width={90} title={'모집 현황'} options={options2} />
      <CustomSelect width={90} title={'모집 인원'} options={options3} />
    </Filtering>
  );
}

export default Filter;

const Filtering = styled.div`
  display: flex;
  padding: 25px 0 50px;
  border-bottom: 2px solid #aaa;
  margin-bottom: 30px;
`;
