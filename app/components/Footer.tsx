import { Box } from "../common/components";
import { GitHub, Twitter } from "./Icon";

const Footer = () => {
    return (
        <Box bgGradient='linear(to-r, pink.500, yellow.200)' color="black" minH='10vh'>
            copyright 2023 o-ga09
            <Twitter />
            <GitHub />
        </Box>
    );
};
export default Footer;