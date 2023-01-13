import styled from '@emotion/styled';
import { useState } from 'react';

const ReportInput = () => {
  const [reportedName, setReportedName] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    // 닉네임 유효 요청
    setReportedName(e.target.value);
  return (
    <Wrapper>
      <Input
        type="text"
        onChange={onChange}
        placeholder="신고할 닉네임을 입력해주세요."
      />
      <ValidateNickname>{reportedName}</ValidateNickname>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;
const Input = styled.input`
  width: 16em;
  background: #f5f6f7;
  border-radius: 5px;
  padding: 0.8em;
`;
const ValidateNickname = styled.p`
  padding: 0.8em;
`;

export default ReportInput;
