import { HomeContainer } from './styles'
import { UserProfile } from './components/UserProfile'
import { BlogPostsProvider } from '../../contexts/BlogPostsContext'
import { BlogPosts } from './components/BlogPosts'

export function Home() {
  return (
    <HomeContainer>
      <UserProfile />
      <BlogPostsProvider>
        <BlogPosts />
      </BlogPostsProvider>
    </HomeContainer>
  )
}
