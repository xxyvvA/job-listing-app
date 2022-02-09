import { Dispatch, FC, SetStateAction, useRef } from "react";
import styles from "./index.module.scss";

interface props {
  logo: string;
  name: string;
  isNew: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  timePost: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
  list: string[];
  setTags: Dispatch<SetStateAction<string[]>>;
}

const Post: FC<props> = ({
  logo,
  name,
  isNew,
  featured,
  position,
  role,
  level,
  timePost,
  contract,
  location,
  languages,
  tools,
  list,
  setTags,
}) => {
  const tags = useRef([role, level, ...languages, ...tools]);

  return (
    <div className={styles.container}>
      <img src={logo} className={styles.logo} />

      <div className={styles.information}>
        <div className={styles.sensitive}>
          <p className={styles.name}>{name}</p>
          <div className={styles.extra}>
            {isNew && (
              <div className={styles.new}>
                <p>NEW!</p>
              </div>
            )}

            {featured && (
              <div className={styles.featured}>
                <p>FEATURED</p>
              </div>
            )}
          </div>
        </div>

        <p className={styles.position}>{position}</p>

        <p className={styles.postInfo}>
          {timePost} &#8226; {contract} &#8226; {location}
        </p>
      </div>

      <div className={styles.tags}>
        {tags.current.map((item) => {
          return (
            <button
              key={item}
              className={styles.text}
              onClick={() => {
                if (!list.includes(item)) {
                  setTags([...list, item]);
                }
              }}
            >
              <p>{item}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Post;
