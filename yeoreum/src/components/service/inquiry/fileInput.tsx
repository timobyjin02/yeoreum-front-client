import styled from '@emotion/styled';

const FileInput = () => {
  return (
    <Container>
      첨부파일
      <Label htmlFor="file">{/* <Button>업로드</Button> */}</Label>
      <ListBox>..</ListBox>
      <Input type="file" id="file" />
    </Container>
  );
};

const Container = styled.div`
  margin: 20px 0 4px 0;
`;
const Label = styled.label`
  display: inline-block;
  cursor: pointer;
`;
const Input = styled.input`
  display: none;
`;
// const Button = styled.button`
//   width: 3.25em;
//   height: 1.5em;
//   margin: 0.25em;
//   font-size: 0.875em;
//   border-radius: 4px;
//   color: #fff;
//   background-color: ${({ theme }) => theme.palette.serviceBtn};
// `;
const ListBox = styled.div`
  padding: 0.7em;
  background-color: ${({ theme }) => theme.palette.lightGrey};
  border-radius: 5px;
`;
export default FileInput;
