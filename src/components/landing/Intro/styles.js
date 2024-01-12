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
    margin-bottom: 1rem;
    font-size: 95pt;
    letter-spacing: -2px;
    font-weight: bold;
    color: ${({ theme }) => (theme === "light" ? "#43424a" : "#dedaf2")};
    text-shadow: 10px 10px 0 hsl(180, 100%, 30%);
    -webkit-text-stroke: 5px #5457a0;

    @media (max-width: 960px) {
      margin-top: 8rem;
    }

    @media (max-width: 680px) {
      -webkit-text-stroke: 6px #bf4134;
      font-size: 60px;
      margin-bottom: 4rem;
      margin-top: -3rem;
      line-height: 1.8rem;
      text-align: center;
      margin-left: 11px;
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
    animation: ${animatedNasa} 20s ease infinite;
    height: 405px;
    width: 350px;
    top: 350px;
    margin-left: 50%;
    background-image: url(${satelite});
    background-repeat: no-repeat;
    position: absolute;
    border: none;

    //TODO: change the parameters tobe responsive
    @media (max-width: 960px) {
      width: 140%;
      height: 180px;
    }

    @media (max-width: 680px) {
      width: 42%;
      top: 1rem;
      margin-bottom: 1rem;
      position: relative;
      margin-left: 50px;
    }
  }
`;
