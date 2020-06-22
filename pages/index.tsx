import React from 'react';
import Link from 'next/link';

import { parseISO, format } from 'date-fns'
import { ptBR } from 'date-fns/locale';

import { Button, Input, Icon, Select } from "semantic-ui-react";

import Header from 'components/Header';
import Footer from 'components/Footer';

import { getAllPosts } from 'lib/api'
import Post from 'types/post'

import { GrInstagram, GrTwitter } from "react-icons/gr";
import { FaFacebookSquare } from "react-icons/fa";

import { Container, Cards, Social, DivPlane, FormContainer, Form } from './index-styles';

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

export default function Home({ allPosts }: Props) {

  const ligarQuando = [
    { key: 0, value: 'Agora', text: 'Agora' },
    { key: 1, value: 'Em 30 min', text: 'Em 30 min' },
    { key: 2, value: 'Em 1 hora', text: 'Em 1 hora' },
    { key: 3, value: 'Em 2 horas', text: 'Em 2 horas' },
    { key: 4, value: 'Amanhã de manhã', text: 'Amanhã de manhã' },
    { key: 5, value: 'Amanhã à tarde', text: 'Amanhã à tarde' },
    { key: 6, value: 'Amanhã à noite', text: 'Amanhã à noite' }
  ]

  const post1 = allPosts[0]
  const post2 = allPosts[1]
  const post3 = allPosts[2]

  const posts = [
    {
      id: 1,
      uri: post1.coverImage,
      title: post1.title,
      date: format(parseISO(post1.date), `d 'de' LLLL '/' yyyy`, { locale: ptBR }), 
      link: `blog/posts/${post1.slug}`,
      categories: post1.categories,
      lead: post1.lead
    },
    {
      id: 2,
      uri: post2.coverImage,
      title: post2.title,
      date: format(parseISO(post2.date), `d 'de' LLLL '/' yyyy`, { locale: ptBR }), 
      link: `blog/posts/${post2.slug}`,
      categories: post2.categories,
      lead: post2.lead
    },
    {
      id: 3,
      uri: post3.coverImage,
      title: post3.title,
      date: format(parseISO(post3.date), `d 'de' LLLL '/' yyyy`, { locale: ptBR }), 
      link: `blog/posts/${post3.slug}`,
      categories: post3.categories,
      lead: post3.lead
    },
  
  ];

  function handleLigueMe() {
    alert('ligando...')
  }

  return ( 
    <>
      <Header page="inicio" />
      <Container>
        <img  
          className="heroText"
          src="/assets/images/hero_text.svg"
        /> 
        <img
          className="heroBanner"
          src="/assets/images/hero_banner.svg"  
        />

        <h2>RECENTES NO BLOG</h2>
        <h5>Informações do mundo da tecnologia, cursos e dicas para desenvolvedores e empreendedores</h5>

        <Cards>
          {posts.map((post) => (
              <Link key={post.id} href={post.link} passHref>
                <a href={post.link}>
                  <img
                    style={{ maxWidth: 300 }}
                    src={post.uri}
                    alt={post.title}
                  />
                  <div>
                    <span>{post.title}</span>
                    <p className="data">{post.date}
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


        <Social>
          <a href="https://facebook.com/CubyDigital" target="_blank"><FaFacebookSquare size={30} color="#4267B2" /></a>
          <a href="https://instagram.com/CubyDigital" target="_blank"><GrInstagram size={28} color="#C13584" /></a>
          <a href="https://twitter.com/CubyDigital" target="_blank"><GrTwitter size={30} color="#1DA1F2" /></a>
        </Social>

        <DivPlane>  
          <img className="planeImage" src="/assets/images/plane.svg" />
        </DivPlane>

        <FormContainer>
          <h2>VAMOS TRABALHAR JUNTOS?</h2>
          <h5 style={{ marginBottom: '50px'}}>Digite seu nome e telefone que ligamos pra você.</h5>
          
          <span>
            <img className="megafone" src='/assets/images/megafone.svg' />
            <Form>
              <Input className="inputForm" icon='user' color="#b2dd4c" iconPosition='left' placeholder='seu nome...' />
              <Input className="inputForm" icon='phone' color="#b2dd4c" iconPosition='left' placeholder='melhor telefone de contato...' />
              <span>
                <Button className="buttonForm" onClick={()=>handleLigueMe()} icon labelPosition='right'>
                  <Icon name="angle double right" />
                  ME LIGUE
                </Button>
                <Select className="selectForm" placeholder='Agora' options={ligarQuando} />
              </span>
              <Link href="/contato">prefiro o bom e velho formulário de contato</Link>
            </Form>
            
          </span>
          
        </FormContainer>
        

      </Container>
      <Footer />
    </>
  );
}