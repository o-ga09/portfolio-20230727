import { Flex, Link, Text } from "../common/components";
import { GitHub, Twitter } from "./Icon";

export const Footer = () => {
  return (
    <>
      <Flex
        flexDirection={{ base: "column", xl: "row" }}
        alignItems={"center"}
        justifyContent={"center"}
        h={{ base: "20vh", xl: "10vh" }}
        p={1}
      >
        <Link href="/policy" target="blank">
          サイトポリシー
        </Link>
        <Flex flexDirection={"row"}>
          <Twitter />
          <GitHub />
        </Flex>

        <Text>&copy; copyright 2024 o-ga09</Text>
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
