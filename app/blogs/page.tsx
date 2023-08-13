import fs from 'fs';
import path from "path";
import matter from 'gray-matter';
import Link from 'next/link';
import { Box, Flex, Grid, GridItem, Heading, Text } from "../common/components";
import { BlogCard } from "../components/Card";
import { ArticleAll } from "../const/const";


export default async function Blogs() {
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
  
  return (
    <>
        <Grid
            templateColumns={{ base: 'repeat(1, 0fr)', md: 'repeat(2, 0fr)' }}
            gap={6}
            marginX='auto'
            paddingTop={16}
          > 
            {ArticleAll.length === 0 ? (
              <>
                <Box
                  w='300px'
                  h='100px'
                >
                  <Flex direction='column'>
                    <Heading paddingBottom={4} textDecoration='underline' textAlign='center'>ブログ一覧</Heading>
                    <ul>
                    {posts.map((post) => (
                      <li key={post.slug}>
                        <Link href={`/blogs/${post.slug}`}>{post.frontmatter.title}</Link>
                    </li>
                    ))}
                    </ul>
                  </Flex>
                </Box>
              </>
            ) : (
              ArticleAll.map((title,index) => (
                <GridItem key={index}><BlogCard title={title} index={index} /></GridItem>
              ))
            )}
        </Grid>
    </>
  )
}