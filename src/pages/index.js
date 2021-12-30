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
    <Consultancy />
    <Skills />
    <Projects />
    <Contact />
  </Layout>
);

export default Home;
