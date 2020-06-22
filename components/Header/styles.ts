import React from 'react';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  
  width: 100%;
  position: fixed;
  background-color: #FFF;
  top:1px;
  z-index: 9999;
  box-shadow: 0px 0px 1em #ccc;
`; 

export const Content960px = styled.header`
  width: 95%;
  max-width: 960px;
  max-height: 60px;
  margin: 0 auto;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;

  img {
    max-height: 55px;
    margin-right: 10%;
  }
`;

export const MenuWeb = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
`;

export const MenuMobile = styled.div`
  display: none;
`;

interface MenuItemProps {
  active?: boolean;
}

// selected indicator 

const activeStyle = `
  border-bottom: solid 1px #b2dd4c;
  color: #000;
  position:relative;
  &&:after {
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid #b2dd4c;
    content: " ";
    position: absolute;
    bottom: -8px;
    left: calc( 50% - 8px);
  }
`;

export const MenuItem = styled.div<MenuItemProps>`

    display: flex;
    flex: 1;
    font-size: 0.95em;
    justify-content: center;
    align-items: center;  
    box-sizing: border-box;
    color: #666;

    ${props => props.active ? css`${activeStyle}` : '' };

    &&:hover {
      color: #000;
      cursor: pointer;
      background-color: rgba(155,155,155,0.1);
      border-bottom: solid 1px #b2dd4c;
    }

    &&:active {
      border-bottom: solid 3px #b2dd4c;
      
    }

`;
