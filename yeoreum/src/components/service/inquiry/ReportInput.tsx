import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

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
        value={reportedName}
      />
      <ValidateNickname>유효한 닉네임입니다.</ValidateNickname>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  width: 14em;
  background: #f5f6f7;
  border-radius: 5px;
  padding: 0.8em;
  margin-top: 0.25em;
`;
const ValidateNickname = styled.p`
  font-size: 0.75em;
  padding: 0.8em;
  color: ${({ theme }) => theme.palette.serviceBtn};
`;

export default ReportInput;
