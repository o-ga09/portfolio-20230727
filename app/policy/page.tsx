import { Header } from "@/components/Header";
import { Box, Text, Heading } from "../../common/components";
import PolicyPage from "@/pages/PolicyPage";
import { Footer } from "@/components/Footer";

function Policy() {
  const siteTitle = "プライバシーポリシー";
  return (
    <Box w={"100%"} h={"100%"} bgColor={"teal.200"}>
      <Header title={siteTitle} />
      <PolicyPage />
      <Footer />
    </Box>
  );
}

export default Policy;
