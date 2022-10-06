import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: ${({ theme }) => theme.palette.background};
`;

export const Container = styled.div`
  width: 222px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.background};
  box-shadow: 10px 0px 10px #d4d5dc;
`;

export const Logo = styled.div`
  background-color: aqua;
  width: 30px;
  height: 30px;
  margin-top: 49px;
  margin-bottom: 80px;
`;

export const Main = styled.div`
  /* display: flex; */
`;

export const IconStyle = styled(FontAwesomeIcon)`
 margin-right: 18px;
`;

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  margin-top: 190px;
`;

export const Text = styled.div`
  margin-left: -7px;
  font-size: 15px;
  color: #32344B;
`;