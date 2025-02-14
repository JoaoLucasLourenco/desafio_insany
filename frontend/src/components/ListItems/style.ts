import styled from "styled-components";

export const Section = styled.section`
  background-color: #ffffff;
  padding: 0 4rem;
  display: flex;
  gap: 1em;
  @media (max-width: 1000px) {
    padding: 0 1rem;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    img {
      margin: 0 auto;
    }
  }
  span {
    h1 {
      color: #1e1c2d;
      font-weight: 600;
      font-size: 1.5rem;
      padding: 0.5em 0;
    }
    p {
      color: #353345;
      font-weight: 400;
      font-size: 0.9rem;
    }
  }
  .vazio {
    min-height: 40vh;
    @media (max-width: 1000px) {
      min-height: 100vh;
    }
  }
`;
