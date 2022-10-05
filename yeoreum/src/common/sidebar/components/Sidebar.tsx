import Category from './Category';
import {Wrapper, Container, Logo, Main, Bottom, IconStyle, Text} from "../styles/Sidebar";
import {
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

interface Props {
  component: React.ReactNode;
}

function Sidebar({component}: Props) {
  return (
    <>
    <Wrapper>
      <Container>
        <Logo />
        <Category />
        <Bottom>
          <IconStyle icon={faRightFromBracket} />
          <Text>Log out</Text>
        </Bottom>
      </Container>
      <Main>{component}</Main>
    </Wrapper>
    </>
  )
}

export default Sidebar;

