import React, { ReactNode, FunctionComponent } from 'react'
import styled from 'styled-components';

type Props = {
  children?: ReactNode
}

const Container: FunctionComponent = ({ children }: Props) => {
  return <Default>{children}</Default>
}

export default Container

const Default = styled.div`
    width: 80%;
    max-width: 800px;
    margin: 120px auto 0;

    font-family: Mukta, Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif;
    font-size: 1.3em; 
    background-color: #F6F1F1;
    text-align: justify;

    p {
      line-height: 1.7em
    }
    h1, h2, h3, h4, h5, h6 {
      text-align: left;
      margin: 40px 0;
    }

    img {
      max-width: 100%;
    }
`;