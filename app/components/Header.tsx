import { Box, Text } from "../common/components";

const Header = ({title} : {title: string}) => {
    return (
        <Box bgGradient='linear(to-r, yellow.100, pink.300)' p={2} color="black">
            <Box display='flex' justifyContent='center'>
            <Text fontSize="30px" fontWeight="bold" mb={{ base: 4, md: 0 }}>
                {title}
            </Text>
            </Box>
            <Box display='flex' justifyContent={{ base: 'center', md: 'flex-end'}}>
            <Box as="a" href="/" p={2} color="black" _hover={{ textDecoration: "underline" }}>
                <Text fontSize="md">Home</Text>
            </Box>
            <Box as="a" href="/profile" p={2} color="black" _hover={{ textDecoration: "underline" }}>
                <Text fontSize="md">Profile</Text>
            </Box>
            <Box as="a" href="/skills" p={2} color="black" _hover={{ textDecoration: "underline" }}>
                <Text fontSize="md">Skills</Text>
            </Box>
            <Box as="a" href="/blogs" p={2} color="black" _hover={{ textDecoration: "underline" }}>
                <Text fontSize="md">Blogs</Text>
            </Box>
            </Box>
        </Box>
    );
};
export default Header;