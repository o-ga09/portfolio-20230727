import {Box,Image,Text, UnorderedList, ListItem, Flex} from "./common/components/index";
import { Gopher, GopherPink, GopherYellow } from "./components/Button";
import Header from "./components/Header";

export default function Home() {
  const title = 'My Profile Site !!!';
  const breakpoints = ['0em', '30em', '48em', '62em', '80em', '96em']
  
  return (
    <>
      <Header title={title} />
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
      <Box display='flex' w='100%' justifyContent='center' bgGradient='linear(to-r, yellow.100, pink.300)'>
        <GopherPink />
        <GopherYellow />
        <Gopher />
      </Box>
    </>
  )
}
