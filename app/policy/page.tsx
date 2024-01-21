import { Header } from "@/components/Header";
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
