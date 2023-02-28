import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import FooterMenus from './FooterMenus';

export interface MenuOptionObject {
  title: string;
  items: MenuItem[];
}

export interface MenuItem {
  text: string;
  href: string;
}

function Footer() {
  const { pathname } = useRouter();
  const isInChatPage = pathname.slice(0, 9) === '/chatting';
  const isInErrorPage = pathname.slice(0, 7) === '/_error';

  const navOption: MenuOptionObject = {
    title: '바로가기',
    items: [
      { text: '게시판', href: '/board' },
      { text: '친구', href: '/friend' },
      { text: '채팅', href: '/chatting' },
    ],
  };

  const serviceOption: MenuOptionObject = {
    title: '고객센터',
    items: [
      { text: '문의하기', href: '/service/inquiry' },
      { text: '신고하기', href: '/service/notice' },
      { text: '자주 묻는 질문', href: '/service/notice' },
    ],
  };

  const noticeOption: MenuOptionObject = {
    title: '공지사항',
    items: [
      { text: '공지사항', href: '/service/notice' },
      { text: '이벤트', href: '/service/notice' },
      { text: '업데이트 내역', href: '/service/notice' },
    ],
  };

  const yeoreumOption: MenuOptionObject = {
    title: '여름이었다',
    items: [
      { text: '서비스 소개', href: '' },
      { text: '사용설명서', href: '' },
    ],
  };

  return (
    <>
      {isInErrorPage || isInChatPage ? null : (
        <FooterBackground>
          <FooterContainer>
            <FooterMenu>
              <FooterMenus option={navOption} />
              <FooterMenus option={serviceOption} />
              <FooterMenus option={noticeOption} />
              <FooterMenus option={yeoreumOption} />
            </FooterMenu>
            <FooterBottom>
              <FooterInfo>
                <Link href="/">
                  <YeoreumLogo
                    width={250}
                    height={72}
                    alt="yeorerm-logo"
                    src="/logo2.png"
                  />
                </Link>
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
      )}
    </>
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

const YeoreumLogo = styled(Image)`
  width: 130px;
  height: 36px;
  margin-bottom: 10px;
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
