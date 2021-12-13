import React from 'react'
import { Items } from './styles'
import social from './social.json'

export const SocialLinks = () => (
	<Items>
		{social.map(({ id, name, link, icon }) => (
			<a
				key={id}
				href={link}
				target="_blank"
				rel="noopener noreferrer"
				aria-label={`follow me on ${icon}`}
			>
				<img width="24" src={icon} alt={name} />
			</a>
		))}
	</Items>
)