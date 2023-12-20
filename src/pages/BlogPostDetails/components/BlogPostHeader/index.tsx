import { BlogPostHeaderContainer } from './styles'
import { useParams, Link } from 'react-router-dom'
import { BlogPostsContext } from '../../../../contexts/BlogPostsContext'
import { UserProfileContext } from '../../../../contexts/UserProfileContext'
import { useContextSelector } from 'use-context-selector'
import { ArrowSquareOut, CaretLeft } from 'phosphor-react'

export function BlogPostHeader() {
  const { postNumber } = useParams()

  const postNumberAsNumber = Number(postNumber)

  const blogPosts = useContextSelector(BlogPostsContext, (context) => {
    return context.blogPosts
  })

  const userProfile = useContextSelector(UserProfileContext, (context) => {
    return context.userProfile
  })

  const blogPost = blogPosts.find((post) => post.number === postNumberAsNumber)
  console.log(blogPost)
  console.log(userProfile)

  return (
    <BlogPostHeaderContainer>
      <div className="header-links">
        <Link to="/">
          <CaretLeft /> Voltar
        </Link>
        <a href={blogPost?.url} target="_blank" rel="noreferrer">
          Ver no Github
          <ArrowSquareOut />
        </a>
      </div>

      <div>
        <h1>{blogPost?.title}</h1>
      </div>
    </BlogPostHeaderContainer>
  )
}
