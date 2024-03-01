import styled from "styled-components";

export const Wrapper = styled.div`
  a {
    color: #f2f1e3;
    text-decoration: none;
    font-weight: 900;
    font-size: 24px;
    text-shadow: 2px 2px 0 #bf4134;
    -webkit-text-stroke: 1px #bf4134;
  }

  ${({ desktop }) =>
    desktop
      ? `
			align-items: center;
			display: flex;

			@media (max-width: 960px) {
					display: none;
			}

			a {     
				color: rgb(0, 153, 153) 
			
				    -webkit-text-stroke: 1px #008080;


					 margin-right: 1rem;

					&:last-child {
							margin-right: unset;
					}
					&:hover {
						
						 text-shadow: 4px 4px 0 #bf4134;
						-webkit-text-stroke: 1px #bf4134;
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
