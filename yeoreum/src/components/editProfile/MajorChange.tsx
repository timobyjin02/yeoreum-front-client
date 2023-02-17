import styled from '@emotion/styled';
import { useState } from 'react';

interface userDataProps {
  userData: any;
}
function MajorChange({ userData }: userDataProps) {
  const [isView, setIsView] = useState(false);
  const [fileImg, setFileImg] = useState('');

  const isViewHandler = () => {
    setIsView(true);
  };

  return (
    <MajorWrapper>
      <MajorWrap>
        <InfoInput
          name="major"
          value={userData.major}
          className={'readOnly'}
          readOnly
        />
        <MajorChangeButton onClick={isViewHandler}>학과 변경</MajorChangeButton>
      </MajorWrap>
      {isView && (
        <MajorWrap>
          <InfoInput
            className="changeInput"
            placeholder="변경할 학과명을 입력해 주세요"
          />
          <MajorButtons className="certificationButton">
            학생증 등록
            <ImgEditInput
              type="file"
              // ref={inputRef}
              // onChange={handleUploadImage}
              accept={'image/*'}
            />
          </MajorButtons>
          <MajorButtons className="submitButton">제출</MajorButtons>
        </MajorWrap>
      )}
    </MajorWrapper>
  );
}

export default MajorChange;

const MajorWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoInput = styled.input`
  width: 340px;
  height: 34px;
  padding: 0 12px;
  margin-bottom: 18px;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.palette.background.light};
  border: none;
  border-radius: 5px;
  outline: none;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.palette.dark};
  }
  &::placeholder {
    color: #8e8e8e;
  }
  &.readOnly {
    outline: none;
    color: ${({ theme }) => theme.palette.font.disable};
  }
  &.changeInput {
    width: 280px;
  }
  &.changeInput::placeholder {
    font-size: 12px;
  }
`;

const MajorChangeButton = styled.button`
  width: 80px;
  height: 38px;
  border-radius: 8px;
  margin-left: 10px;
  color: ${({ theme }) => theme.palette.font.white};
  background: ${({ theme }) => theme.palette.main};

  cursor: pointer;
`;

const MajorWrap = styled.div`
  display: flex;
`;

const ImgEditInput = styled.input`
  display: none;
`;

const MajorButtons = styled.button`
  width: 80px;
  height: 34px;
  border-radius: 8px;
  margin-left: 10px;
  color: ${({ theme }) => theme.palette.main};
  border: 1px solid ${({ theme }) => theme.palette.main};
  background-color: inherit;

  cursor: pointer;

  &.submitButton {
    width: 50px;
  }
  &:hover {
    background-color: ${({ theme }) => theme.palette.disable};
  }
`;
