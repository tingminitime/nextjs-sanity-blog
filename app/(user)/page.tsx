import { previewData } from 'next/headers'
import { groq } from 'next-sanity'
import { client } from '@/lib/sanity.client'
import PreviewSuspense from '@/components/PreviewSuspense'
import PreviewBlogList from '@/components/PreviewBlogList'
import BlogList from '@/components/BlogList'

const query = groq`
  *[_type == 'post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`
// - groq 說明
// "*[_type == 'post']" : 取得全部 type 為 post
// "..." : all the field
// "->" : 類似 mongoose 的 populate 做查詢關聯 reference

function PreviewSuspenseFallback() {
  return (
    <div role="status">
      <p className="animate-pulse text-center text-lg text-zinc-800">
        Loading Preview Data...
      </p>
    </div>
  )
}

export default async function Home() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={<PreviewSuspenseFallback></PreviewSuspenseFallback>}
      >
        <PreviewBlogList query={query}></PreviewBlogList>
      </PreviewSuspense>
    )
  }

  const posts = await client.fetch(query)

  return <BlogList posts={posts}></BlogList>
}
