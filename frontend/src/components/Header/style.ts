import styled from "styled-components";

export const Header = styled.header`
  background-color: #070514;
  padding: 2rem 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  ul {
    display: none;
  }
  .desktop {
    display: flex;
    gap: 32px;
    align-items: center;
    justify-content: between;
    button {
      padding: 11px 24px;
      border-radius: 6px;
      background-color: #ffffff;
      color: #0d0b1a;
      margin-left: 2em;
      &:hover {
        background-color: #cbd6e2;
      }
    }
  }
  .btnMobile {
    display: none;
  }
  .logo {
    img {
      width: 131px;
      height: 19px;
      object-fit: cover;
    }
  }

  .mobile {
    @media (min-width: 1000px) {
      display: None;
    }
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 0;
    background-color: #353345;
    width: 100%;
    padding: 1em;
    gap: 6px;
    button {
      padding: 0.5em 0;
      margin: 10px 0;
      border-radius: 6px;
      background-color: #ffffff;
      color: #0d0b1a;
      width: 100%;
      &:hover {
        background-color: #cbd6e2;
      }
    }
  }
  @media (max-width: 999px) {
    .btnMobile {
      display: block;
    }
    .desktop {
      display: none;
    }
  }
`;
