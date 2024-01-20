import { Header } from "@/components/Header";
import { Box, Text, Heading } from "../../common/components";
import PolicyPage from "@/pages/PolicyPage";
import { Footer } from "@/components/Footer";

function Policy() {
  const siteTitle = "プライバシーポリシー";
  return (
    <>
      <Header title={siteTitle} />
      <PolicyPage />
      <Footer />
    </>
  );
}

export default Policy;
