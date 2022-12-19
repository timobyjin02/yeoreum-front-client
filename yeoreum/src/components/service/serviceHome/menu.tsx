import styled from '@emotion/styled';
import Image from 'next/image';

export default function Menu() {
  return (
    <MenuBackground>
      <MenuContainer>
        <MenuBox>
          <Image
            src="/service/report.png"
            width={70}
            height={70}
            alt="report"
          />
          <p>부적절한 게시글 신고</p>
        </MenuBox>
        <MenuBox>
          <Image
            src="/service/enquiry.png"
            width={50}
            height={50}
            alt="question"
          />
          <p>이용관련 문의</p>
        </MenuBox>
        <MenuBox>
          <Image
            src="/service/idea.png"
            width={70}
            height={70}
            alt="question"
          />
          <p>버그 / 개선 사항</p>
        </MenuBox>
        <MenuBox>
          <Image
            src="/service/guitar.png"
            width={50}
            height={50}
            alt="guitar"
          />
          <p>기타</p>
        </MenuBox>
      </MenuContainer>
    </MenuBackground>
  );
}

const MenuBackground = styled.div`
  width: 100%;
  /* background-color: #f5f6f7; */
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
      /* display: none; */
      width: 40px;
      height: 40px;
      margin-right: 1em;
    }
    & > div {
      width: 100%;
      flex: 0 0 70px;
      flex-direction: row;
      justify-content: flex-start;
      margin: 0.4em;
      padding: 0 1em;
    }
  }
`;

const MenuBox = styled.div`
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
