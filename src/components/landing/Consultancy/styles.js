import styled from "styled-components";

export const Wrapper = styled.div`
  h2 {
    text-align: center;
    margin-bottom: 0;
  }
`;

export const ConsultancyWrapper = styled.div`
  margin-top: 6rem;
  padding: 4rem 0 0;
  display: flex;
  justify-content: space-between;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const SkillsColumn = styled.div`
  flex: 1;
  height: 512px;
  margin: 0 2.5rem;
  padding: 3rem 2rem;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: start;
  text-align: center;
  // background-color: #612478;
  color: ${({ theme }) => (theme === "light" ? "#212121" : "#fff")};
  border-radius: 50 px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  h3 {
    font-size: 18pt;
  }
  ul {
    margin-left: 0;
    li {
      list-style-type: none;
      font-size: 11pt;
    }
  }
  hr {
    background: hsl(283.9, 80.8%, 40.8%);
    width: 50%;
  }
  .cta {
    margin-top: auto;
  }
  @media (max-width: 960px) {
    padding: 2rem 0;
    width: 100%;
    margin: 0 0 3rem;
  }
`;
export const Details = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  h2 {
    margin-bottom: 2rem;
    font-size: 36pt;
    color: ${({ theme }) => (theme === "light" ? "#212121" : "#fff")};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) =>
        theme === "light" ? "unset" : "difference"};
    }

    @media (max-width: 680px) {
      font-size: 30pt;
    }
  }

  h4 {
    margin-bottom: 2.5rem;
    font-size: 32pt;
    font-weight: normal;
    color: ${({ theme }) => (theme === "light" ? "#707070" : "#e6e6e6")};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) =>
        theme === "light" ? "unset" : "difference"};
    }

    @media (max-width: 680px) {
      font-size: 26pt;
    }
  }
`;

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
  }
`;

export const ProfilePicture = styled.div`
  width: 100;
  height: auto;

  img.profile-pic {
    width: 100%;
    height: auto;
    border-radius: 50%;
    max-width: 220px;
    max-height: 220px;
  }
`;

export const ConsulWrapper = styled.div`
  padding: 4rem 0 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: rgba(84, 87, 160, 0.5);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);

  h2 {
    text-transform: uppercase;
    margin-bottom: 2rem;
    margin-top: 50px;
    left: 7rem;
    font-size: 26pt;
    color: ${({ theme }) => (theme === "dark" ? "#fff" : "#212121")};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) =>
        theme === "light" ? "unset" : "difference"};
    }
  }

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
// export const Profile = styled.div`
//   display: flex;
//   flex-direction: row;
//   height: 100%;
//   width: 100%;
//   top: 5px;
//   width: 100%;
//   display: flex;
//   flex-flow: column;
//   justify-content: column;
//   align-items: flex-start;
//   text-align: center;
//   padding: 3rem 3rem 3rem;
//   border-radius: 6px;

//   background-color: rgba(84, 87, 160, 0.5);
//   box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
//     0 1px 5px 0 rgba(0, 0, 0, 0.12);
//   h4 {
//     margin-bottom: 1rem;
//     color: ${({ theme }) => (theme === "light" ? "#e6e6e6" : "#707070")};
//   }
//   p {
//     font-size: 11pt;
//     margin: 1rem 0 0;
//     line-height: 1.3;
//   }
//   p.has-border {
//     border: solid 1px #a432ce;
//     padding: 0.5rem;
//     border-radius: 6px;
//   }
//   @media (max-width: 960px) {
//     width: 100%;
//   }
// `;
