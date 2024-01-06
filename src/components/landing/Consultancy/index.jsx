import React from "react";
// import { PDFDownloadLink } from '@react-pdf/renderer';
// import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container } from "components/common";
// import Sabrina from "../../../assets/illustrations/sabrina.jpeg";

import {
  Wrapper,
  ConsultancyWrapper,
  ConsulWrapper,
  // ProfilePicture,
  // SkillsColumn,
} from "./styles";

export const Consultancy = () => {
  return (
    <Wrapper id='consultancy'>
      <ConsultancyWrapper as={Container}>
        {/* <ConsulWrapper> */}
        {/* <ProfilePicture>
            <img
              className='profile-pic'
              src={Sabrina}
              alt='Wayra Full-stack Developer Creative Technologist'
            />
          </ProfilePicture>
          <SocialLinks />
          <Button>
            <a href='resume.pdf'> Dowload my resume</a>
          </Button> */}
        {/* <SkillsColumn>
		<h3>I can help you and your team</h3>
		
		</SkillsColumn>

		<SkillsColumn>
				<h3>Software Development</h3>
				<p>I can deliver solutions in the shape of:</p>
				<hr />
				<ul>
					<li>Websites</li>
					<li>eCommerce</li>
					<li>Web Apps</li>
					<li>Game Apps</li>
					<li>Unity 3D</li>
					<li>Data Collection & Analysis Tools</li>
				</ul>	
			</SkillsColumn> */}
        {/* <SkillsColumn>
				<h3>Creative Consultancy</h3>
				<p>I can work with you and your team on:</p>
				<hr />
				<ul>
					<li>Adopting best practices for agile development</li>
					<li>Transitioning into a data-driven culture</li>
					<li>Designing Big Data pipelines</li>
					<li>Assessing technical feasibility & scalability</li>
				</ul>
			</SkillsColumn> */}
        {/* </ConsulWrapper> */}
      </ConsultancyWrapper>
    </Wrapper>
  );
};
