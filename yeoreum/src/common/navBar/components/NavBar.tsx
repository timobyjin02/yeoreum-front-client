import styled from "@emotion/styled";
import NavMenu from "./NavMenu";
import NavTab from "./NavTab";

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
