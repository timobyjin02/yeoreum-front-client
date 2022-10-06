import styled from "@emotion/styled";

function NavTab() {
  return (
    <Tab>
      <TabList>게시판</TabList>
      <TabList>채팅</TabList>
      <TabList>친구</TabList>
    </Tab>
  );
}

export default NavTab;

const Tab = styled.ul`
  width: 450px;
  height: inherit;
  display: flex;
  justify-content: flex-end;
`;

const TabList = styled.li`
  width: 120px;
  height: inherit;
  font-size: 16px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    font-weight: 600;
    box-shadow: inset 3px 3px 4px rgba(0, 0, 0, 25%),
      inset -3px -3px 4px #ffffff;
    transition: 0.3s;
  }
`;
