import React from 'react';
import styled from '@emotion/styled';
import CustomSelect from './CustomSelect';
import { RequestGetAllPostsOption } from '../../apis/posts';

interface PostFilterProps {
  setOption: React.Dispatch<React.SetStateAction<RequestGetAllPostsOption>>;
}
export interface FilterItem {
  id: string;
  title: string;
  options: FilterOption[];
}

interface FilterOption {
  text: string;
  value: number | boolean | undefined;
}

function Filter({ setOption }: PostFilterProps) {
  const genderFilter: FilterItem = {
    id: 'gender',
    title: '모집 성별',
    options: [
      { text: '전체', value: undefined },
      { text: '남성', value: 1 },
      { text: '여성', value: 0 },
    ],
  };
  const statusFilter: FilterItem = {
    id: 'isDone',
    title: '모집 현황',
    options: [
      { text: '전체', value: undefined },
      { text: '모집 중', value: false },
      { text: '여름 마감', value: true },
    ],
  };
  const peopleFilter: FilterItem = {
    id: 'people',
    title: '모집 인원',
    options: [{ text: '전체', value: undefined }],
  };

  for (let i = 1; i <= 8; i++) {
    peopleFilter.options.push({ text: `${i}명`, value: i });
  }

  return (
    <Filtering>
      {[genderFilter, statusFilter, peopleFilter].map(filter => (
        <CustomSelect
          key={filter.id}
          width={90}
          filter={filter}
          setOption={setOption}
        />
      ))}
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
