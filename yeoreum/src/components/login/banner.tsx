import styled from '@emotion/styled';

const Banner = () => <Container></Container>;

const Container = styled.div`
  width: 50%;
  background: #eeeeee;
  @media (max-width: 339px) {
    display: none;
  }
`;

export default Banner;
