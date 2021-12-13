import styled from "styled-components";

export const CardContainer = styled.section`
  height: 585px;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  padding: 0;
  background: #fff;
  overflow: hidden;
  border-radius: 6px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);

  transition: all 0.25s linear;
  :hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    transform: scale(1.03);
    img {
      filter: none;
    }
  }
`;
export const Media = styled.div`
  img {
    transition: all 0.25s linear;
    width: 100%;
    height: 100%;
    margin: 0;
    filter: grayscale(100%);
  }
`;
export const Header = styled.header`
  padding: 1rem;
  h4 {
    font-size: 16pt;
    font-weight: 700;
    margin-bottom: 0;
  }

  span {
    color: #808080;
  }
`;
export const Content = styled.main`
  padding: 2rem 1rem 1rem;
  // color: #606060;
  font-size: 11pt;
`;
export const Actions = styled.footer`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-top: 1px solid #ddd;
  .links {
    display: flex;
    align-items: center;
    div {
      &:first-child {
        margin-right: 0.5rem;
      }

      img {
        margin: 0;
      }

      span {
        color: #000;
        margin-left: 0.5rem;
      }
    }
  }
`;
export const Meta = styled.div`
  display: flex;
  flex-flow: row no-wrap;
  justify-content: flex-end;
  margin-top: -24px;
  padding: 0 1rem;
`;
export const MetaCapsule = styled.div`
  display: inline-block;
  z-index: 1;
  border-radius: 20px;
  // color: white;
  background-color: white;
  // background-color: #3f3d56;
  margin: 0 0.2rem 0.5rem;
  &:last-child {
    margin-right: 0;
  }
  padding: 0.4rem 0.7rem;
  font-size: 10pt;
  font-weight: 400;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.2);
`;
export const Tags = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: start;
`;

export const TagCapsule = styled.div`
  display: inline-block;
  border-radius: 6px;
  color: white;
  background-color: #5b5b5b;
  padding: 0.4rem;
  font-size: 10pt;
  font-weight: 400;
  margin: 0 5px 0.5rem;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.2);
`;
export const ModalSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  header {
    // border-bottom: 1px solid #ddd;
    h2 {
      font-size: 28pt;
      text-align: center;
    }
  }
  main {
    h3 {
      font-size: 20pt;
    }
    font-size: 12pt;
  }
  footer {
    margin-top: 1rem;
    padding-bottom: 1rem;
    align-self: end;
  }
`;
