import { ReactNode, useCallback, useEffect, useState } from 'react'

import { createContext } from 'use-context-selector'

interface BlogPosts {
  fullName: string
  userName: string
  bio: string | null
  avatarUrl: string
  company: string | null
  htmlUrl: string
  followersCount: number
}

interface BlogPostsResponse {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
  name: string
  company: string | null
  blog: string
  location: string | null
  email: null | string
  hireable: null | boolean
  bio: string | null
  twitter_username: null | string
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: string
  updated_at: string
}

interface BlogPostsContextType {
  blogPosts: BlogPosts
  fetchBlogPosts: () => Promise<void>
}

interface BlogPostsProviderProps {
  children: ReactNode
}

export const BlogPostsContext = createContext({} as BlogPostsContextType)

export function BlogPostsProvider({ children }: BlogPostsProviderProps) {
  const [blogPosts, setBlogPosts] = useState<BlogPosts[]>([])

  const fetchBlogPosts = useCallback(async () => {
    const response = await fetch(
      'https://api.github.com/repos/clodoaldo-favaro/github-blog-posts/issues',
    )
    const blogPostsResponse = await response.json()
    const blogPostsData = parseBlogPostsResponse(blogPostsResponse)

    setBlogPosts(blogPostsData)
  }, [])

  const parseBlogPostsResponse = (response: BlogPostsResponse): BlogPosts => {
    return {
      fullName: response.name,
      userName: response.login,
      bio: response.bio,
      avatarUrl: response.avatar_url,
      company: response.company,
      htmlUrl: response.html_url,
      followersCount: response.followers,
    }
  }

  useEffect(() => {
    fetchBlogPosts()
  }, [fetchBlogPosts])

  return (
    <BlogPostsContext.Provider
      value={{
        blogPosts,
        fetchBlogPosts,
      }}
    >
      {children}
    </BlogPostsContext.Provider>
  )
}
