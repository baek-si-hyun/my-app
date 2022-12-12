import { useState, useEffect } from "react";
import styles from "./Home.module.css";
import "../font/font.css";
import "./Home.css";
import postman from "../img/postman.png";
import spring from "../img/spring.png";
import IntelliJ from "../img/IntelliJ.png";
import vscode from "../img/VSCode.png";
import github from "../img/github.png";
import jquery from "../img/jquery.png";
import calendar from "../img/calendar.png";
function Home() {
  const [loading, setLoading] = useState(true);
  const mainApi = () => {
    setLoading(false);
  };

  useEffect(() => {
    mainApi();
  }, []);

  const [time, setTime] = useState(new Date());
  const options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  };
  useEffect(() => {
    const Id = setInterval(() => {
      setTime(new Date());
    }, 990);
    return () => clearInterval(Id);
  }, []);

  const [titleScroll1, setTitieScroll1] = useState(false);
  const [titleScroll2, setTitieScroll2] = useState(false);
  const [titleScroll3, setTitieScroll3] = useState(false);
  const [footerScroll, setFooterScroll] = useState(false);
  const [senterScroll, setSenterScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setFooterScroll(true);
    }
    if (window.scrollY >= 580) {
      setTitieScroll1(true);
    }
    if (window.scrollY >= 450) {
      setTitieScroll2(true);
    }
    if (window.scrollY >= 300) {
      setTitieScroll3(true);
      setSenterScroll(true);
    }
    if (window.scrollY >= 1500) {
      setSenterScroll(false);
    }
    if (window.scrollY === 0) {
      setFooterScroll(false);
      setTitieScroll1(false);
      setTitieScroll2(false);
      setTitieScroll3(false);
      setSenterScroll(false);
    }
  };

  const [switchDiv, setSwitchDiv] = useState(0);

  return (
    <div className={styles.container}>
      {loading ? (
        <div>
          <h2>want to be senior</h2>
        </div>
      ) : (
        <div>
          <div className={styles.nav}>
            <div className={styles.item}>
              <span className={styles.click}>
                {time.toLocaleTimeString("en-US", options)}
              </span>
            </div>
            <div className={styles.item}>
              {senterScroll ? (
                <div className={styles.switch_box}>
                  <div
                    className={`${styles.active_box} ${
                      switchDiv === 0 ? styles.left : styles.right
                    }`}
                  ></div>
                  <button
                    className={
                      switchDiv === 0 ? styles.change_btn1 : styles.change_btn
                    }
                    onClick={() => {
                      setSwitchDiv(0);
                    }}
                  >
                    Project
                  </button>
                  <button
                    className={
                      switchDiv === 0 ? styles.change_btn : styles.change_btn1
                    }
                    onClick={() => {
                      setSwitchDiv(1);
                    }}
                  >
                    Skills
                  </button>
                </div>
              ) : (
                <div className={`${styles.wrap} ${styles.fadeIn_navSenter}`}>
                  <div className={styles.roller}>
                    <p className={styles.senterName}>
                      SiHyun Baek &nbsp; SiHyun Baek &nbsp; SiHyun Baek
                      &nbsp;SiHyun Baek &nbsp; SiHyun Baek &nbsp; SiHyun Baek
                      &nbsp;SiHyun Baek &nbsp;SiHyun Baek &nbsp;SiHyun Baek
                      &nbsp;
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className={styles.item}>
              <a className={styles.menuBtn_item}>CONTACT</a>
              <a className={styles.menuBtn_item}>ABOUT</a>
              <a className={styles.menuBtn_item}>PROJECT</a>
            </div>
          </div>

          <div className={styles.mainPage}>
            <section className={styles.section1}>
              <div className={styles.titleDiv}>
                <h2
                  className={`${styles.title} ${
                    titleScroll1 ? styles.fadeOut_right1 : styles.fadeIn_left1
                  }`}
                  id={styles.h2_1}
                >
                  DEVELOPING
                </h2>
                <h2
                  className={`${styles.title} ${
                    titleScroll2 ? styles.fadeOut_right2 : styles.fadeIn_right2
                  }`}
                  id={styles.h2_2}
                >
                  FRONT-END
                </h2>
                <h2
                  className={`${styles.title} ${
                    titleScroll3 ? styles.fadeOut_left3 : styles.fadeIn_left3
                  }`}
                  id={styles.h2_3}
                >
                  WEB DEVELOPER
                </h2>
                <p
                  className={`${styles.subTitle} ${
                    titleScroll3 ? styles.divHide : styles.fadeIn_left4
                  }`}
                  id={styles.p_1}
                >
                  WELCOME TO <em>my</em> 2022 <em>portfolio</em>
                </p>
              </div>
              <div className={footerScroll ? styles.divHide : styles.footer}>
                <div>
                  <a
                    href="https://www.instagram.com/b_2.19/"
                    className={styles.footer_item}
                  >
                    INSTARGRAM
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100007773606487&sk=about"
                    className={styles.footer_item}
                  >
                    FACEBOOK
                  </a>
                  <a
                    href="https://blog.naver.com/qortlgus100"
                    className={styles.footer_item}
                  >
                    BLOG
                  </a>
                  <a
                    href="https://github.com/baek-si-hyun"
                    className={styles.footer_item}
                  >
                    GITHUB
                  </a>
                </div>
              </div>
              <div className={footerScroll ? styles.divHide : styles.guide}>
                <p>
                  SCROLL TO BEGIN YOUR JOURNEY
                  <span className={styles.arrow}>↓</span>
                </p>
              </div>
            </section>
            <section className={styles.section2}>
              <div
                className={switchDiv === 0 ? styles.left_div : styles.DivHide}
              >
                <div className={styles.left_text}>
                  <h1>airbnb 클론 코딩</h1>
                  <h3>airbnb 선정이유</h3>
                  <p>
                    airbnb는 정갈하고 트렌디한 디자인을 가지고 있습니다. 원하는
                    <br />
                    정보를 한 눈에 볼 수 있는 디자인을 구현해 보고 싶었습니다.
                    <br />
                    또한 다양한 분야의 시스템과 많은 기능이 구현되어 있기 때문에
                    <br />
                    클론 코딩을 했을 때, 다양한 경험을 할 수 있을 것이라
                    <br />
                    생각했습니다.
                  </p>
                  <h3>프로젝트 목표</h3>
                  <p>
                    - airbnb의 기본 기능 구현
                    <br />
                    - 숙소등록, 관리, 수정, 결제의 프로세스 구현
                    <br />
                    - 불편했던 비회원 예약기능, 숙소 검색 시 필터추가
                    <br />
                    &nbsp;&nbsp;&nbsp;기능, 국내 검색 활성화 개선
                  </p>
                  <h3>앞으로...</h3>
                  <p>
                    프로젝트가 작동 되는걸 직접 체험할 수 있도록
                    <br />
                    AWS를 통한 서비스를 구현중에 있습니다.
                    <br />
                    하지만 몇몇 문제들로 인해 지연되고 있습니다.
                    <br />
                  </p>
                </div>
              </div>
              <div className={switchDiv === 0 ? "" : styles.DivHide}>
                <div className={styles.hov_erd_box}>
                  <p className={styles.erd_text}>ERD</p>
                  <div className={styles.erd}></div>
                </div>
                <div className={styles.hov_map_box}>
                  <p className={styles.map_text}>USER FLOW</p>
                  <div className={styles.map1}></div>
                  <div className={styles.map2}></div>
                </div>
                <div className={styles.hov_anim_box}>
                  <p className={styles.gif_text}>메인 화면</p>
                  <div className={styles.gif}></div>
                  <div className={styles.gifStop}></div>
                </div>
                <div className={styles.hov_anim_box2}>
                  <p className={styles.gif_text2}>회원가입 및 로그인</p>
                  <div className={styles.gif2}></div>
                  <div className={styles.gifStop2}></div>
                </div>
              </div>
              <div
                className={switchDiv === 1 ? styles.skillsDiv : styles.DivHide}
              >
                <div className={styles.skill_left}>
                  <h1>airbnb 클론 코딩</h1>
                  <h3>airbnb 프로젝트 개발기간</h3>
                  <p>2022.06.08 ~ 2022.08.19</p>
                  <h3>airbnb 프로젝트 개발 환경</h3>
                  <p>
                    개발인원 : 총 5명 <br />
                    역할 분담 : 공통(기획,스토리보드, DB설계 및 생성, 퍼블리싱),
                    Front-End 2명, Back-End 3명 <br />
                    본인 역할 : Front-End개발 <br />
                    본인이 사용한 Skill, Tool : HTML, CSS, Js, Vue, jQuery,
                    GitHub, VSCode, IntelliJ
                  </p>
                  <h3>프로젝트 일정</h3>
                  <img className={styles.img400} src={calendar} />
                </div>
                <div className={styles.skill_right}>
                  <p>사용한 Skill 및 Tool</p>
                  <img
                    className={styles.img120}
                    src="https://img.icons8.com/color/144/null/html-5--v1.png"
                  />
                  <img
                    className={styles.img120}
                    src="https://img.icons8.com/color/144/null/css3.png"
                  />
                  <img
                    className={styles.img120}
                    src="https://img.icons8.com/color/144/null/javascript--v1.png"
                  />
                  <img
                    className={styles.img120}
                    src="https://img.icons8.com/color/144/null/vue-js.png"
                  />
                  <img className={styles.img120} src={jquery} />
                  <img
                    className={styles.img120}
                    src="https://img.icons8.com/fluency/144/null/java-coffee-cup-logo.png"
                  />
                  <img className={styles.img120} src={spring} />
                  <img
                    className={styles.img120}
                    src="https://img.icons8.com/color/144/null/oracle-logo.png"
                  />
                  <img
                    className={styles.img120}
                    src="https://img.icons8.com/color/144/null/tomcat.png"
                  />
                  <img className={styles.img100} src={postman} />
                  <img className={styles.img100} src={github} />
                  <img className={styles.img100} src={vscode} />
                  <img className={styles.img100} src={IntelliJ} />
                </div>
              </div>
            </section>
            <section className={styles.section3}>
              <div></div>
            </section>
            <section className={styles.section4}></section>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
