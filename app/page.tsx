import { FC } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Box } from "../common/components";
import "./globals.css";
import { MainPage } from "@/pages/MainPage";

const Home: FC = () => {
  const siteTitle = "o-ga's Profile";
  return (
    <>
      <Header title={siteTitle} />
      <MainPage />
      <Footer />
    </>
  );
};

export default Home;
