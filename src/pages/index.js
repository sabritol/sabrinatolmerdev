import React from "react";
import { Layout, Seo } from "components/common";
import {
  Intro,
  Skills,
  Contact,
  Projects,
  Consultancy,
} from "components/landing";

const Home = () => (
  <Layout>
    <Seo />
    <Intro />
    <Projects />
    <Skills />
    <Consultancy />
    <Contact />
  </Layout>
);

export default Home;
