import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useRef, useState } from 'react';

interface MenuProps {
  title: string;
  options: MenuItemObject[];
}

interface MenuItemObject {
  value: string;
  address?: string;
}

function Menu({ title, options }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <MenuContainer ref={ref}>
      <MenuHeader onClick={() => setIsOpen(prev => !prev)}>
        <MenuTitle>{title}</MenuTitle>
        <MenuArrow />
      </MenuHeader>
      {isOpen && (
        <MenuListBox>
          {options.map((option, index) => (
            <MenuList key={index}>{option.value}</MenuList>
          ))}
        </MenuListBox>
      )}
    </MenuContainer>
  );
}

export default Menu;

const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;
const MenuHeader = styled.div`
  height: 52px;
  border-bottom: 1px solid #777;
  padding: 0 20px 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MenuTitle = styled.h4``;

const MenuArrow = styled.div`
  width: 20px;
  height: 20px;
  background-color: lightgray;
`;

const openFold = keyframes`
from {
  right: 280px;
}
to {
  right: 0;
}
`;

const MenuListBox = styled.ul`
  display: flex;
  flex-direction: column;
  position: relative;
  animation: ${openFold} 0.2s 1;
`;

const MenuList = styled.li`
  font-size: 14px;
  height: 52px;
  border-bottom: 1px solid #bbb;
  padding: 0 30px;
  display: flex;
  align-items: center;
`;
