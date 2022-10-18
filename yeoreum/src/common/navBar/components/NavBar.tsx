import NavMenu from './NavMenu';
import NavTab from './NavTab';
import { Nav, Yeoreum } from '../styles/NavBar';

function NavBar() {
  return (
    <Nav>
      <Yeoreum src="images/yeoreum.png" />
      <NavTab />
      <NavMenu />
    </Nav>
  );
}

export default NavBar;
