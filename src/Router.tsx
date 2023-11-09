import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { BlogPostDetails } from './pages/BlogPostDetails'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/:postNumber" element={<BlogPostDetails />} />
      </Route>
    </Routes>
  )
}
