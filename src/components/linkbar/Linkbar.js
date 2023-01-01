import { useState, useEffect } from "react";
import styles from "./Linkbar.module.css";

function Linkbar() {
  const [linkbarScroll, setLinkbarScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setLinkbarScroll(true);
    }

    if (window.scrollY === 0) {
      setLinkbarScroll(false);
    }
  };

  return (
    <div className={linkbarScroll ? styles.div_hide : styles.linkbar_container}>
      <div className={styles.linkbar_links}>
        <ul className={styles.linkbar_list}>
          <li className={styles.linkbar_item}>
            <a href="https://www.instagram.com/b_2.19/">INSTARGRAM</a>
          </li>
          <li className={styles.linkbar_item}>
            <a href="https://www.facebook.com/profile.php?id=100007773606487&sk=about">
              FACEBOOK
            </a>
          </li>
          <li className={styles.linkbar_item}>
            <a href="https://blog.naver.com/qortlgus100">BLOG</a>
          </li>
          <li className={styles.linkbar_item}>
            <a href="https://github.com/baek-si-hyun">GITHUB</a>
          </li>
        </ul>
      </div>
      <div className={styles.linkbar_guide}>
        <p>
          <span className={styles.linkbar_guide_text}>
            SCROLL TO BEGIN YOUR JOURNEY
          </span>
          <span className={styles.linkbar_guide_arrow}>↓</span>
        </p>
      </div>
    </div>
  );
}
export default Linkbar;
