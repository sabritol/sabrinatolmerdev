import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  padding: 2rem 0;
  background: lightsalmon;
`;

export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const Page = styled(motion.div)`
  margin: 0 auto;
  padding: 48px 24px;
  max-width: 960px;
`;

export const LinkWrapper = styled.div`
  font-weight: bold;
`;

export const PostContainer = styled.div`
  background: snow;
  padding: 24px;
  border-radius: 8px;
`;

export const PostMedia = styled.div`
  max-width: 100%;
  width: 100%;
  height: 480px;
  object-fit: cover;
  margin-bottom: 32px;
`;

export const PostTitle = styled.h1`
  margin-top: 0;
  color: ${({ theme }) => (theme === "light" ? "#212121" : "#fff")};
`;

export const ContainerPostPreview = styled(motion.div)`
  background: snow;
  border-radius: 8px;
  overflow: hidden;
`;

export const PostPreviewMedia = styled.img`
  img {
    max-width: 100%;
    width: 100%;
    height: 320px;
    object-fit: cover;
  }
`;

export const PostPreviewText = styled.div`
  padding: 16px;
  h2 {
    color: ${({ theme }) => (theme === "light" ? "#212121" : "#fff")};
  }

  p {
    color: ${({ theme }) => (theme === "light" ? "#707070" : "#c7c7c7")};
  }
`;

export const BlogList = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 36px;
`;
