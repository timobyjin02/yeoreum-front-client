import styled from '@emotion/styled';
import { css } from '@emotion/react';
import theme from '../../styles/theme';
import React, { useRef, useState, useEffect } from 'react';
import useOutsideClick from '../../hooks/useOutsideClick';
import { RequestGetAllPostsOption } from '../../apis/posts';
import { FilterItem, FilterValue } from './Filter';

interface CustomSelectProps {
  filter: FilterItem;
  setOption: React.Dispatch<React.SetStateAction<RequestGetAllPostsOption>>;
}

function CustomSelect({ filter, setOption }: CustomSelectProps) {
  const [headerText, setHeaderText] = useState(filter.title);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  // select box의 필터 옵션과 현재 적용 중인 필터 옵션이 일치하는 text를 가져온다.
  const selectedOptionText = filter.options.filter(
    option => filter.currentStatus === option.value,
  )[0].text;

  const handleClick = (filterValue: FilterValue) => {
    // 밑에 useEffect로 선택된 옵션에 해당하는 text가 바뀔때마다 HeaderText를 변경하기 때문에
    // event.target.innerText를 넣어줄 필요가 없다.
    // // setHeaderText((event.target as HTMLLIElement).innerText);
    setIsOpen(false);
    setOption(prev => ({
      ...prev,
      [filter.id]: filterValue,
    }));
  };

  useEffect(() => {
    setHeaderText(selectedOptionText);
  }, [selectedOptionText]);

  useOutsideClick(ref, () => setIsOpen(false));

  const isSelected = filter.currentStatus !== undefined;

  return (
    <SelectBox>
      <SelectHeaderWrapper
        isSelected={isSelected}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <SelectHeaderText>
          {isSelected ? headerText : filter.title}
        </SelectHeaderText>
        <ArrowDown isSelected={isSelected} />
      </SelectHeaderWrapper>
      {isOpen && (
        <SelectListBox ref={ref}>
          {filter.options.map((option, index) => (
            <SelectList key={index} onClick={() => handleClick(option.value)}>
              {option.text}
            </SelectList>
          ))}
        </SelectListBox>
      )}
    </SelectBox>
  );
}

export default CustomSelect;

const SelectBox = styled.div`
  width: fit-content;
  position: relative;

  margin-right: 8px;
`;

const selectedHeader = css`
  color: ${theme.palette.font.white};
  background-color: ${theme.palette.main};
  &:hover {
    background-color: ${theme.palette.dark};
  }
`;

const defaultHeader = css`
  color: ${theme.palette.fontBlack};
  background-color: white;
  &:hover {
    background-color: ${theme.palette.lightGrey};
  }
`;

const SelectHeaderWrapper = styled.div<{ isSelected: boolean }>`
  width: fit-content;
  padding: 0 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.palette.grey};
  font-size: 0.75rem;
  margin-bottom: 3px;
  cursor: pointer;

  ${({ isSelected }) => (isSelected ? selectedHeader : defaultHeader)}
`;

const SelectHeaderText = styled.span`
  margin-right: 4px;
`;

const ArrowDown = styled.div<{ isSelected: boolean }>`
  width: 6px;
  height: 6px;
  margin: 0 0 1px;
  border-right: 2px solid
    ${({ isSelected }) => (isSelected ? 'white' : 'black')};
  border-bottom: 2px solid
    ${({ isSelected }) => (isSelected ? 'white' : 'black')};
  transform: rotate(45deg);
  transition: 0.1s all;
`;

const SelectListBox = styled.ul`
  width: 100%;
  position: absolute;
  border: 1px solid ${({ theme }) => theme.palette.grey};
  border-radius: 5px;
  padding: 5px 0;
  background-color: white;
  z-index: 1;
`;

const SelectList = styled.li`
  padding: 8px 6px;
  font-size: 0.75rem;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.palette.disable};
    color: white;
  }
`;
