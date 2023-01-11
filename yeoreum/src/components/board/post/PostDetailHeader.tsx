import styled from '@emotion/styled';
import React, { useState, useRef } from 'react';
import useOutsideClick from '../../../hooks/useOutsideClick';

function PostDetailHeader(postData: any) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useOutsideClick(ref, () => setIsOpen(false));

  return (
    <Header>
      <PostPageShortcut>{'≪ 여름게시판'}</PostPageShortcut>
      <PostTitle>
        어플 이벤트로 민뜨가는데 과팅할 분 4명 구합니다. 근육맨 두명 있음 키
        197에 3대 500 넘음 이건 진짜 말도 안되는 기회임 ㅋㅋ
      </PostTitle>
      <PostInfo>
        <FlexRowContainer>
          <PosterProfile />
          <NicknameDate>
            <Nickname>클라이밍장인</Nickname>
            <PostedAt>2022.10.8</PostedAt>
          </NicknameDate>
        </FlexRowContainer>
        <MoreBtn onClick={() => setIsOpen(true)} />
        {isOpen && (
          <ReportModal ref={ref}>
            <ReportBtn>게시글 신고하기</ReportBtn>
          </ReportModal>
        )}
      </PostInfo>
    </Header>
  );
}

export default PostDetailHeader;

const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  border-bottom: 1px solid #e8e8e8;
`;

const PostPageShortcut = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.palette.fontGrey};
  margin-bottom: 30px;
`;

const PostTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 30px;
  letter-spacing: -0.2px;
`;

const FlexRowContainer = styled.div`
  display: flex;
`;

const PostInfo = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PosterProfile = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: lightgray;
  margin-right: 12px;
`;

const NicknameDate = styled.div`
  display: flex;
  flex-direction: column;
`;

const Nickname = styled.span`
  color: ${({ theme }) => theme.palette.fontBlack};
`;

const PostedAt = styled.span`
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.palette.fontGrey};
`;

const MoreBtn = styled.div`
  width: 24px;
  height: 24px;
  background-color: lightgray;
  position: relative;
`;

const ReportModal = styled.div`
  background-color: white;
  width: 135px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  position: absolute;
  border: 1px solid #d0d0d0;
  top: 50%;
  right: 0;
  transform: translate(10px, 8px);
`;

const ReportBtn = styled.button`
  width: 135px;
  height: 40px;
  background-color: inherit;

  cursor: pointer;

  &:hover {
    background-color: #e1e1e1;
  }
`;
