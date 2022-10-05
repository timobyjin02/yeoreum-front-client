import styled from '@emotion/styled';

interface Props {
  [key:string]:any;
}

function OuterBox(props: Props) {
  const {size} = props;
  return (  
    <Wrapper size={size}></Wrapper>
  )
}

export default OuterBox;

const Wrapper = styled.div<{size: number[]}>`
  width: ${(props) => props.size[0]}px;
  height: ${(props) => props.size[1]}px;
  ${({ theme }) => theme.common.outer}
  /* border: 1px solid #BAC1D3; */
  /* box-shadow: -5px -5px 6px #FFFFFF, 5px 5px 6px rgba(63, 63, 143, 0.25); */
`