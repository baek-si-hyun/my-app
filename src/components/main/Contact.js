import styles from "./Contact.module.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = ({}) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6ve891d",
        "template_on7gvsv",
        form.current,
        "GPN2QNExB1LNIobJ6"
      )
      .then(
        (result) => {
          alert(result.text);
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    <section className={styles.contact_container}>
      <svg
        className={styles.moon}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1000 1000"
        enableBackground="new 0 0 1000
      1000"
      >
        <metadata>
          Svg Vector Icons : http://www.onlinewebfonts.com/icon
        </metadata>
        <g>
          <g transform="translate(0.000000,30.000000) scale(0.100000,-0.100000)">
            <path d="M3218.8-467.7c-2003-1201.9-2870.9-3538.7-2103.1-5809C2050.4-9147.5,6090.1-10583,8393.4-8847l768.1,567.3L7993-8246.1C4420.7-8146,2083.8-4206.8,3719.6-1035.3C4086.8-367.6,4354,200,4320.6,200C4320.6,200,3819.8-100.4,3218.8-467.7z" />
          </g>
        </g>
      </svg>
      <svg
        className={`${styles.cloud} ${styles.cloud}`}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1000 1000"
        enableBackground="new 0 0 1000 1000"
      >
        <metadata>
          Svg Vector Icons : http://www.onlinewebfonts.com/icon
        </metadata>
        <g>
          <path d="M384.2,404c0,0,2.2-88.5,108.4-79.7s157.1,130.6,157.1,130.6s84.1-57.5,139.4-13.3c55.3,44.3,50.9,97.4,50.9,97.4s46.5-2.2,88.5,24.3s39.8,31,57.5,44.3c17.7,13.3-31,44.3-31,44.3s-66.4,15.5-115.1,0c-48.7-15.5-70.8-19.9-70.8-19.9s-6.6,22.1-35.4,17.7c-28.8-4.4-46.7-17.7-46.7-17.7s-37.3,46.5-99.3,39.8c-62-6.6-101.8-22.1-101.8-22.1s-53.1,38.9-137.2,22.8c-84.1-16.1-150.5-42.7-150.5-42.7s-46.5,4.4-77.5,0c-31-4.4-88.5,8.9-104,4.4c-15.5-4.4,0-28.8,0-28.8L70,576.6c0,0,2.2-50.9,42-66.4c39.8-15.5,106.2,15.5,106.2,15.5l15.5-25.7c0,0-44.3-89.4,26.6-100.4C331.1,388.5,384.2,404,384.2,404z" />
        </g>
      </svg>
      <svg
        className={styles.mountain}
        viewBox="0 0 1920 997"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2_2)">
          <path
            d="M-37.1853 493.75C94.6923 441.809 267.862 952.161 265.629 977.5L-322 874C-322 874 -169.063 545.69 -37.1853 493.75Z"
            fill="#BFAB8B"
          />
          <path
            d="M1716.5 783.552L1855.5 1081.05L1540 1374.55L950 1029.21C1464.79 467.088 1493.96 253.161 1716.5 783.552Z"
            fill="#BFAB8B"
          />
          <path
            d="M724 835C946.311 1000.74 941.928 1004.42 1156 800L1177 1123H639L724 835Z"
            fill="#BFAB8B"
          />
          <rect y="911" width="758" height="86" fill="#BFAB8B" />
          <rect x="1636" y="648" width="284" height="349" fill="#BFAB8B" />
          <path
            d="M189 764C257.606 871.623 289.525 969.238 652 825L675 927H159L189 764Z"
            fill="#BFAB8B"
          />
          <path
            d="M1624.5 592.5C1712.26 681.775 1735.68 651.332 1804.5 586L1940 760.5H1607L1624.5 592.5Z"
            fill="#BFAB8B"
          />
          <path
            d="M1804.5 586C1845.11 540.756 1873.52 537.426 1929.8 589.731L1928.99 673.727L1809 672.57L1804.5 586Z"
            fill="#BFAB8B"
          />
          <path
            d="M597 850.523C654.9 806.816 729.011 815.755 729.696 850.523C730.381 885.291 729.696 911 729.696 911H597V850.523Z"
            fill="#BFAB8B"
          />
        </g>
        <defs></defs>
      </svg>
      <img
        src="https://wanderful.index.studio/wp-content/themes/wanderful/theme/public/img/house.gif"
        className={styles.house}
        alt="house"
      ></img>
      <div className={styles.contact_form_container}>
        <h3>contact</h3>
        <form
          ref={form}
          onSubmit={sendEmail}
          className={styles.contact_form}
          autoComplete="off"
        >
          <label htmlFor="user_name" className={styles.sr_only}>
            Name
          </label>
          <input
            type="text"
            name="user_name"
            className={styles.contact_name}
            placeholder="Your Name"
            required
          />
          <label htmlFor="user_email" className={styles.sr_only}>
            Email
          </label>
          <input
            type="email"
            name="user_email"
            className={styles.contact_email}
            placeholder="Your E-mail address"
            required
          />
          <label htmlFor="message" className={styles.sr_only}>
            Message
          </label>
          <textarea
            name="message"
            className={styles.contact_message}
            placeholder="Your Message"
            required
          />
          <input type="submit" value="Send" className={styles.contact_submit} />
        </form>
      </div>
    </section>
  );
};
export default Contact;
