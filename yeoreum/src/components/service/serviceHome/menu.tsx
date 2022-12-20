import styled from '@emotion/styled';
import Image from 'next/image';

export default function Menu() {
  const menuInfo = [
    { src: '/service/report.png', alt: 'report', text: '부적절한 게시글 신고' },
    { src: '/service/enquiry.png', alt: 'enquiry', text: '이용관련 문의' },
    { src: '/service/idea.png', alt: 'idea', text: '버그 / 개선 사항' },
    { src: '/service/guitar.png', alt: 'guitar', text: '기타' },
  ];

  return (
    <MenuBackground>
      <MenuContainer>
        {menuInfo.map(info => (
          <MenuRender src={info.src} alt={info.alt} text={info.text} />
        ))}
      </MenuContainer>
    </MenuBackground>
  );
}

type MenuProps = {
  src: string;
  alt: string;
  text: string;
};

const MenuRender = ({ src, alt, text }: MenuProps) => (
  <MenuBox>
    <Image src={src} width={50} height={50} alt={alt} />
    <p>{text}</p>
  </MenuBox>
);

const MenuBackground = styled.div`
  width: 100%;
`;
const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 680px;
  height: 430px;
  margin: 0 auto;
  font-weight: 500;
  @media (max-width: 679px) {
    flex-direction: column;
    justify-content: center;
    width: 90vw;
    height: fit-content;
    padding: 2em 0;
    & img {
      width: 40px;
      height: 40px;
      margin-right: 1em;
    }
    & > div {
      width: 100%;
      flex: 0 0 50px;
      flex-direction: row;
      justify-content: flex-start;
      margin: 0.4em;
      padding: 0 1em;
    }
  }
`;

const MenuBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 0 0 152px;
  height: 152px;
  border-radius: 16px;
  background-color: #f5f6f7;
  cursor: pointer;
  & img {
    margin: 15px 0px;
  }
  & p {
    font-size: 0.9em;
  }
`;
