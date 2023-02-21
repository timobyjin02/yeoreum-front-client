import styled from '@emotion/styled';
import { useCallback, useRef, useState } from 'react';
import { requestPatchMajorUpload } from '../../apis/users';
import { getToken } from '../../utils/user';
interface userDataProps {
  userData: any;
}

function MajorChange({ userData }: userDataProps) {
  const token = getToken() as string;
  const [isView, setIsView] = useState(false);
  const [fileImg, setFileImg] = useState<File | null>(null);
  const [infoInputValue, setInfoInputValue] = useState<string>('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  const isViewHandler = () => {
    setIsView(true);
  };

  const studentIdRegistrationHandler = useCallback(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  }, []);

  const uploadImageHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    setFileImg(e.target.files[0]);

    alert('학생증 사진이 등록되었습니다');
  };

  const submitHandler = () => {
    if (!infoInputValue) {
      alert('학과를 입력해주세요');
      return;
    }

    if (!fileImg) {
      alert('파일을 업로드해주세요');
    }

    if (fileImg) {
      alert('제출 되었습니다');
    }

    requestPatchMajorUpload(fileImg, userData.major, token);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfoInputValue(e.target.value);
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
            value={infoInputValue}
            onChange={handleChange}
          />
          <MajorButtons
            className="certificationButton"
            onClick={studentIdRegistrationHandler}
          >
            학생증 등록
            <ImgEditInput
              type="file"
              ref={inputRef}
              onChange={uploadImageHandler}
              accept={'image/*'}
            />
          </MajorButtons>
          <MajorButtons className="submitButton" onClick={submitHandler}>
            제출
          </MajorButtons>
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

const Image = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
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
