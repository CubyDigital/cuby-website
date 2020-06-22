import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { parseISO, format } from 'date-fns'
import { ptBR } from 'date-fns/locale';

import Header from 'components/Header';
import Footer from 'components/Footer';

import { getAllPosts } from 'lib/api';
import Post from 'types/post';

import { Container, Cards } from './styles';

//** TO DO LIST: Menu flutuante com as categorias dos posts (curso, empreendedorismo, etc...) */

type Props = {
  allPosts: Post[]
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'lead',
    'categories',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}

const Protfolio = ({ allPosts }: Props) => {

  const filteredPosts = allPosts.filter(item => item.categories.includes('portfólio'))

  const posts = filteredPosts.slice(0,9)
  const morePosts = filteredPosts.slice(10)
  
  return ( 
    <>
      <Header page="portfolio" />
      <Container>

        <Cards>
            {posts.map((post) => (
                <Link key={post.slug} href={`blog/posts/${post.slug}`} passHref>
                  <a href={`blog/posts/${post.slug}`} >
                    <img
                      style={{ maxWidth: 300 }}
                      src={post.coverImage}
                      alt={post.title}
                    />
                    <div>
                      <span>{post.title}</span>
                      <p className="data">{format(parseISO(post.date), `dd'/'MM'/'yyyy`, { locale: ptBR })}
                      {
                        post.categories.map(item => (
                          <span key={item}>{item}</span>
                        ))
                      }
                      </p>
                      <p className="lead">{post.lead}</p>
                    </div>
                  </a>
                </Link>
            ))}
          </Cards>

      </Container>
      <Footer />
    </>
  )
};

export default Protfolio;
