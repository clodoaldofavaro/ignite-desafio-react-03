import { useParams } from 'react-router-dom'
import { BlogPostsContext } from '../../../../contexts/BlogPostsContext'
import { useContextSelector } from 'use-context-selector'
import Markdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { BlogPostHeader } from '../BlogPostHeader'

export function BlogPost() {
  const { postNumber } = useParams()

  const postNumberAsNumber = Number(postNumber)

  const blogPosts = useContextSelector(BlogPostsContext, (context) => {
    return context.blogPosts
  })

  const blogPost = blogPosts.find((post) => post.number === postNumberAsNumber)

  return (
    <>
      <BlogPostHeader></BlogPostHeader>
      <Markdown>{blogPost?.body}</Markdown>
    </>
  )
}
