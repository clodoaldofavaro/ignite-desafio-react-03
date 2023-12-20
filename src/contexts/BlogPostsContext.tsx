import { ReactNode, useCallback, useEffect, useState } from 'react'

import { createContext } from 'use-context-selector'

interface BlogPost {
  title: string
  body: string
  commentsCount: number
  number: number
  updatedAt: string
  createdAt: string
  url: string
}

interface BlogPostResponse {
  title: string
  body: string
  comments: number
  number: number
  updated_at: string
  created_at: string
  html_url: string
}

interface BlogPostsContextType {
  blogPosts: BlogPost[]
  fetchBlogPosts: (query?: string) => Promise<void>
  blogPostsCounter: () => number
}

interface BlogPostsProviderProps {
  children: ReactNode
}

export const BlogPostsContext = createContext({} as BlogPostsContextType)

export function BlogPostsProvider({ children }: BlogPostsProviderProps) {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])

  const fetchBlogPosts = useCallback(async (query?: string) => {
    const response = await fetch(
      'https://api.github.com/repos/clodoaldo-favaro/blog/issues',
    )
    let blogPostsResponse = await response.json()

    if (query) {
      const lowerCaseQuery = query.toLowerCase()

      blogPostsResponse = blogPostsResponse.filter(
        (post: BlogPostResponse) =>
          post.title.toLowerCase().includes(lowerCaseQuery) ||
          post.body.toLowerCase().includes(lowerCaseQuery),
      )
    }

    blogPostsResponse.sort((a: BlogPost, b: BlogPost) => a.number - b.number)

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
        url: post.html_url,
      }
    })
  }

  const blogPostsCounter = () => blogPosts.length

  useEffect(() => {
    fetchBlogPosts()
  }, [fetchBlogPosts])

  return (
    <BlogPostsContext.Provider
      value={{
        blogPosts,
        fetchBlogPosts,
        blogPostsCounter,
      }}
    >
      {children}
    </BlogPostsContext.Provider>
  )
}
