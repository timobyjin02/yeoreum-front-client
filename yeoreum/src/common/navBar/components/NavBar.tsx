import styled from "@emotion/styled";
import NavTab from "./NavTab";

interface Props {
  size: number;
  shadow?: number;
  blur?: number;
  src?: string;
}

const ProfileImg = ({ size, shadow = 2, blur = 4, src }: Props) => {
  return (
    <Profile size={size} shadow={shadow} blur={blur}>
      <Picture
        size={size * (80 / 100)}
        src={src ? src : "images/default_profile.png"}
      />
    </Profile>
  );
};

function NavBar() {
  return (
    <Nav>
      <Yeoreum src="images/yeoreum.png" />
      <NavTab />
      <div style={{ width: "360px", display: "flex", alignItems: "center" }}>
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
          <ProfileImg size={40} shadow={1} blur={2} src="" />
          <Nickname>donkeykonghongwe</Nickname>님
        </div>
        <HamburgerBtn>
          <Hamburger src="images/hamburger.png" />
        </HamburgerBtn>
      </div>
    </Nav>
  );
}

export default NavBar;

const Nav = styled.nav`
  width: 100vw;
  height: 60px;
  padding: 0 60px;
  background-color: ${({ theme }) => theme.palette.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 2px 0 3px rgba(0, 0, 0, 50%);
`;

const Yeoreum = styled.img`
  --nav-height: 60px;
  width: 200px;
  height: inherit;
  &:hover {
    cursor: pointer;
    height: calc(var(--nav-height) - 5px);
  }
`;

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

const Profile = styled.div<{ size: number; shadow: number; blur: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  margin-left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.background};
  border-radius: 50%;
  box-shadow: ${(props) => `inset ${props.shadow}px ${props.shadow}px
      ${props.blur}px rgba(0, 0, 0, 25%),
    inset -${props.shadow}px -${props.shadow}px ${props.blur}px
      #ffffff;`};
`;

const Picture = styled.img<{ size: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
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
