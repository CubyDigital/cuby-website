import Author from './author'

type PostType = {
  title: string
  lead: string
  date: string
  coverImage: string
  categories: string[]
  tags: string[]
  author: Author
  slug: string
  ogImage: {
    url: string
  }
  content: string
}

export default PostType