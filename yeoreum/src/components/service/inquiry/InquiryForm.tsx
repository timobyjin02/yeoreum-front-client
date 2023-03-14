import styled from '@emotion/styled';
import React from 'react';
import File from './fileInput';
import ReportInput from './ReportInput';
import { useState } from 'react';

const SubmitForm = () => {
  const [isReport, setIsReport] = useState(false);
  const ClickInquiry = (e: React.MouseEvent) => setIsReport(false);
  const ClickReport = (e: React.MouseEvent) => setIsReport(true);
  return (
    <Form>
      <FormHedaer>
        <Label htmlFor="inquiry">문의</Label>
        <Radio
          type="radio"
          name="service"
          id="inquiry"
          onClick={ClickInquiry}
          defaultChecked
        />
        <Label htmlFor="report">신고</Label>
        <Radio type="radio" name="service" id="report" onClick={ClickReport} />
        {isReport && <ReportInput />}
      </FormHedaer>
      <TextInputBox>
        <Label htmlFor="title">제목</Label>
        <Title
          type="text"
          id="title"
          maxLength={50}
          placeholder="제목을 입력해주세요"
        />
        <Label htmlFor="description">문의내용</Label>
        <Description
          id="description"
          maxLength={255}
          placeholder="자세한 내용을 입력해주세요"
        />
      </TextInputBox>
      <File />
      <Submit type="submit" />
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const FormHedaer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  min-height: 40px;
`;
const TextInputBox = styled.div`
  & > input,
  textarea {
    width: 100%;
    background-color: #f5f6f7;
    border-radius: 5px;
    padding: 1em;
  }
  & > label {
    margin: 20px 0 4px 0;
  }
`;

const Label = styled.label`
  display: inline-block;
  margin-right: 0.25em;
`;
const Radio = styled.input`
  margin-right: 3em;
`;

const Title = styled.input`
  &::placeholder {
    color: #adadad;
  }
`;
const Description = styled.textarea`
  width: 100%;
  height: 12em;
  resize: none;
  &::placeholder {
    color: #adadad;
  }
`;

const Submit = styled.input`
  align-self: center;
  width: 160px;
  height: 46px;
  margin: 4em;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.palette.main};
  color: #ffffff;
  cursor: pointer;
`;
export default SubmitForm;
