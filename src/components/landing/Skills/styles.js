import styled from "styled-components";
import detailsIllustration from "assets/illustrations/details.svg";

export const Wrapper = styled.div`
  background-image: url(${detailsIllustration});
  background-size: contain;
  background-position: left top;
  background-repeat: no-repeat;
`;

export const SkillsWrapper = styled.div`
  position: relative;
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
  padding-left: 2rem;

  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
  }

  h2 {
    text-transform: uppercase;
    margin-bottom: 2rem;
    margin-top: 50px;
    left: 7rem;
    font-size: 26pt;
    color: #faebd7;
    /* color: ${({ theme }) => (theme === "dark" ? "#fff" : "#212121")}; */

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) =>
        theme === "light" ? "unset" : "difference"};
    }
  }

  p {
    margin-bottom: 2.5rem;
    font-size: 17pt;
    font-weight: normal;
    line-height: 1.3;
    color: ${({ theme }) =>
      theme === "dark" ? "rgb(186, 91, 69)" : "#707070"};

    /* @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) =>
      theme === "light" ? "unset" : "difference"};
    } */
  }
`;

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  img {
    width: 100%;
  }
`;
