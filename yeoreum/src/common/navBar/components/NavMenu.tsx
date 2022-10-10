import ProfileImage from '../../profileImage/components/ProfileImage';
import {
  Alarm,
  AlarmBtn,
  Hamburger,
  HamburgerBtn,
  MenuWrapper,
  Nickname,
  UserProfile,
} from '../styles/NavMenu';

function NavMenu() {
  return (
    <MenuWrapper>
      <AlarmBtn>
        <Alarm src="images/alarm.png" />
      </AlarmBtn>
      <UserProfile>
        <ProfileImage size={40} shadow={1} blur={2} src="" />
        <Nickname>donkeykong</Nickname>님
      </UserProfile>
      <HamburgerBtn>
        <Hamburger src="images/hamburger.png" />
      </HamburgerBtn>
    </MenuWrapper>
  );
}

export default NavMenu;
