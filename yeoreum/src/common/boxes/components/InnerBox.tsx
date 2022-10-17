import styled from '@emotion/styled';

interface Props {
  children: React.ReactNode;
  size: string[];
  shadow: number;
}

function InnerBox({ ...props }: Props) {
  return (
    <>
      <Wrapper {...props}>{props.children}</Wrapper>
    </>
  );
}

export default InnerBox;

const Wrapper = styled.div<{ size: string[]; shadow: number }>`
  width: ${props => props.size[0]};
  height: ${props => props.size[1]};
  ${({ theme }) => theme.common.inner}
  box-shadow: ${({ shadow }) =>
    `inset ${shadow}px ${shadow}px ${
      shadow * 2
    }px #afafb5, -${shadow}px -${shadow}px -${shadow * 2}px #ffffff;`}
`;
