import styled from '@emotion/styled';

interface Props {
  [key:string]:any;
}

function InnerBox(props: Props) {
  const {size} = props;
  return (  
    <Wrapper size={size}></Wrapper>
  )
}

export default InnerBox;

const Wrapper = styled.div<{size: number[]}>`
  width: ${(props) => props.size[0]}px;
  height: ${(props) => props.size[1]}px;
  ${({ theme }) => theme.common.inner}
`