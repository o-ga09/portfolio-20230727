import { Box, Flex, Link, Text, useMediaQuery } from "../common/components";
import { GitHub, Twitter } from "./Icon";

const Footer = () => {
    return (
        <Box bgGradient='linear(to-r, yellow.100, pink.300)' p={2} color="black" mt="auto" minH='10vh'>
            <Flex direction='row'>
                <Link href='/policy' isExternal p={1}>
                    サイトポリシー
                </Link>
                <Text p={1}>
                    &copy; copyright 2023 o-ga09
                </Text>
                <Twitter />
                <GitHub />
            </Flex>
      </Box>
    );
};
export default Footer;