import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://t09-blog.com/',
      lastModified: new Date(),
    },
    {
      url: 'https://t09-blog.com/profile',
      lastModified: new Date(),
    },
    {
      url: 'https://t09-blog.com/skills',
      lastModified: new Date(),
    },
    {
        url: 'https://t09-blog.com/blogs',
        lastModified: new Date(),
    },
  ]
}