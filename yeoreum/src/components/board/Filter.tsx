import React from 'react';
import styled from '@emotion/styled';
import CustomSelect from './CustomSelect';
import { RequestGetAllPostsOption } from '../../apis/posts';
import Image from 'next/image';
import { useRemoveFilterData } from '../../hooks/useBoardPageData';

interface PostFilterProps {
  option: RequestGetAllPostsOption;
  setOption: React.Dispatch<React.SetStateAction<RequestGetAllPostsOption>>;
}
export interface FilterItem {
  id: string;
  title: string;
  currentStatus: FilterValue;
  options: FilterOption[];
}

interface FilterOption {
  text: string;
  value: FilterValue;
}

export type FilterValue = number | boolean | undefined;

function Filter({ option, setOption }: PostFilterProps) {
  const genderFilter: FilterItem = {
    id: 'gender',
    title: '모집 성별',
    currentStatus: option?.gender,
    options: [
      { text: '전체', value: undefined },
      { text: '남성', value: 1 },
      { text: '여성', value: 0 },
    ],
  };
  const statusFilter: FilterItem = {
    id: 'isDone',
    title: '모집 현황',
    currentStatus: option?.isDone,
    options: [
      { text: '전체', value: undefined },
      { text: '모집 중', value: false },
      { text: '여름 마감', value: true },
    ],
  };
  const peopleFilter: FilterItem = {
    id: 'people',
    title: '모집 인원',
    currentStatus: option?.people,
    options: [{ text: '전체', value: undefined }],
  };

  for (let i = 1; i <= 8; i++) {
    peopleFilter.options.push({ text: `${i}명`, value: i });
  }

  const resetFilterOptions = () => {
    useRemoveFilterData();
    setOption({});
  };

  const appliedFilterCount = Object.values(option).filter(
    value => typeof value !== 'undefined',
  ).length;

  return (
    <Filtering>
      {appliedFilterCount ? (
        <ResetFilterBtn onClick={resetFilterOptions}>
          <ResetIcon
            width={14}
            height={14}
            alt="reset"
            src="/icons/arrowrotateleft.svg"
          />
          <ResetText>초기화</ResetText>
          <ResetCount>{appliedFilterCount}</ResetCount>
        </ResetFilterBtn>
      ) : null}
      {[genderFilter, statusFilter, peopleFilter].map(filter => (
        <CustomSelect key={filter.id} filter={filter} setOption={setOption} />
      ))}
    </Filtering>
  );
}

export default React.memo(Filter);

const ResetText = styled.span`
  margin-right: 6px;
`;

const ResetCount = styled.span`
  font-weight: 600;
  color: #ffa500;
  width: 8px;
`;

const ResetIcon = styled(Image)`
  transform: rotate(-75deg);
  margin-right: 4px;
  margin-left: 2px;
`;

const ResetFilterBtn = styled.div`
  position: relative;
  width: fit-content;
  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.palette.grey};
  font-size: 0.75rem;
  margin-bottom: 3px;
  margin-right: 8px;
  cursor: pointer;
`;

const Filtering = styled.div`
  display: flex;
  padding: 25px 0 50px;
  border-bottom: 2px solid #ccc;
  margin-bottom: 30px;
`;
