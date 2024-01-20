import { Box } from "@/common/components";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import AboutPage from "@/pages/AboutPage";
import React from "react";

function about() {
  const siteTitle = "Resume...";
  return (
    <>
      <Header title={siteTitle} />
      <AboutPage />
      <Footer />
    </>
  );
}

export default about;
