import React, { useContext } from 'react';

import { BrowserRouter as Route, Switch, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';

import { Wrapper, Grid, Page, LinkWrapper, PostContainer, PostMedia,
         PostTitle, ContainerPostPreview, PostPreviewMedia, BlogList  } from './styles';

import { content } from "./content";

const transition = { duration: 0.5, ease: "easeInOut" };

const postVariants = {
  initial: { y: 100, opacity: 0 },
  enter: { y: 0, opacity: 1, transition },
  exit: { y: -100, opacity: 0, transition }
};

const Post = ({ match }) => {
  const id = Number(match.params.id);
  const { theme } = useContext(ThemeContext);

  const { title, description, text, imgSrc } = content[id];
  
  return (

    <Page as={motion.div} theme={theme}
      initial="exit"
      animate="enter"
      exit="exit"
      variants={postVariants}
    >
      <LinkWrapper>
      <Link to="/">Back to Home page</Link>
      </LinkWrapper>
      <PostContainer theme={theme}>
        <PostMedia src={imgSrc} alt={title} />
        <PostTitle>{title}</PostTitle>
        <p>{description}</p>
        <p>{text}</p>
      </PostContainer>
    </Page>
        
   
  );
};

const postPreviewVariants = {
  initial: { x: "100%", opacity: 0 },
  enter: { x: 0, opacity: 1, transition },
  exit: { x: "-100%", opacity: 0, transition }
};

const PostPreview = ({ id, title, description, imgSrc }) => {
  return (
    <ContainerPostPreview variants={postPreviewVariants}>
      <PostPreviewMedia src={imgSrc} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <Link to={`/post/${id}`}>Learn more</Link>
      </div>
    </ContainerPostPreview>
  );
};

const blogVariants = {
  enter: { transition: { staggerChildren: 0.1 } },
  exit: { transition: { staggerChildren: 0.1 } }
};

const Blog = () => {
  return (
    <Page as={motion.div}>
      <BlogList
        initial="initial"
        animate="enter"
        exit="exit"
        variants={blogVariants}
      />
        {content.map((post) => (
          <PostPreview key={post.id} {...post} />
        ))}
     
    </Page>
  );
};

export const Projects = () => {
  return (
  <Wrapper as={Container}> 
    <Grid>y
      <Route
        render={({ location }) => (
          <AnimatePresence exitBeforeEnter initial={false}>
            <Switch location={location} key={location.pathname}>
              <Route  path="/" component={Blog} />
              <Route  path="/post/:id" component={Post} />
            </Switch>
          </AnimatePresence>
        )}
      />
    </Grid>
  </Wrapper>
  );
};






