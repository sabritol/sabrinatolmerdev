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

// columnas codigo
// export const SkillsColumn = styled.div`
//   flex: 1;
//   height: 512px;
//   margin: 0 2.5rem;
//   /* padding: 3rem 2rem; */
//   display: flex;
//   flex-flow: column;
//   align-items: center;
//   justify-content: start;
//   text-align: center;
//   // background-color: #612478;
//   color: ${({ theme }) => (theme === "light" ? "#212121" : "#fff")};
//   border-radius: 50 px;
//   box-shadow:
//     0 2px 2px 0 rgba(0, 0, 0, 0.14),
//     0 3px 1px -2px rgba(0, 0, 0, 0.2),
//     0 1px 5px 0 rgba(0, 0, 0, 0.12);
//   h3 {
//     font-size: 18pt;
//   }
//   ul {
//     margin-left: 0;
//     li {
//       list-style-type: none;
//       font-size: 11pt;
//     }
//   }
//   hr {
//     background: hsl(283.9, 80.8%, 40.8%);
//     width: 50%;
//   }
//   .cta {
//     margin-top: auto;
//   }
//   @media (max-width: 960px) {
//     padding: 2rem 0;
//     width: 100%;
//     margin: 0 0 3rem;
//   }
// `;
// export const Details = styled.div`
//   flex: 1;

//   @media (max-width: 960px) {
//     width: 100%;
//     margin-bottom: 2rem;
//   }

//   h2 {
//     margin-bottom: 2rem;
//     font-size: 36pt;
//     color: ${({ theme }) => (theme === "light" ? "#707070" : "#e6e6e6")};

//     @media (max-width: 960px) {
//       mix-blend-mode: ${({ theme }) =>
//         theme === "light" ? "unset" : "difference"};
//     }

//     @media (max-width: 680px) {
//       font-size: 30pt;
//     }
//   }

//   h4 {
//     margin-bottom: 2.5rem;
//     font-size: 32pt;
//     font-weight: normal;
//     color: ${({ theme }) => (theme === "light" ? "#707070" : "#e6e6e6")};

//     @media (max-width: 960px) {
//       mix-blend-mode: ${({ theme }) =>
//         theme === "light" ? "unset" : "difference"};
//     }

//     @media (max-width: 680px) {
//       font-size: 26pt;
//     }
//   }
// `;

// export const Thumbnail = styled.div`
//   flex: 1;

//   @media (max-width: 960px) {
//     width: 100%;
//   }
// `;

// export const ProfilePicture = styled.div`
//   width: 100;
//   height: auto;

//   img.profile-pic {
//     width: 100%;
//     height: auto;
//     border-radius: 50%;
//     max-width: 220px;
//     max-height: 220px;
//   }
// `;

export const TextWrapper = styled.div`
  border-radius: 10px;
  margin-top: 4%;
  box-sizing: border-box;
  border: 2px solid black;
  width: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  background-color: rgba(238, 163, 183, 0.5);
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

  p {
    color: ${({ theme }) => (theme === "dark" ? "#fff" : "#212121")};
  }
  h2 {
    text-transform: uppercase;
    font-size: 20pt;
    color: ${({ theme }) => (theme === "dark" ? "#fff" : "#212121")};
  }
`;
