import { useContextSelector } from 'use-context-selector'
import { BlogPostsContext } from '../../../../contexts/BlogPostsContext'
import { BlogPostsContainer } from './styles'
import Markdown from 'react-markdown'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function BlogPosts() {
  const blogPosts = useContextSelector(BlogPostsContext, (context) => {
    return context.blogPosts
  })

  const formatDate = (date: string): string => {
    const formatted = formatDistanceToNow(new Date(date), {
      addSuffix: true,
      locale: ptBR,
    })

    const firstLetter = formatted.charAt(0).toUpperCase()

    return `${firstLetter}${formatted.slice(1)}`
  }

  return (
    <BlogPostsContainer>
      <div className="posts-grid">
        {blogPosts.map((blogPost) => {
          return (
            <div className="post-card" key={blogPost.number}>
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
