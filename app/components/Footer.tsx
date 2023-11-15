import { Box, Flex, Link, Text, useMediaQuery } from "../common/components";
import { GitHub, Twitter } from "./Icon";
import styles from "../../styles/styles.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <a href="/policy" target="blank">
          サイトポリシー
        </a>
        <p>&copy; copyright 2023 o-ga09</p>
        <Twitter />
        <GitHub />
      </div>
    </>
  );
};
export default Footer;
