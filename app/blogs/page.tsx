import { Fleur_De_Leah } from "next/font/google";
import { Box, Flex, Grid, GridItem, Heading, Text } from "../common/components";
import { BlogCard } from "../components/card";
import Header from "../components/header";
import { ArticleAll } from "../const/const";


export default function Blogs() {
  const title = 'Blogs';
  
  return (
    <>
        <Header title={title} />
        <Grid
            templateColumns={{ base: 'repeat(1, 0fr)', md: 'repeat(2, 0fr)' }}
            gap={6}
            marginX='auto'
            paddingTop={16}
          > 
            {ArticleAll.length === 0 ? (
              <>
                <Box
                  w='300px'
                  h='100px'
                >
                  <Flex direction='column'>
                    <Heading paddingBottom={4} textDecoration='underline' textAlign='center'>Comming soon ...</Heading>
                    <Text textAlign='center'>技術以外のゲームの感想、読んだ本感想を書こうと思います</Text>
                  </Flex>
                </Box>
              </>
            ) : (
              ArticleAll.map((title,index) => (
                <GridItem key={index}><BlogCard title={title} index={index} /></GridItem>
              ))
            )}
        </Grid>
    </>
  )
}