import styled from '@emotion/styled';
import React, { useRef, useState } from 'react';
import useOutsideClick from '../../../hooks/useOutsideClick';
import { PostCreateData } from '../../../types/post';
import { GenderOptionObject } from './PostGender';

interface CustomDropDownProps {
  options: GenderOptionObject;
  setPostData: React.Dispatch<React.SetStateAction<PostCreateData>>;
}

function CustomDropDown({ options, setPostData }: CustomDropDownProps) {
  const [headerText, setHeaderText] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef(null);

  useOutsideClick(ref, () => setIsOpen(false));

  const handleClick = (event: React.MouseEvent, value: number) => {
    setPostData(prev => ({
      ...prev,
      [options.keyName]: value,
    }));
    setHeaderText((event.target as HTMLLIElement).innerText);
    setIsOpen(false);
  };

  return (
    <GenderContainer>
      <GenderItem onClick={() => setIsOpen(true)}>{options.title}</GenderItem>
      <DropDownBox>
        <DropDownHeader
          isPlaceholder={headerText === ''}
          isFocus={isOpen}
          onClick={() => setIsOpen(prev => !prev)}
        >
          {headerText ? headerText : options.placeholder}
          <Arrow />
        </DropDownHeader>

        {isOpen && (
          <DropDownListBox ref={ref}>
            {options.options.map((option, index) => (
              <DropDownList
                key={index}
                onClick={event => handleClick(event, option.value)}
              >
                {option.text}
              </DropDownList>
            ))}
          </DropDownListBox>
        )}
      </DropDownBox>
    </GenderContainer>
  );
}

export default CustomDropDown;

const GenderContainer = styled.div`
  display: flex;
  align-items: center;
  :first-of-type {
    margin-right: 28px;
    @media (max-width: 640px) {
      margin-right: 0;
    }
  }

  @media (max-width: 640px) {
    flex-grow: 1;
    padding: 0 10px;
  }
`;

const GenderItem = styled.span`
  font-weight: 500;
  font-size: 0.875rem;
  margin-right: 10px;
  cursor: default;
  @media (max-width: 640px) {
    flex-shrink: 0;
  }
`;

const DropDownBox = styled.div`
  width: 88px;
  position: relative;
  @media (max-width: 640px) {
    width: 100%;
  }
`;

const DropDownHeader = styled.div<{ isPlaceholder: boolean; isFocus: boolean }>`
  position: relative;
  padding: 0 10px;
  width: 100%;
  display: flex;
  align-items: center;
  height: 35px;
  border-radius: 10px;
  outline: ${({ isFocus, theme }) =>
    isFocus ? `2px solid ${theme.palette.main}` : 'none'};
  font-size: 0.875rem;
  margin: 3px 0;
  background-color: #f3f4f5;
  color: ${({ isPlaceholder }) => (isPlaceholder ? '#8e8e8e' : 'inherit')};
  &:hover {
    background-color: #eee;
    cursor: pointer;
  }
`;

const Arrow = styled.div`
  position: absolute;
  right: 10px;
  width: 6px;
  height: 6px;
  border-bottom: 2px solid #333;
  border-right: 2px solid #333;
  transform: rotate(45deg);
`;

const DropDownListBox = styled.ul`
  width: 100%;
  position: absolute;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  padding: 5px 0;
  background-color: #f3f4f5;
  z-index: 1;
`;

const DropDownList = styled.li`
  padding: 8px 6px;
  font-size: 0.75rem;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.palette.disable};
    color: #fff;
  }
`;
