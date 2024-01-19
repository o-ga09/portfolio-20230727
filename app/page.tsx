import { FC } from "react";
import {
  FutureSection,
  HobbySection,
  LoveSection,
  ProductSection,
  ProfileSection,
  SkillSection,
  Title,
} from "../components/Section";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Box } from "../common/components";
import "./globals.css";

const Home: FC = () => {
  const siteTitle = "o-ga's Profile";
  const pageTitle = "Engineer Life";
  const categories = [
    "自己紹介",
    "スキル",
    "趣味",
    "プロダクト",
    "推し",
    "将来",
  ];
  const explains = [
    "オーガ,２６歳,新潟出身,東京,エンジニア,パスタやお酒",
    "Go,Node,バックエンドの言語を用いた開発,フロントは少しです,保守の経験や障害対応もできます。",
    "モンハン,ドラクエ,ゼノブレイド,ハイキュー,ダーツ",
    "こちらです。",
    "山本彩です！",
    "エンジニアでワクワクできるサービスを作りたいです。",
  ];
  return (
    <Box w={"100%"} h={"100%"} bgColor={"teal.200"}>
      <Header title={siteTitle} />
      <Title title={pageTitle} />
      <ProfileSection />
      <SkillSection />
      <HobbySection />
      <ProductSection />
      <LoveSection />
      <FutureSection />
      <Footer />
    </Box>
  );
};

export default Home;
