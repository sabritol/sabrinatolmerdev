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

export const Social = styled.div`
  position: relative;
  padding: 3px;
  margin-top: 5rem;
  margin-left: 1px;

  @media (max-width: 680px) {
    left: 10px;
    top: 30rem;
    padding: 1px;
  }
`;

export const IntroWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }

  @media (max-width: 680px) {
    width: 100%;
  }
`;

export const Details = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  a.intro-btn {
    position: absolute;
    top: 90%;
    left: 10%;
  }

  h1 {
    text-transform: uppercase;
    font-size: 200px;
    /* letter-spacing: -2px; */
    font-weight: 990;
    color: #eea3b7;
    /* color: ${({ theme }) => (theme === "light" ? "#43424a" : "#dedaf2")}; */
    /* text-shadow:
      10px 10px 0 #bc4d28,
      10px 10px 0 red; */
    text-shadow:
      4px 4px 0 #ba5b45,
      4.8px 4.8px 0 #000,
      3px 3px 0 #000,
      4.8px 3px 0 #000,
      3px 4.8px 0 #000,
      8px 8px 0 #dbbb83,
      9px 9px #000,
      7px 7px #000,
      7px 9px #000,
      9px 7px #000,
      12px 12px #ece99c,
      13px 13px #000,
      11px 11px #000,
      13px 11px #000,
      11px 13px #000;
    -webkit-text-stroke: 2px black;

    @media (max-width: 680px) {
      /* -webkit-text-stroke: 4px #bf4134; */
      /* color: #bf4134; */
      font-size: 60px;
      margin-bottom: 4rem;
      line-height: 1.8rem;
      text-align: center;
      line-height: 80px;
    }
  }

  h3 {
    margin-bottom: 1rem;
    font-size: 25pt;
    font-weight: normal;
    color: ${({ theme }) => (theme === "light" ? "#707070" : "#e6e6e6")};

    @media (max-width: 960px) {
      margin-bottom: 4rem;
      mix-blend-mode: ${({ theme }) =>
        theme === "light" ? "unset" : "difference"};
    }

    @media (max-width: 680px) {
      font-size: 19pt;
      text-align: left;
      line-height: 2.3rem;
      margin-bottom: 4rem;
      margin-top: -5rem;
      margin-left: 50px;
    }
  }
`;

export const Thumbnail = styled.div`
  flex: 1;

  img.satelite-animated {
    animation: ${animatedNasa} 6s ease infinite;
    height: 405px;
    width: 350px;
    top: 350px;
    margin-left: 50%;
    background-image: url(${satelite});
    background-repeat: no-repeat;
    position: absolute;
    border: none;

    @media (max-width: 960px) {
      max-width: 280px;
      max-height: 200px;
    }

    @media (max-width: 680px) {
      max-width: 50%;
      top: 50%;
      right: 20%;
    }
  }
`;
