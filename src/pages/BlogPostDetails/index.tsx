import { BlogPost } from './components/BlogPost'
import { BlogPostsProvider } from '../../contexts/BlogPostsContext'

export function BlogPostDetails() {
  return (
    <BlogPostsProvider>
      <BlogPost />
    </BlogPostsProvider>
  )
}
