import styled from '@emotion/styled';
import React from 'react';

function Footer() {
  return (
    <FooterBackground>
      <FooterContainer>
        <FooterMenu>
          <Menu>
            <MenuTitle>바로가기</MenuTitle>
            <MenuItem>게시판</MenuItem>
            <MenuItem>친구</MenuItem>
            <MenuItem>채팅</MenuItem>
          </Menu>
          <Menu>
            <MenuTitle>고객센터</MenuTitle>
            <MenuItem>문의하기</MenuItem>
            <MenuItem>신고하기</MenuItem>
            <MenuItem>자주 묻는 질문</MenuItem>
          </Menu>
          <Menu>
            <MenuTitle>공지사항</MenuTitle>
            <MenuItem>공지사항</MenuItem>
            <MenuItem>이벤트</MenuItem>
            <MenuItem>업데이트 내역</MenuItem>
          </Menu>
          <Menu>
            <MenuTitle>여름이었다</MenuTitle>
            <MenuItem>서비스 소개</MenuItem>
            <MenuItem>사용설명서</MenuItem>
          </Menu>
        </FooterMenu>
        <FooterBottom>
          <FooterInfo>
            <YeoreumLogo>로고</YeoreumLogo>
            <Terms>
              <PolicyAndTerms>개인정보처리방침</PolicyAndTerms>
              <PolicyAndTerms>이용약관</PolicyAndTerms>
            </Terms>
            <Rights>Copyright ⓒ 모던애자일 Rights Reserved.</Rights>
          </FooterInfo>
          <FooterIcons>
            <FooterIcon />
            <FooterIcon />
            <FooterIcon />
            <FooterIcon />
          </FooterIcons>
        </FooterBottom>
      </FooterContainer>
    </FooterBackground>
  );
}

export default Footer;

const FooterBackground = styled.footer`
  background-color: #242d39;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 60px 0 50px;
`;

const FooterContainer = styled.div`
  width: 975px;
  // 퍼블리싱 임시 최소 높이
  margin: 0 50px;
  display: flex;
  flex-direction: column;
  color: #dadada;
`;

const FooterMenu = styled.div`
  display: flex;
  padding-bottom: 40px;
  @media (max-width: 640px) {
    flex-direction: column;
    padding-bottom: 20px;
  } ;
`;

const Menu = styled.ul`
  min-width: 125px;
  flex-basis: 250px;
  font-size: 15px;
  @media (max-width: 640px) {
    flex-basis: auto;
    padding-bottom: 30px;
  } ;
`;

const MenuTitle = styled.li`
  font-weight: 600;
  line-height: 30px;
  padding-bottom: 5px;
`;

const MenuItem = styled.li`
  line-height: 30px;
  color: #a0a0a0; ;
`;

const FooterBottom = styled.div`
  display: flex;
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 60px;
`;

const YeoreumLogo = styled.div`
  color: #ff2b37;
  font-size: 26px;
  font-weight: 600;
  padding-bottom: 10px;
`;

const Terms = styled.div`
  display: flex;
  padding: 10px 0;
`;

const PolicyAndTerms = styled.span`
  font-size: 14px;
  flex-shrink: 0;
  :nth-of-type(2) {
    ::before {
      content: '|';
      margin-left: 5px;
      margin-right: 5px;
    }
  }
`;

const Rights = styled.div`
  font-size: 12px;
  padding-bottom: 10px;
`;

const FooterIcons = styled.ul`
  display: flex;
  align-self: flex-end;
  padding-bottom: 20px;
  @media (max-width: 640px) {
    padding-top: 20px;
    align-self: auto;
  }
`;

const FooterIcon = styled.li`
  width: 40px;
  height: 40px;
  background-color: red;
  border-radius: 50%;
  margin-right: 20px;
`;
