import { Tab, TabList } from '../styles/NavTab';

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
