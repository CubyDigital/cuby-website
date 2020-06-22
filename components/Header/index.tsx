import React, { useState } from 'react';

import Head from 'next/head';
import Meta from '../Meta';
import Link from 'next/link'

import { Container, Content960px, MenuWeb, MenuMobile, MenuItem } from './styles';

interface PropHeader {
  page: string
}

const Header: React.FC<PropHeader> = ({page}) => {

  const [activeItem, setActiveItem] = useState('inicio');
  const menu = [
    {
      name: "inicio",
      text: "início",
      active: page==="inicio" ? true : false ,
      link: "/",
    },
    {
      name: "blog",
      text: "blog",
      active: page==="blog" ? true : false ,
      link: "/blog",
    },
    {
      name: "portfolio",
      text: "portfólio",
      active: page==="portfolio" ? true : false ,
      link: "/portfolio",
    },
    {
      name: "servicos",
      text: "serviços",
      active: page==="servicos" ? true : false ,
      link: "/servicos",
    },
    {
      name: "precos",
      text: "preços",
      active: page==="precos" ? true : false ,
      link: "/precos",
    },
    {
      name: "contato",
      text: "contato",
      active: page==="contato" ? true : false ,
      link: "/contato",
    },
  ];


  function handleItemClick(page: string) {
    alert(page);
    setActiveItem(page);
  }

  return (
    <>
      <Head>
        <title>Prazer, Cuby!</title>
        <Meta />
      </Head>
      <Container>
        <Content960px>
            { 
            page==="blog"
              ?  <img src="/assets/images/logo_blog.svg" onClick={() => handleItemClick('blog')} />
              :  <img src="/assets/images/logo_web.svg" onClick={() => handleItemClick('inicio')} />
            }
              <MenuWeb>
                {
                  menu.map(item=> (
                    <Link 
                      key={item.name}
                      href={item.link}>
                      <MenuItem 
                        key={item.name} 
                        active={item.active}
                      >
                        {item.text}
                      </MenuItem>
                    </Link>
                  ))
                }
              </MenuWeb>
            
            <MenuMobile></MenuMobile> 
        </Content960px>
      </Container> 
    </>
  );
}

export default Header;