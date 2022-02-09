import { useState, useRef } from "react";
import type { NextPage } from "next";
import Head from "../components/Head";
import styles from "../styles/Home.module.scss";
import LookUp from "../components/LookUpTags";
import Post from "../components/Posting";
import clsx from "clsx";
import data from "../data.json";

const Home: NextPage = () => {
  const [input, setInput] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);

  return (
    <>
      <Head title={"Job Postings"} />
      <header className={styles.header}>
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
      </header>

      <main className={styles.main}>
        {data.map((post) => {
          const a = [post.role, post.level, ...post.languages, ...post.tools];

          if (!tags.length) {
            return (
              <Post
                logo={post.logo}
                name={post.company}
                isNew={post.new}
                featured={post.featured}
                position={post.position}
                role={post.role}
                level={post.level}
                timePost={post.postedAt}
                contract={post.contract}
                location={post.location}
                languages={post.languages}
                tools={post.tools}
                list={tags}
                setTags={setTags}
              />
            );
          }

          return (
            a.some((item) => tags.includes(item)) && (
              <Post
                logo={post.logo}
                name={post.company}
                isNew={post.new}
                featured={post.featured}
                position={post.position}
                role={post.role}
                level={post.level}
                timePost={post.postedAt}
                contract={post.contract}
                location={post.location}
                languages={post.languages}
                tools={post.tools}
                list={tags}
                setTags={setTags}
              />
            )
          );
        })}
      </main>
    </>
  );
};

export default Home;
