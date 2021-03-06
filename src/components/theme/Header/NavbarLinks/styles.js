import styled from "styled-components";

export const Wrapper = styled.div`
  a {
    color: #000;
    text-decoration: none;

    @media (max-width: 960px) {
      color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
    }
  }

  ${({ desktop }) =>
    desktop
      ? `
			align-items: center;
			display: flex;

			@media (max-width: 960px) {
					display: none;
			}

			a {     color: darkgrey;
				    -webkit-text-stroke: 1px #008080;


					margin-right: 1rem;

					&:last-child {
							margin-right: unset;
					}
					&:hover {
						color: lightgray;
						text-shadow: 4px 4px 0 #bf4134;
						-webkit-text-stroke: 1px #008080;
  }
			}
		`
      : `
			padding: 3rem;
			display: flex;
			flex-direction: column;

			a {
					margin-bottom: 1rem;

					&:last-child {
							margin-bottom: unset;
					}
			}
	`}
`;
