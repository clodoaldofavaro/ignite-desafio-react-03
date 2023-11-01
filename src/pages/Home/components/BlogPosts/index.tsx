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

  console.log(blogPosts)

  return (
    <BlogPostsContainer>
      <div className="posts-grid">
        {blogPosts.map((blogPost) => {
          return (
            <div className="post-card" key={blogPost.number}>
              <header>
                <h2>{blogPost.title}</h2>
                <span>
                  {formatDistanceToNow(new Date(blogPost.updatedAt), {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </span>
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
