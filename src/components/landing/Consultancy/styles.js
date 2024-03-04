import styled from "styled-components";

export const Wrapper = styled.div`
  h2 {
    text-align: center;
    margin-bottom: 0;
  }
`;

export const ConsultancyWrapper = styled.div`
  align-items: center;
  min-height: auto;
  align-items: center;

  @media (max-width: 960px) {
    flex-direction: column;
    margin-top: 1rem;
    padding: 4rem 0;
  }
`;

export const TextWrapper = styled.div`
  padding: 40px;
  border-radius: 10px;
  margin-top: 4%;
  box-sizing: border-box;
  border: 2px solid black;
  width: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  background: rgba(238, 163, 183, 0.5);
  box-shadow:
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

  h2 {
    text-transform: uppercase;
    margin-bottom: 2rem;
    margin-top: 50px;
    left: 7rem;
    font-size: 26pt;
    color: ${({ theme }) => (theme === "dark" ? "red" : "#212121")};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) =>
        theme === "light" ? "unset" : "difference"};
    }
  }

  /* p {
    margin-bottom: 2.5rem;
    font-size: 17pt;
    font-weight: normal;
    line-height: 1.3;
    color: ${({ theme }) => (theme === "dark" ? "#c7c7c7" : "#707070")};
  } */
`;

export const Paragraph = styled.p`
  font-size: 17pt;
  font-weight: normal;
  line-height: 1.3;
  color: #faebd7;
  /* color: ${({ theme }) => (theme === "dark" ? "#c7c7c7" : "#707070")}; */
  @media (max-width: 960px) {
    mix-blend-mode: ${({ theme }) =>
      theme === "light" ? "unset" : "difference"};
  }
`;
