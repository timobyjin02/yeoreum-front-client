import styled from '@emotion/styled';

interface Props {
  children: React.ReactNode;
  size: string[];
  shadow: number;
}

function OuterBox({ ...props }: Props) {
  return (
    <>
      <Wrapper {...props}>{props.children}</Wrapper>
    </>
  );
}

export default OuterBox;

const Wrapper = styled.div<{ size: string[]; shadow: number }>`
  width: ${props => props.size[0]};
  height: ${props => props.size[1]};
  ${({ theme }) => theme.common.outer}
  box-shadow: ${({ shadow }) =>
    `${shadow}px ${shadow}px ${
      shadow * 2
    }px #afafb5, -${shadow}px -${shadow}px ${shadow}px #ffffff;`}
`;
