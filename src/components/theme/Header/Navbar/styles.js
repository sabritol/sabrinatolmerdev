import styled from "styled-components";
import header from "../../../../assets/illustrations/header.svg";
export const Wrapper = styled.div`
  background-image: url(${header});
  background-size: cover;
  object-fit: cover;
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  min-height: 300px;
  -webkit-background-size: cover;
  background-position: top 0px right 0px bottom -100px;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
`;

export const Brand = styled.a`
  color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};

  @media (max-width: 960px) {
    mix-blend-mode: ${({ theme }) =>
      theme === "light" ? "unset" : "difference"};
  }
`;
