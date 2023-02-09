import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';

interface MenuProps {
  onClose: () => void;
  alt: string;
  options: MenuItemObject[];
}

interface MenuItemObject {
  title: string;
  src: string;
  pageUrl: string;
}

function Menu({ onClose, alt, options }: MenuProps) {
  const router = useRouter();
  // const [isOpen, setIsOpen] = useState(false);
  // const ref = useRef<HTMLDivElement | null>(null);

  const navigate = (url: string) => {
    router.push(`/${url}`);
    onClose();
  };

  return (
    <MenuContainer>
      {options.map((menu, index) => (
        <MenuItem key={`${alt}${index}`} onClick={() => navigate(menu.pageUrl)}>
          <MenuIcon
            alt={`${alt}-${menu.title}`}
            src={`/icons${menu.src}`}
            width={24}
            height={24}
          />
          <MenuTitle>{menu.title}</MenuTitle>
        </MenuItem>
      ))}
    </MenuContainer>
  );
}

export default Menu;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const MenuItem = styled.div`
  width: calc(100% - 36px);
  margin: 0 auto;
  padding: 0 6px;
  height: 56px;
  display: flex;
  align-items: center;
  position: relative;

  cursor: pointer;

  &:first-of-type {
    border-top: 1px solid ${({ theme }) => theme.palette.line.grey};
  }
`;

const MenuIcon = styled(Image)`
  margin-right: 6px;
`;

const MenuTitle = styled.h4`
  font-size: 16px;
`;

const openFold = keyframes`
from {
  right: 280px;
}
to {
  right: 0;
}
`;
