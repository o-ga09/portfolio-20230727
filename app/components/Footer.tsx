import { Box, Flex, Link, Text, useMediaQuery } from "../common/components";
import { GitHub, Twitter } from "./Icon";
import styles from "../../styles/styles.module.css";

export const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <a className={styles.a} href="/policy" target="blank">
          サイトポリシー
        </a>
        <p>&copy; copyright 2023 o-ga09</p>
        <Twitter />
        <GitHub />
      </div>
    </>
  );
};

export const Policyfooter = () => {
  return (
    <>
      <div className={styles.footer}>
        <p>&copy; copyright 2023 o-ga09</p>
        <Twitter />
        <GitHub />
      </div>
    </>
  );
};
