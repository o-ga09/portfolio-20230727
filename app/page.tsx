import { FC } from "react";
import { Title, Section } from "./components/Section";
import styles from "../styles/styles.module.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import MouseTracking from "./components/MouseTracking";
import HorizontalScroll from "./components/Horizonscroll";
import TypingAnimation from "./components/Typinganimation";

const Home: FC = () => {
  const siteTitle = "オーガのサイト";
  const pageTitle = "オーガの遊び場";
  const categories = [
    "Profile",
    "Skills",
    "Hobbies",
    "Prodaucts",
    "推し",
    "Future",
  ];
  const explains = [
    "名前は、オーガといいます！　２６歳です。　新潟出身で現在は、東京でエンジニアをやっています。　好きな食べ物は、パスタです。お酒も好きです。将来の夢は、エンタメサービスのバックエンドをつくること。",
    "スキルは、Go、Node、バックエンドの言語を用いた開発ができます。フロントは少しです。あと、保守の経験もあるので障害対応もできます。",
    "趣味は、モンハン、ドラクエ、ゼノブレイド、ハイキュー、が好きです。ダーツとかもやります。",
    "今まで作った制作物はこちらです。",
    "推しは、山本彩です！",
    "将来は、エンジニアでワクワクできるサービスを作りたいです。",
  ];
  const scrollTitle = "オーガの遊び場";
  return (
    <div className={styles.body}>
      <Header title={siteTitle} />
      <Title title={pageTitle} />
      <TypingAnimation
        text={"王 立 古 生 物 書 隊 情 報 分 隊 技 術 部 所 属 "}
      />
      {[...Array(6)].map((_, index) => (
        <Section
          key={index}
          index={index}
          contents={categories[index]}
          explain={explains[index]}
        />
      ))}
      <MouseTracking />
      <HorizontalScroll title={scrollTitle} />
      <Footer />
    </div>
  );
};

export default Home;
