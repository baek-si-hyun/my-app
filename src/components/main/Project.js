import styles from "./Project.module.css";
import postman from "../../img/postman.png";
import spring from "../../img/spring.png";
import intelliJ from "../../img/IntelliJ.png";
import vscode from "../../img/VSCode.png";
import github from "../../img/github.png";
import jquery from "../../img/jquery.png";
import calendar from "../../img/calendar.png";
function Project({ onOffBtn }) {
  return (
    <section className={styles.project_container}>
      <div
        className={
          onOffBtn === 0 ? styles.project_inner_container : styles.div_hide
        }
      >
        <div className={styles.project_text}>
          <h2>airbnb 클론 코딩</h2>
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
        <div className={styles.project_showroom}>
          <div className={`${styles.hov_box} ${styles.hov_box_erd}`}>
            <p className={styles.erd_text}>ERD</p>
            <div className={styles.erd}></div>
            <div className={styles.erd_stop}></div>
          </div>
          <div className={`${styles.hov_box} ${styles.hov_box_map}`}>
            <p className={styles.map_text}>USER FLOW</p>
            <div className={styles.map1}></div>
            <div className={styles.map2}></div>
          </div>
          <div className={`${styles.hov_box} ${styles.hov_box_gif}`}>
            <p className={styles.gif_text}>메인 화면</p>
            <div className={styles.gif}></div>
            <div className={styles.gif_stop}></div>
          </div>
          <div className={`${styles.hov_box} ${styles.hov_box_gif2}`}>
            <p className={styles.gif_text2}>회원가입 및 로그인</p>
            <div className={styles.gif2}></div>
            <div className={styles.gif_stop2}></div>
          </div>
        </div>
      </div>

      <div
        className={onOffBtn === 1 ? styles.skills_container : styles.div_hide}
      >
        <div className={styles.skills_text}>
          <h2>airbnb 클론 코딩</h2>
          <h3>airbnb 프로젝트 개발기간</h3>
          <p>2022.06.08 ~ 2022.08.19</p>
          <h3>airbnb 프로젝트 개발 환경</h3>
          <p>
            개발인원 : 총 5명 <br />
            역할 분담 : 공통(기획,스토리보드, DB설계 및 생성, 퍼블리싱),
            Front-End 2명, Back-End 3명 <br />
            본인 역할 : Front-End개발 <br />
            본인이 사용한 Skill, Tool : HTML, CSS, Js, Vue, jQuery, GitHub,
            VSCode, IntelliJ
          </p>
          <h3>프로젝트 일정</h3>
          <img className={styles.img400} src={calendar} />
        </div>
        <div className={styles.skills_img}>
          <h3>사용한 Skill 및 Tool</h3>
          <div className={styles.skills_inner}>
            <div className={styles.skills_inner_div}>
              <img
                className={styles.img120}
                src="https://img.icons8.com/color/144/null/html-5--v1.png"
              />
            </div>
            <div className={styles.skills_inner_div}>
              <img
                className={styles.img120}
                src="https://img.icons8.com/color/144/null/css3.png"
              />
            </div>
            <div className={styles.skills_inner_div}>
              <img
                className={styles.img120}
                src="https://img.icons8.com/color/144/null/javascript--v1.png"
              />
            </div>
            <div className={styles.skills_inner_div}>
              <img
                className={styles.img120}
                src="https://img.icons8.com/color/144/null/vue-js.png"
              />
            </div>
            <div className={styles.skills_inner_div}>
              <img className={styles.img120} src={jquery} />
            </div>
            <div className={styles.skills_inner_div}>
              <img
                className={styles.img120}
                src="https://img.icons8.com/fluency/144/null/java-coffee-cup-logo.png"
              />
            </div>
            <div className={styles.skills_inner_div}>
              <img className={styles.img120} src={spring} />
            </div>
            <div className={styles.skills_inner_div}>
              <img
                className={styles.img120}
                src="https://img.icons8.com/color/144/null/oracle-logo.png"
              />
            </div>
            <div className={styles.skills_inner_div}>
              <img
                className={styles.img120}
                src="https://img.icons8.com/color/144/null/tomcat.png"
              />
            </div>
            <div className={styles.skills_inner_div}>
              <img className={styles.img100} src={postman} />
            </div>
            <div className={styles.skills_inner_div}>
              <img className={styles.img100} src={github} />
            </div>
            <div className={styles.skills_inner_div}>
              <img className={styles.img100} src={vscode} />
            </div>
            <div className={styles.skills_inner_div}>
              <img className={styles.img100} src={intelliJ} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
