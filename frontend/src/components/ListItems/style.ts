import styled from "styled-components";

export const Section = styled.section`
  background-color: #ffffff;
  padding: 0 4rem;
  display: flex;
  gap: 1em;
  @media (max-width: 1000px) {
    padding: 0 1rem;
    flex-direction: column;
  }
  span {
    h1 {
      color: #1e1c2d;
    }
    p {
      color: #353345;
    }
  }
`;
