import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  border-radius: 6px;
  font-weight: 400;
  ghost-button {
    display: inline-block;
    width: 200px;
    padding: 8px;
    color: #fff;
    border: 1px solid #5457a0;
    text-align: center;
    outline: none;
    text-decoration: none;
  }
  transition:
    box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1),
    transform 0.2s cubic-bezier(0.4, 0, 1, 1);
  :hover {
    transform: scale(1.03);
    background-color: #bf4134;
    box-sizing: border-box 2px #5457a0;
    color: lightgray;
  }
  padding: 0.7rem 2.5rem;
  border: none;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: white;
  background: #eea3b7;
  /* &:focus {
    outline: none;
  } */

  &:disabled {
    background: gray;
  }
`;

// export const Button = styled.button`
//   cursor: pointer;
//   border-radius: 3px;
//   padding: 0.7rem 2.5rem;
//   border: none;
//   -webkit-appearance: none;
//   -webkit-touch-callout: none;
//   -webkit-user-select: none;
//   -khtml-user-select: none;
//   -moz-user-select: none;
//   -ms-user-select: none;
//   user-select: none;
//   color: #fff;
//   background: #5457a0;

//   &:focus {
//     outline: none;
//   }

//   &:disabled {
//     background: gray;
//   }

//   ${({ secondary }) =>
//     secondary &&
//     `
// 		background: #5457a0;
// 	`}
// `;
