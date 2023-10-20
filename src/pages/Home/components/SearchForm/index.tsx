import { SearchFormContainer } from './styles'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContextSelector } from 'use-context-selector'
import { memo } from 'react'
import { Search } from 'react-router-dom'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

function SearchFormComponent() {
  // TODO fetch blog posts with useContextSelector
  const fetchBlogPosts = (query: string) => {
    let data = []
    const promise = new Promise((resolve, _) => {
      setTimeout(() => {
        console.log(query)
        data = [
          {
            title: 'Hello',
            time: 'Há 1 dia',
            content: 'Blablablabla',
          },
        ]

        resolve(data)
      }, 200)
    })

    return promise
  }

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  // TODO handleSearchBlogPosts
  async function handleSearchBlogPosts(data: SearchFormInputs) {
    await fetchBlogPosts(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchBlogPosts)}>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </SearchFormContainer>
  )
}

export const SearchForm = memo(SearchFormComponent)
