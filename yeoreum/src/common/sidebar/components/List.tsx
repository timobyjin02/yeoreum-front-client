import { Wrapper, List } from "../styles/Category";

interface ListProps {
  children: React.ReactNode;
}

const Lists = ({children}:ListProps) => {
  return (
    <Wrapper>
      <List>{children}</List>
    </Wrapper>
  )
}

export default Lists;

