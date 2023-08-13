import path from 'path';
import fs from 'fs';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';
import matter from 'gray-matter';
import React from 'react'
import './content.css';

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
    return (
        <div>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: contentHtml }}></div>
        </div>
    )
}