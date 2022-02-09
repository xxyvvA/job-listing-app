import { useState } from "react";
import type { NextPage } from "next";
import Head from "../components/Head";
import styles from "../styles/Home.module.scss";
import LookUp from "../components/LookUpTags";
import clsx from "clsx";
import data from "../data.json";

const Home: NextPage = () => {
  const [input, setInput] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);

  return (
    <>
      <Head />
      <div className={styles.container}>
        <div className={clsx(styles.searchBar, tags.length > 0 && styles.active)}>
          <div className={styles.input}>
            <input
              type="text"
              placeholder="Insert Tags"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  setTags([...tags, input]);
                  setInput("");
                }
              }}
            />
            <button className={styles.clear} onClick={() => setTags([])}>
              Clear
            </button>
          </div>
          <div className={styles.tags}>
            {tags.map((tag) => {
              return (
                <LookUp tag={tag} setTags={() => setTags(tags.filter((item) => item !== tag))} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
