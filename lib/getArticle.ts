import Parser from "rss-parser";

export async function getQiitaArticles():Promise<ArticleInfo[]> {
    const headers = new Headers();
    headers.append("Authorization", `Bearer ${process.env.NEXT_PUBLIC_QIITA_TOKEN}`);
    
    const response = await fetch(
        "https://qiita.com/api/v2/items?query=user:o-ga",
        { headers }
    );

    
    const data = await response.json();
    const articles: ArticleInfo[] = data.map((item:any) => {
        return {id: item.id, title: item.title,created_at: new Date(item.created_at).toLocaleString(), icon: "qiita", url: item.url}
    })
    return articles
}

export async function getZennArticles():Promise<ArticleInfo[]> {
    const parser = new Parser();
    const feed = await parser.parseURL("https://zenn.dev/o_ga/feed");
    const items = feed.items.map((data) => {
        return data;
    });
    const response = items.map((item) => {
        return {
            id: item.guid, 
            title: item.title, 
            icon: "zenn", 
            created_at: item.pubDate,
            url: item.link
        }
    })
    const articles: ArticleInfo[] = response.map((item:any) => {
        return {id: item.id, title: item.title,created_at: new Date(item.created_at).toLocaleString(), icon: "zenn", url: item.url}
    })
    return articles
}