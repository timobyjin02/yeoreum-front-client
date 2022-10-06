import styled from "@emotion/styled";
import ProfileImage from "../../profileImage/components/ProfileImage";

function NavMenu() {
  return (
    <div
      style={{
        position: "relative",
        width: "360px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <AlarmBtn>
        <Alarm src="images/alarm.png" />
      </AlarmBtn>
      <div
        style={{
          marginLeft: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ProfileImage size={40} shadow={1} blur={2} src="" />
        <Nickname>donkeykong</Nickname>님
      </div>
      <HamburgerBtn>
        <Hamburger src="images/hamburger.png" />
      </HamburgerBtn>
    </div>
  );
}

export default NavMenu;

const AlarmBtn = styled.div`
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

const Alarm = styled.img`
  width: 45px;
  height: 45px;
`;

const Nickname = styled.span`
  font-size: 16px;
  font-weight: 500;
  margin-left: 14px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.font};
`;

const HamburgerBtn = styled.button`
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

const Hamburger = styled.img`
  width: 45px;
  height: 45px;
`;
