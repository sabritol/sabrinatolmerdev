import React from "react";
//import ReactModal from 'react-modal'
//import { Button } from 'Common'
// Icons
//import GithubIcon from 'Static/icons/github.svg'
//import LinkIcon from 'Static/icons/link.svg'
import {
  CardContainer,
  Header,
  Media,
  Content,
  TagCapsule,
  Meta,
  MetaCapsule,
} from "./style";

export const Card = ({ title, src, type, year, shortDescription }) => (
  <CardContainer>
    <Header>
      <h4>{title}</h4>
    </Header>
    <Media>
      <img src={src} alt={title} />
      <Meta>
        <MetaCapsule>{type}</MetaCapsule>
        <MetaCapsule>{year}</MetaCapsule>
      </Meta>
    </Media>
    <Content>
      <p>{shortDescription}</p>
      {/* <Tags>
        {map((typeTag, index) => (
          <TagCapsule key={index}>{typeTag}</TagCapsule>
        ))}
      </Tags> */}
    </Content>
  </CardContainer>
);
