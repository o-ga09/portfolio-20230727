import {
  Box,
  Grid,
  GridItem,
  Text,
  Image,
  Heading,
} from "../common/components";
import { ProfileCard } from "../components/Card";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function Profile() {
  const profileTitle = [
    "Name",
    "Age",
    "From",
    "Job",
    "Comment",
    "like Game",
    "好きなプログラム言語",
    "like Anime",
  ];
  const profileContents = [
    "オーガ",
    "25",
    "Niigata, Sanjo",
    "Engineer",
    "夢は、エンタメサービスのバックエンドエンジニア",
    "モンハン／ゼノブレイド／ドラクエ",
    "Go",
    "ハイキュー／七つの大罪",
  ];

  return (
    <>
      <Box minH={"80vh"}>
        <Grid
          templateColumns={{ base: "repeat(1, 0fr)", md: "repeat(4, 0fr)" }}
          gap={6}
          paddingTop={16}
          justifyContent={"center"}
        >
          {profileTitle.map((title, index) => (
            <GridItem key={index}>
              <ProfileCard title={title} contents={profileContents[index]} />
            </GridItem>
          ))}
        </Grid>
      </Box>
      <Footer />
    </>
  );
}
