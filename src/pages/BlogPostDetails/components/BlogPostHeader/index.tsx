import { BlogPostHeaderContainer } from './styles'
import { useParams, Link } from 'react-router-dom'
import { BlogPostsContext } from '../../../../contexts/BlogPostsContext'
import { UserProfileContext } from '../../../../contexts/UserProfileContext'
import { useContextSelector } from 'use-context-selector'
import { ArrowSquareOut, CaretLeft } from 'phosphor-react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faCalendarDay } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function BlogPostHeader() {
  const { postNumber } = useParams()

  const formatDate = (date: string): string => {
    const formatted = formatDistanceToNow(new Date(date), {
      addSuffix: true,
      locale: ptBR,
    })

    const firstLetter = formatted.charAt(0).toUpperCase()

    return `${firstLetter}${formatted.slice(1)}`
  }

  const postNumberAsNumber = Number(postNumber)

  const blogPosts = useContextSelector(BlogPostsContext, (context) => {
    return context.blogPosts
  })

  const userProfile = useContextSelector(UserProfileContext, (context) => {
    return context.userProfile
  })

  const blogPost = blogPosts.find((post) => post.number === postNumberAsNumber)

  console.log(blogPost)

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
        <footer>
          <div className="footer-item">
            <FontAwesomeIcon icon={faGithub} size="1x" />
            <span>{userProfile.userName}</span>
          </div>
          <div className="footer-item">
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>
              {blogPost?.updatedAt ? formatDate(blogPost.updatedAt) : ''}
            </span>
          </div>
          <div className="footer-item">
            <FontAwesomeIcon icon={faComment} size="1x" />
            <span>
              {blogPost?.commentsCount}{' '}
              {blogPost?.commentsCount === 1 ? 'comentário' : 'comentários'}
            </span>
          </div>
          <span></span>
        </footer>
      </div>
    </BlogPostHeaderContainer>
  )
}
