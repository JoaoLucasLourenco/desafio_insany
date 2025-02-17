import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-image: url("bg-footer.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #070514;
  height: 100vh;
  color: #ffffff;
  padding: 3rem 4rem;
  display: flex;
  gap: 4rem;
  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 3rem 1rem;
  }
  .cta {
    display: flex;
    gap: 1em;
    width: 50%;
    flex-direction: column;

    @media (max-width: 1000px) {
      width: 100%;
      text-align: center;
      img {
        margin: 0 auto;
      }
    }
    .texts {
      h1 {
        font-weight: 600;
        font-size: 1.4rem;
      }
      p {
        font-size: 0.9rem;
        color: #cbd6e2;
      }
    }

    .mailForm {
      display: flex;
      padding: 1em;
      background-color: #ffffff;
      border-radius: 6px;
      gap: 1em;
      input {
        border-radius: 6px;
        padding: 1em;
        background-color: #ffffff;
        width: 100%;
      }
      button {
        background-color: #1d63ff;
        padding: 1em;
        color: #ffffff;
        border-radius: 6px;
        width: 50%;
        &:hover {
          opacity: 0.8;
        }
      }
      @media (max-width: 1000px) {
        background-color: transparent;
        flex-direction: column;
        padding: 0;
        input,
        button {
          width: 100%;
        }
      }
    }
  }
`;
