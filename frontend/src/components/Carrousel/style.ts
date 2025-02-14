import styled from "styled-components";

export const Section = styled.section`
  background-color: #f2f5fc;
  height: 100%;
  padding: 5rem 4rem;
  @media (max-width: 1000px) {
    text-align: center;
    padding: 5rem 1rem;
  }
  .textoPrincipal {
    h1 {
      font-weight: 600;
      font-size: 2.2rem;
      color: #0d0b1a;
    }
    p {
      font-weight: 600;
      color: #1d63ff;
      font-size: 0.9rem;
    }
  }
  .posts {
    .setasNav {
      float: right;
      padding: 1em;
      display: flex;
      gap: 2em;
      color: #1d63ff;
      span {
        cursor: pointer;
        font-size: 2rem;
        &:hover {
          color: #2e7aff;
          font-size: 2.2rem;
        }
      }
      @media (max-width: 1000px) {
        float: none;
        justify-content: space-between;
      }
    }
  }
  .postWrapper {
    position: relative;
    overflow: hidden;
    width: 100%;
    text-align: left;
    .postList {
      display: flex;
      transition: transform 500ms ease-in-out;
      gap: 2rem;
      .post {
        a {
          .descPost {
            width: 80%;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        }
      }
    }
  }
`;
