import styled from "styled-components";

export const FormWrapper = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  color: #0d0b1a;
  border-radius: 6px;
  max-width: 40%;
  max-height: 130%;
  box-shadow: 0px 30px 50px -10px rgba(76, 74, 94, 0.2);
  z-index: 1;
  @media (max-width: 1000px) {
    max-width: 100%;
  }
  .divider {
    width: 100%;
  }
  .cta {
    margin: 1em 0;
    font-weght: 600;
    p {
      color: #757385;
      font-size: 0.8rem;
      margin: 0.8em 0;
    }
    h1 {
      font-size: 1.2rem;
    }
  }
  .isEmpresa {
    display: flex;
    gap: 2em;
    @media (max-width: 1000px) {
      flex-direction: column;
      label {
        display: flex;
        align-items: center;
        input {
          margin: 0;
        }
      }
    }
    label {
      padding: 1em 1em 1em 0;
      display: flex;
      align-items: center;
      input {
        margin: 0 0.5em 0 0;
      }
    }
  }
  .isEmpresa input[type="radio"] {
    appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid #1d63ff; /* Borda azul */
    border-radius: 50%;
    display: inline-block;
    position: relative;
    cursor: pointer;
  }

  .isEmpresa input[type="radio"]:checked {
    background-color: white;
  }

  .isEmpresa input[type="radio"]:checked::before {
    content: "";
    width: 10px;
    height: 10px;
    background-color: #1d63ff;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  form {
    input {
      padding: 1em;
      background-color: #f2f5fc;
      border-radius: 6px;
      outline: none;
      &:focus {
        background-color: #ffffff;
        border: 1px solid rgba(29, 99, 255, 0.2); /* #1D63FF com 20% de opacidade */
        box-shadow: 0 0 5px rgba(29, 99, 255, 0.2);
      }
    }
    button {
      background-color: #1d63ff;
      padding: 1em;
      color: #ffffff;
      border-radius: 6px;
      &:hover {
        opacity: 0.8;
      }
    }
  }

  .privacy {
    display: flex;
    width: 90%;
    color: #757385;
    font-size: 0.8rem;
    margin: 2.5em 0;
    .link {
      text-decoration: underline;
    }
  }
  .safety {
    display: flex;
    padding: 2em 0 0 0;
    gap: 1em;
    align-items: center;
    font-size: 0.9rem;
    color: #1e1c2d;
  }
`;
