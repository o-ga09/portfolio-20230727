import {Box, Flex, useMediaQuery, Image,Text} from "./common/components/index";;
export default function Home() {
  // TODO: useMediaQueryをNextJsの方法に修正
  const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");
  const title = 'My Profile Site !!!';
  
  return (
    <>
      <Flex direction="column" minH="100vh">
        <Box
          display='flex'
          h='150px'
          bg="teal.200"
          color="black"
          fontWeight='bold'
          fontSize={isSmallerThan600 ? '30px' : '40px'}
          alignItems='center'
          justifyContent='center'
          bgGradient='linear(to-r, yellow.200, pink.500)'
        >
          {/* TODO: メニューを作る */}
          {title}
        </Box>

        <Box p='16px' paddingTop={isSmallerThan600 ? '40px' : '80px'}>
          <Box
            display='flex'
            fontSize={isSmallerThan600 ? '20px' : '40px'}
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
              w={isSmallerThan600 ? '70%' : '50%'}
              h={isSmallerThan600 ? '250px' : '300px'}
            />
          </Box>
        </Box>

        <Box
          display='flex' 
          marginTop={isSmallerThan600 ? '20px' : '45px'} 
          justifyContent='center'
          p={4}
        >
          {/* TODO:リスト化する */}
          <Text>I am O-ga09</Text>
          <Text>社会4年目のGolang大好きエンジニアです。</Text>
          <Text>I like GO / Vue / React / K8s /</Text>
          <Text>I have FE(基本情報技術者)</Text>
        </Box>

        <Box
          display='flex' 
          marginTop={isSmallerThan600 ? '20px' : '45px'} 
          justifyContent='center'
          p={4}
        >
          {/* TODO: ボタン化する */}
          <Image src='Gophersvg.svg' w='100px' h='100px' alt='gopher' />
        </Box>


        <Box bgGradient='linear(to-r, pink.500, yellow.200)' p={4} color="black" mt="auto">
          copyright 2023 o-ga09
          {/* TODO: フッターにtwitterとgithubのアイコン */}
        </Box>
      </Flex>
    </>
  )
}
