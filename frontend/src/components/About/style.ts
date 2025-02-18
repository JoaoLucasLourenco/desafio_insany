import styled from "styled-components";

export const AboutWrapper = styled.div`
  background-color: #ffffff;
  height: 100vh;
  padding: 11rem 4rem;
  font-weight: 400;
  bottom: 6rem;
  position: relative;
  z-index: 0;
  display: flex;
  @media (max-width: 1000px) {
    padding: 11rem 1rem;
    flex-direction: column;
  }

  .aboutTexts {
    width: 50%;
    @media (max-width: 1000px) {
      width: 100%;
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
      width: 40%;
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
      width: 100%;
      p {
        color: #1e1c2d;
        font-size: 0.9rem;
      }
      @media (max-width: 1000px) {
        justify-content: center;
      }
    }
  }
  .aboutImage {
    width: 50%;
    padding: 0 2rem;
    @media (max-width: 1000px) {
      width: 100%;
      padding: 0 1rem;
    }
    .image {
      float: right;
      z-index: 0;
    }
    div {
      width: 50%;
      display: flex;
      flex-direction: column;
      padding: 1rem;
      box-shadow: 0px 20px 30px -10px rgba(76, 74, 94, 0.2);
      border-radius: 6px;
      position: relative;
      bottom: 18rem;
      right: 2rem;
      background-color: #ffffff;
      z-index: 1;

      .texts {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding: 1em 0;
        h1 {
          font-weight: 600;
          font-size: 1.6rem;
          color: #2a2739;
        }
        p {
          font-weight: 400;
          font-size: 1rem;
          color: #4c4a5e;
        }
        .barChart {
          margin: 0.4em 0 0 0;
        }
      }
      @media (max-width: 1000px) {
        bottom: 18rem;
        padding: 0.8rem;
        width: 50%;
      }
      @media (max-width: 700px) {
        width: 80%;
        bottom: 5rem;
      }
      .divider {
        width: 100%;
      }
      .avatares {
        width: 50%;
        padding: 1em 0;
      }
    }
  }
`;
