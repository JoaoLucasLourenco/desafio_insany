import styled from "styled-components";

export const Section = styled.section`
  background-image: url("maskGroup.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #070514;
  background-position: center;
  padding: 3rem 4rem;
  display: flex;
  gap: 4rem;
  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 3rem 1rem;
  }
`;
