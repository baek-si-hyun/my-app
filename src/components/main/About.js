import styles from "./About.module.css";

function About({}) {
  return (
    <section className={styles.about_container}>
      <div className={styles.about_inner_container}>
        <div className={styles.about_text_left}>
          <h4>개발자를 꿈꾸는...</h4>
          <p>
            개발자가 되고 싶은 24살 백시현입니다. 전 무언가를 만들고 고칠때
            살아있음을 느낍니다. <br />
            유치원, 초등학교 때부터 자동차 이름을 전부 외우고 <br />
            컴퓨터 문서실무사 자격증을 취득할 정도로 기계와 컴퓨터에 관심이
            많았습니다. <br />
            장래희망도 정비사, 개발자 등을 꿈꿨지만 부모님의 심한 반대로
            좌절하게 됩니다. <br />그 뒤로 성인이 되고 음식점 사업을 해보기 위해
            음식점 아르바이트도 하고, <br />
            중장비를 배우기 위해 건설현장에서 일을 하는등
            <br />
            다양한 일을 해봤지만 가슴 속 깊이 설레는 일이 하고 싶었습니다.{" "}
            <br />
            2022년 결국 부모님을 설득하는데 성공했고 <br />
            코리아IT아카데미라는 기관을 만나 개발자가 되기위한 과정을
            마무리했습니다. <br />
            수술로 인해 좀 늦긴했지만 꿈이 코앞까지 와있습니다. <br />
            개발자라는 꿈을 이루더라도 어제의 나보다 더 나은 개발자가 되기 위해
            노력할 것입니다.
          </p>
        </div>
        <div className={styles.about_text_right}>
          <h4>이 웹사이트는... </h4>
          <p>
            이 웹사이트는 해보고 싶은 기술들, <br />
            새로운 기술들을 써보고 경험하기 위해 만들게 되었습니다.
            <br />
            현재는 Pull Page도 적용을 못했고 급하게 만든 감이 있지만
            <br /> 꾸준한 개선과 리모델링을 통해 가꾸어 나갈 예정입니다. <br />
            미래에 Typescript, ReactNative, NextJS등을 배워 적용해볼
            실험체이기도 합니다. <br />
            앞으로 이 사이트는 제가 사용할수 있는 기술들을 나열해 놓고 <br />
            공유하는 웹 전시장같은 느낌이 나게 만들생각입니다.
          </p>
        </div>
      </div>
    </section>
  );
}
export default About;
