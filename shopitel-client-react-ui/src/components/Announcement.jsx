import styled from "styled-components";

const Container = styled.div`
  height: 40px;
  background-color: #d5cdd5;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders Over $ 50</Container>;
};

export default Announcement;