import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import React from 'react'
import { Box, Grid, GridItem, Heading , Text } from '@/app/common/components';
import { getArticle } from '../page';
import { BlogCard } from '@/app/components/Card';
import Image from 'next/image';
import markdownToHtml from 'zenn-markdown-html';
import 'zenn-content-css';
import "./contents.css"
import Article from '@/app/components/Article';

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
    const contentHtml = markdownToHtml(content);

    const articles = await getArticle();
    return (
        <Box>
            <Box p={1}>
                <Box
                    display='flex'
                    justifyContent='center'
                >
                    <Image
                        src={`/${data.image}`}
                        width={100}
                        height={300}
                        alt={data.title}
                    />
                </Box>
            </Box>
            <Heading display='flex' justifyContent='center' p={1}>{title}</Heading>
            <Article content={contentHtml} />

            <Heading as='h2' textAlign='center'>最新の他の記事</Heading>
            <Box display='flex' justifyContent='center' p={1} marginY={16}>
                {articles.length === 0 ?
                (
                    <></>
                ) :
                (
                <Grid
                    templateColumns={{ base: 'repeat(1, 0fr)', md: 'repeat(3, 0fr)' }}
                    gap={6}
                >
                    {articles && articles.length > 0 && articles.map((article, index) => (
                        <GridItem key={index}>
                            <BlogCard title={article.frontmatter.title} postday={article.frontmatter.date} slug={article.slug} image={article.frontmatter.image} />
                        </GridItem>
                    ))}
                </Grid>
                )
                }
            </Box>
        </Box>
    )
}