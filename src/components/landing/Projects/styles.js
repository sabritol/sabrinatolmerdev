import styled from "styled-components";

export const Actions = styled.div;
export const Wrapper = styled.div`
  padding: 2rem 0;
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
  h2 {
    text-transform: uppercase;
    margin-top: 2rem;
    font-size: 26pt;
    margin-left: 50px;
    padding: 3px;
    color: ${({ theme }) => (theme === "dark" ? "#fff" : "#212121")};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) =>
        theme === "light" ? "unset" : "difference"};
    }
  }
`;
