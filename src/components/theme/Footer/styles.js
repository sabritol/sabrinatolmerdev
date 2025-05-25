import footerIllustration from "assets/illustrations/footer.svg";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 18rem 2rem 4rem 2rem;
  background-image: url(${footerIllustration});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  box-sizing: border-box;
  width: 100%;

  @media (max-width: 1960px) {
    padding: 14rem 2rem 4rem;
  }

  @media (max-width: 768px) {
    padding: 10rem 1.5rem 3rem;
  }

  @media (max-width: 480px) {
    padding: 8rem 1rem 2rem;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 880px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2rem;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;

  a {
    margin: 0 0.5rem;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.1);
    }

    img {
      margin: 0;
      width: 32px;
      height: 32px;
      object-fit: contain;
    }

    &:first-child,
    &:last-child {
      margin: 0;
    }
  }

  @media (max-width: 680px) {
    gap: 0.75rem;

    a {
      margin: 0 0.25rem;
    }
  }
`;

export const Details = styled.div`
  text-align: left;
  max-width: 600px;
  word-wrap: break-word;
  hyphens: auto;

  h2,
  h4,
  a,
  span {
    color: #e7e4d8;
    line-height: 1.4;
    margin: 0;
  }

  h2 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 3vw, 2.5rem);
  }

  h4 {
    margin: 24px 0 0 0;
    font-size: clamp(1rem, 1.5vw, 1.25rem);
  }

  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 880px) {
    text-align: center;
    margin: 0 auto;

    h4 {
      margin-top: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    h4 {
      margin-top: 1rem;
    }
  }
`;
