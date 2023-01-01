import styles from "./Header.module.css";
import stylesProject from "../main/Project.module.css";
import stylesAbout from "../main/About.module.css";
import stylesContact from "../main/Contact.module.css";
import Linkbar from "../linkbar/Linkbar";
import { useState, useEffect } from "react";
import "../../font/font.css";

function Header({ headerSwitchHandler, onOffBtn }) {
  // loading page
  // const [loading, setLoading] = useState(true);
  // const mainApi = () => {
  //   setLoading(false);
  // };
  // useEffect(() => {
  //   mainApi();
  // }, []);

  //header animation
  const [titleScroll1, setTitieScroll1] = useState(false);
  const [titleScroll2, setTitieScroll2] = useState(false);
  const [titleScroll3, setTitieScroll3] = useState(false);
  const [titleScroll4, setTitieScroll4] = useState(false);
  const [senterScroll, setSenterScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY >= 500) {
      setTitieScroll1(true);
    }
    if (window.scrollY >= 350) {
      setTitieScroll2(true);
    }
    if (window.scrollY >= 200) {
      setTitieScroll3(true);
      setTitieScroll4(true);
    }
    if (window.scrollY >= 800) {
      setSenterScroll(true);
    }
    if (window.scrollY >= 1900) {
      setSenterScroll(false);
    }
    if (window.scrollY === 0) {
      setTitieScroll1(false);
      setTitieScroll2(false);
      setTitieScroll3(false);
      setTitieScroll4(false);
      setSenterScroll(false);
    }
  };

  //buger menu
  const [resize, setResize] = useState();

  const handleResize = () => {
    setResize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //menu click switch
  const [menuSwitch, setMenuSwitch] = useState(false);

  //nav move scroll
  const moveToOffsetTop = (e) => {
    const header = document.querySelector(
      `.${styles.header_container}`
    ).offsetTop;
    const project = document.querySelector(
      `.${stylesProject.project_container}`
    ).offsetTop;
    const about = document.querySelector(
      `.${stylesAbout.about_container}`
    ).offsetTop;
    const contact = document.querySelector(
      `.${stylesContact.contact_container}`
    ).offsetTop;

    if (e.target.id === "logo_svg" || e.target.id === "logo_path") {
      window.scrollTo({ top: header, behavior: "smooth" });
    }
    if (e.target.className === "projectNav") {
      window.scrollTo({ top: project, behavior: "smooth" });
    }
    if (e.target.className === "aboutNav") {
      window.scrollTo({
        top: about,
        behavior: "smooth",
      });
    }
    if (e.target.className === "contactNav") {
      window.scrollTo({ top: contact, behavior: "smooth" });
    }
  };

  return (
    <header className={styles.header_container}>
      <div className={styles.header_top_container}>
        <div className={styles.logo_box}>
          <svg
            className={styles.logo}
            id="logo_svg"
            onClick={moveToOffsetTop}
            width="50"
            height="50"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="logo_path"
              d="M4 53C4.7937 53 24 53 23.8895 28.5M23.9922 6.92509C23.9939 6.61877 23.9947 6.31041 23.9946 6C23.9964 5.669 23.9974 5.33568 23.9973 5C23.9991 4.66896 24 4.33563 24 4L23.8895 28.5M23.9922 6.92509C23.9923 7.28622 23.9912 7.64451 23.9889 8C23.989 8.33583 23.988 8.66916 23.986 9C23.9861 9.33589 23.9851 9.66922 23.983 10C23.9832 10.336 23.9821 10.6693 23.98 11C23.9801 11.336 23.9791 11.6693 23.9768 12C23.977 12.3361 23.9759 12.6694 23.9735 13C23.9738 13.3362 23.9726 13.6695 23.9702 14C23.9704 14.3362 23.9693 14.6695 23.9667 15C23.967 15.3363 23.9658 15.6696 23.9631 16C23.9635 16.3364 23.9622 16.6697 23.9594 17C23.9598 17.3365 23.9585 17.6698 23.9556 18C23.956 18.3366 23.9547 18.6699 23.9516 19C23.9521 19.3367 23.9507 19.67 23.9474 20C23.948 20.3368 23.9465 20.6701 23.9431 21C23.9437 21.3369 23.9421 21.6702 23.9385 22C23.9392 22.337 23.9376 22.6703 23.9338 23C23.9342 23.3371 23.9322 23.6704 23.9278 24C23.9286 24.3372 23.9269 24.6706 23.9226 25C23.9235 25.3374 23.9217 25.6707 23.9171 26C23.9174 26.1166 23.9174 26.2326 23.9171 26.3482M23.9922 6.92509C19 6.5 12 9 12 17C12 20.9397 14.6599 25 19 26.4089C19.6471 26.6189 20.3171 26.7494 21 26.7859M23.8895 28.5C23.9039 28.0099 23.9112 27.5099 23.9112 27C23.9144 26.7845 23.9164 26.5673 23.9171 26.3482M23.9171 26.3482C22.9378 26.7043 21.9562 26.8372 21 26.7859M21 26.7859H40M40 26.7859V4V53M40 26.7859C51 27 53.1063 35.4848 52.9963 39.242M40 26.7859C44.5 26.7859 51 22.5 51 16C51 9.5 46 6.92509 41 6.92509M40 56V53M40 53C50.2694 53.978 52.8863 42.9991 52.9963 39.242M53 39C53 39.0769 52.9988 39.1576 52.9963 39.242"
              strokeWidth="6"
            />
          </svg>
        </div>
        <div className={styles.header_center}>
          {senterScroll && (
            <div
              className={`${styles.change_div_container} ${
                menuSwitch ? styles.change_color2 : styles.change_color1
              }`}
            >
              <div
                className={`${styles.active_box} ${
                  onOffBtn === 0 ? styles.left : styles.right
                }`}
              ></div>
              <button
                className={`${styles.change_btns} ${
                  onOffBtn === 0
                    ? `${
                        menuSwitch ? styles.change_btn_2 : styles.change_btn_1
                      }`
                    : styles.change_btn
                }`}
                onClick={() => {
                  headerSwitchHandler(0);
                }}
              >
                project
              </button>
              <button
                className={`${styles.change_btns} ${
                  onOffBtn === 0
                    ? styles.change_btn
                    : `${
                        menuSwitch ? styles.change_btn_2 : styles.change_btn_1
                      }`
                }`}
                onClick={() => {
                  headerSwitchHandler(1);
                }}
              >
                skills
              </button>
            </div>
          )}
        </div>
        <nav>
          {resize <= 1024 ? (
            <div className={styles.menu_container}>
              <div className={styles.menu_label_container}>
                <label
                  className={`${styles.menu_label} ${
                    menuSwitch
                      ? styles.menu_label_rotate
                      : styles.menu_label_rotate_remove
                  }`}
                  onClick={() => setMenuSwitch(!menuSwitch)}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </label>
              </div>

              <div
                className={`${styles.side_menu} ${
                  menuSwitch ? styles.menu_show : styles.menu_hide
                }`}
              >
                <ul>
                  <li>
                    <span className="projectNav" onClick={moveToOffsetTop}>
                      PROJECT
                    </span>
                  </li>
                  <li>
                    <span className="aboutNav" onClick={moveToOffsetTop}>
                      ABOUT
                    </span>
                  </li>
                  <li>
                    <span className="contactNav" onClick={moveToOffsetTop}>
                      CONTACT
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <ul className={styles.nav_container}>
              <li>
                <span className="projectNav" onClick={moveToOffsetTop}>
                  PROJECT
                </span>
              </li>
              <li>
                <span className="aboutNav" onClick={moveToOffsetTop}>
                  ABOUT
                </span>
              </li>
              <li>
                <span className="contactNav" onClick={moveToOffsetTop}>
                  CONTACT
                </span>
              </li>
            </ul>
          )}
        </nav>
      </div>
      <div className={styles.header_main_container}>
        <h1 className={styles.title}>
          <span
            className={`${styles.title_1} ${
              titleScroll1 ? styles.fade_out_1 : styles.fade_in_1
            }`}
          >
            developing
          </span>
          <span
            className={`${styles.title_2} ${
              titleScroll2 ? styles.fade_out_2 : styles.fade_in_2
            }`}
          >
            front-end
          </span>
          <span
            className={`${styles.title_3} ${
              titleScroll3 ? styles.fade_out_3 : styles.fade_in_3
            }`}
          >
            web developer
          </span>
          <span
            className={`${styles.title_4} ${
              titleScroll4 ? styles.fade_out_4 : styles.fade_in_4
            }`}
          >
            welcome to <em>my</em> 2022 <em>portfolio</em>
          </span>
        </h1>
      </div>
      <Linkbar />
    </header>
  );
}

export default Header;
