import styled from '@emotion/styled';
import React, { useRef, useState, useEffect } from 'react';
import useOutsideClick from '../../hooks/useOutsideClick';
import { RequestGetAllPostsOption } from '../../apis/posts';
import { FilterItem, FilterValue } from './Filter';
import { useSaveFilterData } from '../../hooks/useBoardPageData';
import { useRouter } from 'next/router';

interface CustomSelectProps {
  width: number;
  filter: FilterItem;
  option: RequestGetAllPostsOption;
  setOption: React.Dispatch<React.SetStateAction<RequestGetAllPostsOption>>;
}

function CustomSelect({ option, width, filter, setOption }: CustomSelectProps) {
  const [headerText, setHeaderText] = useState(filter.title);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const router = useRouter();

  // select box의 필터 옵션과 현재 적용 중인 필터 옵션이 일치하는 text를 가져온다.
  const selectedOptionText = filter.options.filter(
    option => filter.currentStatus === option.value,
  )[0].text;

  useOutsideClick(ref, () => setIsOpen(false));

  const handleClick = (event: React.MouseEvent, filterValue: FilterValue) => {
    setHeaderText((event.target as HTMLLIElement).innerText);
    setIsOpen(false);
    setOption(prev => ({
      ...prev,
      [filter.id]: filterValue,
    }));
  };

  const routeChangeEventHandler = () => useSaveFilterData(option);

  useEffect(() => {
    router.events.on('routeChangeStart', routeChangeEventHandler);
    return () => router.events.off('routeChangeStart', routeChangeEventHandler);
  }, [routeChangeEventHandler]);

  useEffect(() => {
    setHeaderText(selectedOptionText);
  }, [selectedOptionText]);

  return (
    <SelectBox width={width}>
      <SelectHeader onClick={() => setIsOpen(prev => !prev)}>
        {headerText}
      </SelectHeader>
      {isOpen && (
        <SelectListBox ref={ref}>
          {filter.options.map((option, index) => (
            <SelectList
              key={index}
              onClick={event => handleClick(event, option.value)}
            >
              {option.text}
            </SelectList>
          ))}
        </SelectListBox>
      )}
    </SelectBox>
  );
}

export default CustomSelect;

const SelectBox = styled.div<{ width: number }>`
  width: ${({ width }) => width + 'px'};

  position: relative;
  margin-right: 8px;
`;

const SelectHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  border-radius: 15px;
  border: 1px solid #bfbfbf;
  font-size: 0.75rem;
  margin-bottom: 3px;
  &:hover {
    background-color: #eee;
    cursor: pointer;
  }
`;

const SelectListBox = styled.ul`
  width: 100%;
  position: absolute;
  border: 1px solid #c4c4c4;
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
    background-color: #aaa;
    color: #fff;
  }
`;
