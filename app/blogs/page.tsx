import fs from 'fs';
import path from "path";
import matter from 'gray-matter';
import { Box, Flex, Grid, GridItem, Heading, Text } from "../common/components";
import { BlogCard } from "../components/Card";

export async function getArticle() {
  // contentディレクトリ内のマークダウンファイル一覧を取得
  const postsDirectory = path.join(process.cwd(), 'contents');
  const fileNames = fs.readdirSync(postsDirectory);

  // 各ファイルの中身を取得
  const posts = await Promise.all(
    // 各ファイル情報を取得
    fileNames.map(async (fileName) => {
      const filePath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);

      // slugとfrontmatter(title, date, description)を取得
      return {
        slug: fileName.replace('.md', ''),
        frontmatter: data,
      };
    })
  ).then((posts) =>
    // 最新日付順に並び替え
    posts.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime())
  );
  return posts
};
export default async function Blogs() {
  const articles = await getArticle();
  
  return (
    <>
      <Box
        p={4}
        marginX='auto'
      >
        <Heading marginBottom={16} textDecoration='underline' textAlign='center'>ブログ一覧</Heading>
        <Grid
          templateColumns={{ base: 'repeat(1, 0fr)', md: 'repeat(3, 0fr)' }}
          gap={6}
        > 
          <>
            {articles.map((post) => (
              <GridItem key={post.slug}><BlogCard title={post.frontmatter.title} postday={post.frontmatter.date} slug={post.slug} image={post.frontmatter.image}/></GridItem>
            ))}
          </>
        </Grid>
      </Box>
    </>
  )
}