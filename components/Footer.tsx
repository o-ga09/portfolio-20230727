import { Box, Flex, Link, Text, useMediaQuery } from "../common/components";
import { GitHub, Twitter } from "./Icon";
import styles from "../../styles/styles.module.css";

export const Footer = () => {
  return (
    <>
      <Flex
        flexDirection={{ base: "column", xl: "row" }}
        alignItems={"center"}
        justifyContent={"center"}
        h={{ base: "20vh", xl: "10vh" }}
      >
        <Link href="/policy" target="blank" marginLeft={"30px"}>
          サイトポリシー
        </Link>
        <Flex flexDirection={"row"}>
          <Twitter />
          <GitHub />
        </Flex>

        <Text marginLeft={"30px"}>&copy; copyright 2023 o-ga09</Text>
      </Flex>
    </>
  );
};

export const Policyfooter = () => {
  return (
    <>
      <Flex
        flexDirection={{ base: "column", xl: "row" }}
        alignItems={"center"}
        justifyContent={"center"}
        h={{ base: "20vh", xl: "10vh" }}
      >
        <Flex flexDirection={"row"}>
          <Twitter />
          <GitHub />
        </Flex>
        <Text marginLeft={"30px"}>&copy; copyright 2023 o-ga09</Text>
      </Flex>
    </>
  );
};
