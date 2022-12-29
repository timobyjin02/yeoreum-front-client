import styled from '@emotion/styled';
import Image from 'next/image';

const Search = () => {
  return (
    <Container>
      <Label>
        <Image src="/service/search.svg" width={20} height={20} alt="search" />
        <Input type="text" />
      </Label>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  border: #dbdbdb solid 1px;
  border-radius: 40px;
  padding: 0.4em;
`;
const Label = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: auto 0;
  & > img {
    margin-right: 0.5em;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  color: #181818;
  font-size: 1em;
  :focus {
    outline: 0;
  }
`;

export default Search;
