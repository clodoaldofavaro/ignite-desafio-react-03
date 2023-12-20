import { useContextSelector } from 'use-context-selector'
import { BlogPostsContext } from '../../../../contexts/BlogPostsContext'
import { BlogPostsContainer } from './styles'
import Markdown from 'react-markdown'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { SearchForm } from '../SearchForm'
import { useNavigate } from 'react-router-dom'

export function BlogPosts() {
  const navigate = useNavigate()

  const blogPosts = useContextSelector(BlogPostsContext, (context) => {
    return context.blogPosts
  })

  debugger

  const formatDate = (date: string): string => {
    const formatted = formatDistanceToNow(new Date(date), {
      addSuffix: true,
      locale: ptBR,
    })

    const firstLetter = formatted.charAt(0).toUpperCase()

    return `${firstLetter}${formatted.slice(1)}`
  }

  const navigateToPostDetails = (postNumber: number) => {
    navigate('/' + postNumber)
  }

  return (
    <BlogPostsContainer>
      <SearchForm />
      <div className="posts-grid">
        {blogPosts.map((blogPost) => {
          return (
            <div
              className="post-card"
              key={blogPost.number}
              onClick={() => navigateToPostDetails(blogPost.number)}
            >
              <header>
                <h2>{blogPost.title}</h2>
                <span>{formatDate(blogPost.updatedAt)}</span>
              </header>
              <main>
                <Markdown>
                  {blogPost.body.length > 300
                    ? blogPost.body.substring(0, 300).concat('...')
                    : blogPost.body}
                </Markdown>
              </main>
            </div>
          )
        })}
      </div>
    </BlogPostsContainer>
  )
}
