import type { NextPage } from "next";
import Hero from "../components/Hero";
import Terminal from "../components/Terminal";
import Projects from "../components/Projects";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Terminal />
      <Projects />
    </Layout>
  );
};

export default Home;
