import {Box, Flex, useMediaQuery, Image,Text, UnorderedList, ListItem, Button} from "./common/components/index";import GopherButton from "./components/button";
import { GitHub, Twitter } from "./components/icon";

export default function Home() {
  const title = 'My Profile Site !!!';
  
  return (
    <>
      <Flex direction="column" minH="100vh">
        <Box bgGradient='linear(to-r, yellow.200, pink.500)' p={2} color="black">
            <Box display='flex' justifyContent='center'>
              <Text fontSize="25px" fontWeight="bold" mb={{ base: 4, md: 0 }}>
                {title}
              </Text>
            </Box>
            <Box display='flex' justifyContent={{ base: 'center', md: 'flex-end'}}>
              <Box as="a" href="#" p={2} color="black" _hover={{ textDecoration: "underline" }}>
                <Text fontSize="md">Home</Text>
              </Box>
              <Box as="a" href="#" p={2} color="black" _hover={{ textDecoration: "underline" }}>
                <Text fontSize="md">Profile</Text>
              </Box>
              <Box as="a" href="#" p={2} color="black" _hover={{ textDecoration: "underline" }}>
                <Text fontSize="md">Skills</Text>
              </Box>
              <Box as="a" href="#" p={2} color="black" _hover={{ textDecoration: "underline" }}>
                <Text fontSize="md">Blogs</Text>
              </Box>
            </Box>
        </Box>

        <Box p='16px' paddingTop={{ base: '40px', md: '80px'}}>
          <Box
            display='flex'
            fontSize={{ base: '20p', md: '40px'}}
            fontWeight='bold'
            textAlign='center'
            alignItems='center'
            justifyContent='center'
            marginX='auto'
          >
            <Image 
              src='/main-image.jpg' 
              alt='main image' 
              borderRadius='full'
              w={{ base: '110px', md: '250px'}}
              h={{ base: '110px', md: '250px'}}
            />
          </Box>
        </Box>

        <Box
          display='flex' 
          justifyContent='center'
          p={4}
        >
          <UnorderedList>
            <ListItem listStyleType='none'><Text p={2} fontSize={{ base: 15, md: 24}}>I am O-ga09</Text></ListItem>
            <ListItem listStyleType='none'><Text p={2} fontSize={{ base: 15, md: 24}}>社会4年目のGolang大好きエンジニアです。</Text></ListItem>
            <ListItem listStyleType='none'><Text p={2} fontSize={{ base: 15, md: 24}}>I like GO / Vue / React / K8s /</Text></ListItem>
            <ListItem listStyleType='none'><Text p={2} fontSize={{ base: 15, md: 24}}>I have FE(基本情報技術者)</Text></ListItem>
          </UnorderedList>
        </Box>

        <Box display='flex' justifyContent='center'>
          <GopherButton />
        </Box>

        <Box bgGradient='linear(to-r, pink.500, yellow.200)' p={4} color="black" mt="auto">
          copyright 2023 o-ga09
          <Twitter />
          <GitHub />
        </Box>
      </Flex>
    </>
  )
}
