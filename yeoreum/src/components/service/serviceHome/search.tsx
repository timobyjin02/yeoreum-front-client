import styled from '@emotion/styled';

export default function Search() {
  return (
    <Container>
      <Input placeholder="검색해보세요" />
      <ImageWrap>w</ImageWrap>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 3em;
  width: 90%;
  margin: 2em 0 0.8em;
  background-color: #f5f6f7;
  border-radius: 8px;
`;

const ImageWrap = styled.div`
  width: 6%;
`;

const Input = styled.input`
  width: 94%;
  height: 100%;
  padding: 0 1em;
  border: none;
  border-radius: 8px;
  background-color: #f5f6f7;
`;
