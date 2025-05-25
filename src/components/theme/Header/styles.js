import styled from "styled-components";

export const Wrapper = styled.div`
  background: rgba(103, 156, 199, 0.5);

  width: 100%;
`;

export const Overlay = styled.div`
  position: fixed;
  background: rgb(245, 225, 233, 0.6);
  width: 100%;
  height: 100%;
  display: none;
  transition: 0.4s;

  ${({ sidebar }) =>
    sidebar &&
    `
			display: block;
			z-index: 4;	
	`}
`;
