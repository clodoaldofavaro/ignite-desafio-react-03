import { useContextSelector } from 'use-context-selector'
import { BlogPostsContext } from '../../../../contexts/BlogPostsContext'
import { BlogPostsContainer } from './styles'

export function BlogPosts() {
  const blogPosts = useContextSelector(BlogPostsContext, (context) => {
    return context.blogPosts
  })

  return (
    <BlogPostsContainer>
      <div className="posts-grid">
        {blogPosts.map((blogPost) => {
          return (
            <div className="post-card" key={blogPost.number}>
              <header>
                <h2>{blogPost.title}</h2>
              </header>
              <main>{blogPost.body.substring(0, 300)}...</main>
            </div>
          )
        })}
      </div>
    </BlogPostsContainer>
  )
}
