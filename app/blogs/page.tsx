import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getQiitaArticles, getZennArticles } from "@/lib/getArticle";
import BlogPage from "@/pages/BlogPage";
import React, { Suspense } from "react";
import Loading from "../loading";

export default async function blog() {
  const siteTitle = "ブログ";
  const qiita_articles = await getQiitaArticles();
  const zenn_articles = await getZennArticles();
  const articles = qiita_articles.concat(zenn_articles);

  return (
    <>
      <Header title={siteTitle} />
      <Suspense fallback={<Loading></Loading>}>
        <BlogPage articles={articles} />
      </Suspense>
      <Footer />
    </>
  );
}
