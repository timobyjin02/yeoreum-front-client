import Link from 'next/link';
import styled from '@emotion/styled';
import { AlertProps } from '../../types/signUp';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0.2em auto;
  padding: 1em 1.3em;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 4em;
`;

export const P = styled.p`
  width: 24.5%;
`;

export const AlertP = styled.p<AlertProps>`
  margin-left: 21%;
  padding-bottom: 1em;
  font-size: 0.8em;
  color: ${props =>
    props.success === undefined
      ? props.theme.palette.font.body
      : props.success === true
      ? props.theme.palette.main
      : '#f50505'};
`;

export const Input = styled.input`
  width: 74%;
  height: 72%;
  padding: 0.75em;
  border: solid 1px ${({ theme }) => theme.palette.line.grey};
  border-radius: 4px;
  color: ${({ theme }) => theme.palette.font.headline};
  font-size: 1rem;
  ::placeholder {
    font-size: 0.875em;
    font-weight: 300;
  }
  :focus {
    outline: none;
    box-shadow: 0 0 1px;
    border-color: ${({ theme }) => theme.palette.main};
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  width: 80%;
  height: 100%;
  font-size: 0.9em;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.font.headline};
`;

export const Button = styled.button`
  width: 20%;
  height: 72%;
  border: solid 1px ${({ theme }) => theme.palette.main};
  border-radius: 4px;
  background-color: white;
  color: ${({ theme }) => theme.palette.main};
  font-size: 0.875em;
  font-weight: 500;
  cursor: pointer;
  :disabled {
    border: solid 1px ${({ theme }) => theme.palette.line.grey};
    background-color: ${({ theme }) => theme.palette.background.grey};
    color: ${({ theme }) => theme.palette.font.white};
    cursor: default;
  }
  :active {
    ${props =>
      !props.disabled &&
      `color: ${props.theme.palette.main};
    background-color: ${props.theme.palette.disable};`}
  }
`;

export const SubmitWrapper = styled.div`
  align-self: center;
  width: 59.2%;
  height: 48px;
  margin-right: 1.4%;
`;
export const Submit = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  margin-top: 1em;
  background-color: ${({ theme }) => theme.palette.main};
  color: white;
  cursor: pointer;
  :active {
    ${props =>
      !props.disabled && `background-color: ${props.theme.palette.dark};`}
  }
`;

export const GenderSelect = styled.select`
  width: 74%;
  height: 72%;
  padding: 0.475em;
  border: solid 1px ${({ theme }) => theme.palette.line.grey};
  border-radius: 4px;
  color: ${({ theme }) => theme.palette.font.headline};
  font-size: 1rem;
  :focus {
    outline: none;
    box-shadow: 0 0 1px;
    border-color: ${({ theme }) => theme.palette.main};
  }
`;

export const DescriptionWrapper = styled.div`
  height: 8em;
  & p {
    height: 82%;
    margin-top: 2%;
  }
`;
export const DescriptionInput = styled.textarea`
  width: 74%;
  height: 82%;
  padding: 0.75em;
  border: solid 1px ${({ theme }) => theme.palette.line.grey};
  border-radius: 4px;
  color: ${({ theme }) => theme.palette.font.headline};
  font-size: 1rem;
  resize: none;
  ::placeholder {
    font-size: 0.875em;
    font-weight: 300;
  }
  :focus {
    outline: none;
    box-shadow: 0 0 1px;
    border-color: ${({ theme }) => theme.palette.main};
  }
`;

export const GenderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  height: 4em;
  font-size: 0.9em;
  font-weight: 500;
`;

export const GenderLabel = styled.label`
  color: ${({ theme }) => theme.palette.font.subHeadline};
  & span {
    margin-right: 4em;
  }
`;

export const GenderInput = styled.input`
  margin-right: 0.5em;
`;

export const ProfileInput = styled.input`
  display: none;
`;

export const ProfileImageWrapper = styled.div`
  cursor: pointer;
  & > span {
    padding-left: 1em;
    color: ${({ theme }) => theme.palette.main};
    cursor: pointer;
  }
  & > img {
    border: 1px solid ${({ theme }) => theme.palette.line.light};
    border-radius: 50%;
    object-fit: cover;
  }
`;
