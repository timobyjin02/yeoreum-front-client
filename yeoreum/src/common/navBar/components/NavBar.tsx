import styled from "@emotion/styled";

interface Props {
  size: number;
  shadow?: number;
  blur?: number;
  src?: string;
}

const ProfileImg = ({ size, shadow = 2, blur = 3, src }: Props) => {
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
      <Tab>
        <TabBtn>게시판</TabBtn>
        <TabBtn>채팅</TabBtn>
        <TabBtn>친구</TabBtn>
      </Tab>
      <div style={{ display: "flex", alignItems: "center" }}>
        <AlarmBtn>
          <Alarm src="images/alarm.png" />
        </AlarmBtn>
        <ProfileImg size={56} src="" />
        <Nickname>donkeykong 님</Nickname>
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
  height: 80px;
  padding: 0 200px;
  background-color: ${({ theme }) => theme.palette.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 2px 0 3px rgba(0, 0, 0, 50%);
`;

const Yeoreum = styled.img`
  width: 250px;
  height: inherit;
  &:hover {
    cursor: pointer;
    height: 70px;
  }
`;

const Tab = styled.div`
  width: 450px;
  height: inherit;
  display: flex;
  justify-content: flex-end;
`;

const TabBtn = styled.button`
  width: 120px;
  height: inherit;
  font-size: 20px;
  border-radius: 10px;
  &:hover {
    font-weight: 600;
    box-shadow: inset 3px 3px 4px rgba(0, 0, 0, 25%),
      inset -3px -3px 4px #ffffff;
    transition: 0.3s;
  }
`;

const AlarmBtn = styled.div`
  display: flex;
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
  margin-left: 20px;
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

const Nickname = styled.div`
  width: 200px;
  height: inherit;
  font-size: 18px;
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
