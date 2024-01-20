import { Box } from "@/common/components";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import AboutPage from "@/pages/AboutPage";
import React from "react";

function about() {
  const siteTitle = "Resume...";
  return (
    <Box w={"100%"} h={"100%"} bgColor={"teal.200"}>
      <Header title={siteTitle} />
      <AboutPage />
      <Footer />
    </Box>
  );
}

export default about;
