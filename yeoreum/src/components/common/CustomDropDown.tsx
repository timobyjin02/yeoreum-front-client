import styled from '@emotion/styled';
import React, { useRef, useState } from 'react';
import useOutsideClick from '../../hooks/useOutsideClick';

interface CustomDropDownProps {
  width: number;
  title: string;
  options: OptionObject[];
}

interface OptionObject {
  value?: string;
}

function CustomDropDown({ width, title, options }: CustomDropDownProps) {
  const [headerText, setHeaderText] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef(null);

  useOutsideClick(ref, () => setIsOpen(false));

  const handleClick = (event: React.MouseEvent) => {
    setHeaderText((event.target as HTMLLIElement).innerText);
    setIsOpen(false);
  };

  return (
    <DropDownBox width={width}>
      <DropDownHeader
        isPlaceholder={headerText === ''}
        isFocus={isOpen}
        onClick={() => setIsOpen(prev => !prev)}
      >
        {headerText ? headerText : title}
        <Arrow />
      </DropDownHeader>

      {isOpen && (
        <DropDownListBox ref={ref}>
          {options.map((option, index) => (
            <DropDownList key={index} onClick={handleClick}>
              {option.value}
            </DropDownList>
          ))}
        </DropDownListBox>
      )}
    </DropDownBox>
  );
}

export default CustomDropDown;

const DropDownBox = styled.div<{ width: number }>`
  width: ${({ width }) => width + 'px'};
  position: relative;
`;

const DropDownHeader = styled.div<{ isPlaceholder: boolean; isFocus: boolean }>`
  position: relative;
  padding: 0 10px;
  width: 100%;
  display: flex;
  align-items: center;
  height: 35px;
  border-radius: 10px;
  outline: ${({ isFocus }) => (isFocus ? `2px solid #ff515a` : 'none')};
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
    background-color: rgba(255, 43, 54, 0.5);
    color: #fff;
  }
`;
