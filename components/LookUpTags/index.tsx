import { FC } from "react";
import styles from "./index.module.scss";

interface props {
  tag: string;
  setTags?: () => void;
}

const LookUp: FC<props> = ({ tag, setTags }) => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <p className={styles.tag}>{tag}</p>
      </div>

      <button className={styles.close} onClick={setTags}>
        <img src="/img/close.svg" />
      </button>
    </div>
  );
};

export default LookUp;
