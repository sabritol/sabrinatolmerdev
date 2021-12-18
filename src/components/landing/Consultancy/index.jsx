import React, { useContext } from 'react'
// import { PDFDownloadLink } from '@react-pdf/renderer';
// import AnchorLink from 'react-anchor-link-smooth-scroll'
import { ThemeContext } from 'providers/ThemeProvider';
import { Button, Container, SocialLinks } from 'components/common';
import Sabrina from '../../../assets/illustrations/sabrina.jpeg'

import { Wrapper, ConsultancyWrapper, Details, Profile, ProfilePicture } from './styles'

export const Consultancy = () => {
    const { theme } = useContext(ThemeContext);

    return ( 
	<Wrapper id="consultancy">
		<ConsultancyWrapper as={Container}>
         {/* <Thumbnail>
        </Thumbnail>    */}
        <Profile theme={theme} style={{alingItems:"center"}}>
		<h2>I can help you with</h2>
				<ProfilePicture>
					<img className='profile-pic' src={Sabrina} alt="Wayra Full-stack Developer Creative Technologist" />
				</ProfilePicture>
				<SocialLinks/>
				<h4>Learn more and</h4>
				{/* <SocialLinks /> */}
				{/* <p>Founder @ <br /><a href="https://humanbeyondlabs.com/" target='_blank'>Human Beyond Labs</a> & <a href="https://consciousgeekstuff.com/" target='_blank'>Conscious Geek Stuff</a></p> */}
				{/* <p className="has-border">Available for <AnchorLink href="#contact">hire</AnchorLink></p> */}
        <Button>
            <a href='resume.pdf'> Dowload my resume</a>
        </Button>
        <Details >
        <h2>I can help you with</h2>

        </Details>
			</Profile>
		</ConsultancyWrapper>
	</Wrapper>
);
};