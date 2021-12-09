import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import "./styles.css";

import { content } from "./content";

const transition = { duration: 0.5, ease: "easeInOut" };

const postVariants = {
  initial: { y: 100, opacity: 0 },
  enter: { y: 0, opacity: 1, transition },
  exit: { y: -100, opacity: 0, transition },
};

const Post = ({ match }) => {
  const id = Number(match.params.id);

  const { title, description, text, imgSrc } = content[id];

  return (
    <motion.div
      className="page"
      initial="exit"
      animate="enter"
      exit="exit"
      variants={postVariants}
    >
      <div className="link-wrapper">
        <Link to="/">Back to Home page</Link>
      </div>
      <div className="post">
        <img className="post__img" src={imgSrc} alt={title} />
        <h1 className="heading">{title}</h1>
        <p>{description}</p>
        <p>{text}</p>
      </div>
    </motion.div>
  );
};

const postPreviewVariants = {
  initial: { x: "100%", opacity: 0 },
  enter: { x: 0, opacity: 1, transition },
  exit: { x: "-100%", opacity: 0, transition },
};

const PostPreview = ({ id, title, description, imgSrc }) => {
  return (
    <motion.div className="post-preview" variants={postPreviewVariants}>
      <img className="post-preview__img" src={imgSrc} alt={title} />
      <div className="post-preview__text">
        <h2 className="heading">{title}</h2>
        <p>{description}</p>
        <Link to={`/post/${id}`}>Learn more</Link>
      </div>
    </motion.div>
  );
};

const blogVariants = {
  enter: { transition: { staggerChildren: 0.1 } },
  exit: { transition: { staggerChildren: 0.1 } },
};

const Blog = () => {
  return (
    <div className="page">
      <motion.div
        className="blog-list"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={blogVariants}
      >
        {content.map((post) => (
          <PostPreview key={post.id} {...post} />
        ))}
      </motion.div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Route
        render={({ location }) => (
          <AnimatePresence exitBeforeEnter initial={false}>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={Blog} />
              <Route exact path="/post/:id" component={Post} />
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
  );
}
