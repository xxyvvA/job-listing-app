import type { NextPage } from "next";
import Image from "next/image";
import Head from "../components/Head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head />
      <div className={styles.container}></div>
    </>
  );
};

export default Home;
