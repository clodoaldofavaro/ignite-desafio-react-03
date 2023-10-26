import { ReactNode, useCallback, useEffect, useState } from 'react'

import { createContext } from 'use-context-selector'

interface BlogPost {
  title: string
  body: string
  commentsCount: number
  number: number
  updatedAt: string
  createdAt: string
}

interface BlogPostResponse {
  title: string
  body: string
  comments: number
  number: number
  updated_at: string
  created_at: string
}

interface BlogPostsContextType {
  blogPosts: BlogPost[]
  fetchBlogPosts: (query?: string) => Promise<void>
}

interface BlogPostsProviderProps {
  children: ReactNode
}

export const BlogPostsContext = createContext({} as BlogPostsContextType)

export function BlogPostsProvider({ children }: BlogPostsProviderProps) {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])

  const fetchBlogPosts = useCallback(async () => {
    const response = await fetch(
      'https://api.github.com/repos/clodoaldo-favaro/github-blog-posts/issues',
    )
    const blogPostsResponse = await response.json()

    setBlogPosts(parseBlogContextResponse(blogPostsResponse))
  }, [])

  const parseBlogContextResponse = (
    response: BlogPostResponse[],
  ): BlogPost[] => {
    return response.map((post) => {
      return {
        title: post.title,
        body: post.body,
        commentsCount: post.comments,
        createdAt: post.created_at,
        updatedAt: post.updated_at,
        number: post.number,
      }
    })
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
