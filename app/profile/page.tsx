import { Box, Grid, GridItem, Text, Image, Heading } from "../common/components";
import { ProfileCard } from "../components/Card";
import Header from "../components/Header";


export default function Profile() {
  const title = 'Profile';
  const profileTitle = ['Name','Age','From','Job','Comment','like Game','like Programming Langage','like Anime'];
  const profileContents = ['オーガ','25','Niigata, Sanjo','Engineer','comment','モンハン／ゼノブレイド／ドラクエ','Go','ハイキュー／七つの大罪'];
  
  return (
    <>
        <Header title={title} />
        <Grid 
          templateColumns={{ base: 'repeat(1, 0fr)', md: 'repeat(2, 0fr)' }}
          gap={6}
          marginX='auto'
          paddingTop={16}
        >
          {profileTitle.map((title,index) => (
              <GridItem key={index}><ProfileCard title={title} contents={profileContents[index]} /></GridItem>
          ))};
        </Grid>

        <Heading as='h4' fontSize={{base: 8, md: 24}} textAlign='center' fontWeight='bold'>これから、技術的な記事以外にもブログを定期的に書いていこうと思います！よろしくお願いします。</Heading>
    </>
  )
}