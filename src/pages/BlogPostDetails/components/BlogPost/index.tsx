import { useParams } from 'react-router-dom'
import { BlogPostsContext } from '../../../../contexts/BlogPostsContext'
import { useContextSelector } from 'use-context-selector'
import Markdown from 'react-markdown'
import { BlogPostHeader } from '../BlogPostHeader'
import { BlogPostBodyContainer } from './styles'
import { UserProfileContext } from '../../../../contexts/UserProfileContext'

export function BlogPost() {
  const { postNumber } = useParams()

  const postNumberAsNumber = Number(postNumber)

  const blogPosts = useContextSelector(BlogPostsContext, (context) => {
    return context.blogPosts
  })

  const userProfile = useContextSelector(UserProfileContext, (context) => {
    return context.userProfile
  })

  const blogPost = blogPosts.find((post) => post.number === postNumberAsNumber)

  console.log(userProfile)

  return (
    <>
      <BlogPostHeader></BlogPostHeader>
      <BlogPostBodyContainer>
        <Markdown>{blogPost?.body}</Markdown>
      </BlogPostBodyContainer>
    </>
  )
}
