import styled from '@emotion/styled';
import Image from 'next/image';

export default function Menu() {
  return (
    <MenuContainer>
      <MenuBox>
        <Image src="/reportIcon.png" width={70} height={70} alt="report" />
        <p>부적절한 게시글 신고</p>
      </MenuBox>
      <MenuBox>
        <Image src="/questionIcon.png" width={70} height={70} alt="question" />
        <p>이용관련 문의</p>
      </MenuBox>
      <MenuBox>
        <Image src="/questionIcon.png" width={70} height={70} alt="question" />
        <p>버그 / 개선 사항</p>
      </MenuBox>
      <MenuBox>
        <Image src="/guitarIcon.png" width={70} height={70} alt="guitar" />
        <p>기타</p>
      </MenuBox>
    </MenuContainer>
  );
}

const MenuContainer = styled.div`
  width: 100%;
  height: 760px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  margin: 16px;
  border-radius: 16px;
  background-color: white;
  cursor: pointer;
  & img {
    margin: 15px 0px;
  }
`;
