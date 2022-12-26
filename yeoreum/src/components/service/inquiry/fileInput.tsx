import styled from '@emotion/styled';

const FileInput = () => {
  return (
    <Container>
      <Label htmlFor="file">첨부파일</Label>
      <ListBox>..</ListBox>
      <Input type="file" id="file" />
    </Container>
  );
};

const Container = styled.div``;
const Label = styled.label`
  display: inline-block;
  margin: 20px 0 4px 0;
  cursor: pointer;
`;
const Input = styled.input`
  display: none;
`;
const ListBox = styled.div`
  padding: 0.7em;
  background-color: #f5f6f7;
  border-radius: 5px;
`;
export default FileInput;
