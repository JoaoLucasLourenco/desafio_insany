import styled from "styled-components";

export const Article = styled.div`
  text-align: left;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  margin: 0 1rem 0 0;
  @media (max-width: 1000px) {
    text-align: center;
    justify-content: center;
  }
  .tag {
    @media (max-width: 1000px) {
      margin: 2rem auto;
    }
    margin: 1.5rem 0;
    display: flex;
    gap: 0.5em;
    padding: 1em;
    border: 1px solid #1d1b38;
    width: 12rem;
    justify-content: center;
    font-size: 0.7rem;
    font-weght: 400;
    text-align: center;
    border-radius: 4rem;
  }
  h1 {
    font-weight: 600;
    font-size: 2.7rem;
  }
  p {
    font-size: 0.9rem;
    font-weight: 400;
  }
  .divider {
    @media (max-width: 1000px) {
      margin: 3rem auto;
    }
    margin: 3rem 0;
  }
  .infoSpan {
    display: flex;
    gap: 3rem;
    @media (max-width: 1000px) {
      flex-direction: column;
    }
    .number {
      font-weight: 600;
      font-size: 2.3rem;
    }
    .info {
      font-size: 0.8rem;
    }
  }
`;
