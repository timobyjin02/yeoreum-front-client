import styled from '@emotion/styled';

export const MenuWrapper = styled.div`
  position: relative;
  width: 360px;
  display: flex;
  align-items: center;
`;

export const AlarmBtn = styled.div`
  display: flex;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 55px;
  border-radius: 5px;
  &:hover {
    box-shadow: inset 2px 2px 3px rgba(0, 0, 0, 25%),
      inset -2px -2px 3px #ffffff;
    transition: 0.3s;
  }
`;

export const Alarm = styled.img`
  width: 45px;
  height: 45px;
`;

export const UserProfile = styled.div`
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Nickname = styled.span`
  font-size: 16px;
  font-weight: 500;
  margin-left: 14px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.font};
`;

export const HamburgerBtn = styled.button`
  position: absolute;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  width: 55px;
  height: 55px;
  border-radius: 5px;
  &:hover {
    box-shadow: inset 2px 2px 3px rgba(0, 0, 0, 25%),
      inset -2px -2px 3px #ffffff;
    transition: 0.3s;
  }
`;

export const Hamburger = styled.img`
  width: 45px;
  height: 45px;
`;
