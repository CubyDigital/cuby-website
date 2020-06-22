import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'

import Header from 'components/Header';
import Footer from 'components/Footer';

import { getPostBySlug, getAllPosts } from 'lib/api'

import Container from 'components/Blog/container'
import PostBody from 'components/Blog/post-body'
import PostHeader from 'components/Blog/post-header'
import PostTitle from 'components/Blog/post-title'

import markdownToHtml from 'lib/markdownToHtml'
import PostType from 'types/post'

type Props = {
  post: PostType
  morePosts: PostType[]
}

const Post = ({ post, morePosts}: Props) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <>
      <Header page="blog">{post.title}</Header>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  Cuby :: {post.title}
                </title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
      <Footer />
    </>
  )
}

export default Post

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'categories',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      }
    }),
    fallback: false,
  }
}
