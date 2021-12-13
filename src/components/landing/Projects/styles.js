import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 2rem 0;
`;

export const Grid = styled.div`
  display: grid;
  align-items: flex-start;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 8fr;
  gap: 1.5rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

// export const PostPreviewText = styled.div`
//   padding: 16px;
//   h2 {
//     color: ${({ theme }) => (theme === "light" ? "#212121" : "#fff")};
//   }

//   p {
//     color: ${({ theme }) => (theme === "light" ? "#707070" : "#c7c7c7")};
//   }
// `;
