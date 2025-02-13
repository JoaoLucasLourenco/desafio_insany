import styled from "styled-components";

export const AboutWrapper = styled.main`
  background-color: #ffffff;
  height: 100vh;
  padding: 11rem 4rem;
  font-weight: 400;
  bottom: 6rem;
  position: relative;
  z-index: 0;
  display: flex;
  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 11rem 1rem;
  }
  .cta {
    h1 {
      color: #070514;
      font-weight: 600;
      font-size: 2.2rem;
    }
    p {
      color: #353345;
      font-size: 0.9rem;
    }
  }
  .verified {
    padding: 3rem 0;
    display: flex;
    flex-direction: column;
    gap: 1.2em;
    span {
      display: flex;
      gap: 1.5em;
      align-items: center;
      p {
        color: #413e52;
        font-size: 0.9rem;
      }
    }
  }
  button {
    background-color: #1d63ff;
    padding: 1em;
    color: #ffffff;
    border-radius: 6px;
    font-size: 1em;
    width: 30%;
    &:hover {
      opacity: 0.8;
    }
    @media (max-width: 1000px) {
      width: 100%;
    }
  }
  .contactUs {
    display: flex;
    gap: 1em;
    align-items: center;
    padding: 2em 0;
    p {
      color: #1e1c2d;
      font-size: 0.9rem;
    }
  }
`;
