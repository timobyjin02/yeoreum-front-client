import styled from '@emotion/styled';
import Link from 'next/link';
import React from 'react';
import { MenuItem, MenuOptionObject } from './Footer';

interface FooterMenusProps {
  option: MenuOptionObject;
}

function FooterMenus({ option }: FooterMenusProps) {
  return (
    <Menu>
      <MenuTitle>{option.title}</MenuTitle>
      {option.items.map((item: MenuItem) => (
        <MenuItem>
          <Link href={item.href}>{item.text}</Link>
        </MenuItem>
      ))}
    </Menu>
  );
}

export default FooterMenus;

const Menu = styled.ul`
  min-width: 125px;
  flex-basis: 250px;
  font-size: 15px;
  @media (max-width: 640px) {
    flex-basis: auto;
    padding-bottom: 30px;
  } ;
`;

const MenuTitle = styled.li`
  font-weight: 600;
  line-height: 30px;
  padding-bottom: 5px;
`;

const MenuItem = styled.li`
  line-height: 30px;
  color: #a0a0a0; ;
`;
