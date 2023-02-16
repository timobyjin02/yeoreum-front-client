import styled from '@emotion/styled';

function ScrollTopButton() {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <ScrollTopWrapper onClick={scrollTop}>
      <Arrow />
    </ScrollTopWrapper>
  );
}

export default ScrollTopButton;

const ScrollTopWrapper = styled.div`
  width: 50px;
  height: 50px;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #999;
  border-radius: 50%;
  bottom: 12px;
  right: 12px;
  background-color: #fff;
  cursor: pointer;
  @media (min-width: 641px) {
    display: none;
  }
`;

const Arrow = styled.div`
  width: 16px;
  height: 16px;
  border-top: 3px solid #333;
  border-right: 3px solid #333;
  transform: rotate(-45deg);
  margin-top: 8px;
`;
