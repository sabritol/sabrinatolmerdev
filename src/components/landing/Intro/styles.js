import styled from "styled-components";
import { keyframes } from "styled-components";
import satelite from "../../../assets/illustrations/nasa.svg";

const animatedNasa = keyframes`
0% {
        background-position: 0 0;
      }
      50% {
        background-position: 0 100%;
      }
      100% {
        background-position: 0 0;
      }

`;

export const Wrapper = styled.div`
  padding-bottom: 4rem;
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;
`;

export const IntroWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  h1 {
    margin-bottom: 1rem;
    margin-top: -1rem;
    font-size: 26pt;
    letter-spacing: 4px;
    color: ${({ theme }) => (theme === "light" ? "#212121" : "#fff")};

    @media (max-width: 960px) {
      margin-top: 8rem;

      mix-blend-mode: ${({ theme }) =>
        theme === "light" ? "unset" : "difference"};
    }

    @media (max-width: 680px) {
      font-size: 17pt;
      margin-bottom: 4rem;
      margin-top: -1rem;
      /* text-align: justify;
      text-justify: inter-word; */
      line-height: 1.8rem;
      text-align: center;
    }
  }

  h3 {
    text-transform: uppercase
    margin-bottom: -1rem;
    font-size: 20pt;
    font-weight: normal;
    color: ${({ theme }) => (theme === "light" ? "#707070" : "#e6e6e6")};

    @media (max-width: 960px) {
      margin-bottom: 4rem;
      mix-blend-mode: ${({ theme }) =>
        theme === "light" ? "unset" : "difference"};
    }

    @media (max-width: 680px) {
      font-size: 21.5pt;
      line-height: 2.3rem;
    }
  }
`;

export const Thumbnail = styled.div`
  flex: 1;
  img {
    position: relative;
    height: auto;
    width: 50%;
  }


  img.satelite-animated {
    animation: ${animatedNasa} 10s ease infinite;
    height: 520px;
    width: 500px;
    margin-top: -100px;
    margin-left: 600px;
    background-image: url(${satelite});
    background-repeat: no-repeat;
    border: none;


  @media (max-width: 960px) {
    width: 140%;
    position: relative;
    margin-top: -5rem;
    margin-left: 1rem;
    height: 300px;
    width: 300px;
  }
`;
