import styled from "@emotion/styled";

export const ImageWrapper = styled.div<{
  size: number;
  shadow: number;
  blur: number;
}>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  margin-left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.background};
  border-radius: 50%;
  box-shadow: ${(props) => `inset ${props.shadow}px ${props.shadow}px
      ${props.blur}px rgba(0, 0, 0, 25%),
    inset -${props.shadow}px -${props.shadow}px ${props.blur}px
      #ffffff;`};
`;

export const Image = styled.img<{ size: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
`;
