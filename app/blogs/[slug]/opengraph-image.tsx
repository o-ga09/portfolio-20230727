import { loadGoogleFont } from '../../lib/font';
import { ImageResponse } from 'next/server';
import { getarticleById } from '../page';

/** ImageResponse対応 */
export const runtime = 'nodejs';
/** 有効期間 */
export const revalidate = 10;

/** 13.3.0現在ここを動的にはできない */
export const alt = '記事のアイキャッチ画像';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

type Props = {
  params: { param_id: string };
};

export default async function og({ params: { param_id } }: Props) {
  const notoSansArrayBuffer = await loadGoogleFont({
    family: 'Noto Sans JP',
    weight: 700,
  });

  const regex = /(\d+)/;
  const match = regex.exec(param_id);
  let id: number;
  if(match){
    console.log(match[1]);
    id = parseInt(match[1]) - 1;
  } else{
    id = 0;
  }
  const post = await getarticleById(id);
  if (post) {
    return new ImageResponse(
      (
        <div
          style={{
            background: 'linear-gradient(yellow, pink)',
            width: '1200px',
            height: '630px',
            display: 'flex',
            alignItems: 'center',
            justifyItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontSize: 56,
              background: 'white',
              width: '90%',
              height: '90%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {post.frontmatter.title}
          </div>
        </div>
      ),
      {
        ...size,
        fonts: [
          {
            name: 'NotoSansJP',
            data: notoSansArrayBuffer,
            style: 'normal',
            weight: 700,
          },
        ],
      }
    );
  } else {
    return new Response('Not Found', { status: 404 });
  }
}