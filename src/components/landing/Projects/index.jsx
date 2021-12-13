import React from 'react'
// import { useStaticQuery, graphql } from 'gatsby'
import { Container, Card } from '../../common'
import { Wrapper, Grid } from './styles'

// Project List
import ProjectList from './projects.json'

export const Projects = () => {
	return (
		<Wrapper as={Container} id="projects">
			<h2>Previous Projects</h2>
			<Grid>
				{ProjectList.map((project) => (
					<Card key={project.id.toString()} project={project} />
				))}
			</Grid>
		</Wrapper>
	)
}


