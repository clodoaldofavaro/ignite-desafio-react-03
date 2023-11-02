import { SearchFormContainer } from './styles'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContextSelector } from 'use-context-selector'
import { memo } from 'react'
import { BlogPostsContext } from '../../../../contexts/BlogPostsContext'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

function SearchFormComponent() {
  // TODO fetch blog posts with useContextSelector
  const fetchBlogPosts = useContextSelector(BlogPostsContext, (context) => {
    return context.fetchBlogPosts
  })

  const blogPostsCounter = useContextSelector(BlogPostsContext, (context) => {
    return context.blogPostsCounter
  })

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  // TODO handleSearchBlogPosts
  async function handleSearchBlogPosts(data: SearchFormInputs) {
    await fetchBlogPosts(data.query)
  }

  const quantity = blogPostsCounter()

  const quantityText = () => {
    if (quantity === 1) {
      return 'publicação'
    }

    return 'publicações'
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchBlogPosts)}>
      <div>
        <h3>Publicações</h3>
        <span>{`${quantity} ${quantityText()}`}</span>
      </div>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </SearchFormContainer>
  )
}

export const SearchForm = memo(SearchFormComponent)
