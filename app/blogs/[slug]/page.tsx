import path from 'path';
import fs from 'fs';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';
import matter from 'gray-matter';
import React from 'react'
import './content.css';
import { Box, Flex, Grid, GridItem, Heading } from '@/app/common/components';
import { getArticle } from '../page';
import { BlogCard } from '@/app/components/Card';

export default async function BlogDetail({ params, searchParams }:{
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }) {
    // URLのパラメータから該当するファイル名を取得 (今回は hello-world)
    const {slug} = params;
    const filePath = path.join(process.cwd(), 'contents', `${slug}.md`);

    // ファイルの中身を取得
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    const title = data.title; // 記事のタイトル
    const processedContent = await unified().use(remarkParse).use(remarkHtml).process(content);
    const contentHtml = processedContent.toString(); // 記事の本文をHTMLに変換

    const articles = await getArticle();
    return (
        <Box>
            <Heading display='flex' justifyContent='center'>{title}</Heading>
            <Box display='flex' justifyContent='center' marginBottom={16}>
                <div dangerouslySetInnerHTML={{ __html: contentHtml }}></div>
            </Box>
            <Box display='flex' justifyContent='center' p={1}>
                <Grid
                    templateColumns={{ base: 'repeat(1, 0fr)', md: 'repeat(3, 0fr)' }}
                    gap={6}
                >
                    {[...Array(3)].map((_, index) => (
                        <GridItem><BlogCard title={articles[index].frontmatter.title} postday={articles[index].frontmatter.date} index={articles[index].slug} /></GridItem>  
                    ))}
                </Grid>
            </Box>
        </Box>
    )
}