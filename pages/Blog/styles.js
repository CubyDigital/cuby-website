import styled from 'styled-components';

export const Container = styled.div`
margin: 140px auto 0;
  color: #b2dd4c;
`; 

export const Cards = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 50px auto;
  outline: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  a {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 8px;
    border: solid 1px rgba(100,100,100,0.1);  
    max-width: 280px;
    height: 300px;
    box-shadow: 0px 1px rgba(100,100,100,0.1);
    margin: 0 20px 50px;
    
    text-decoration: none;
    align-items: center;
    
    transition: transform 0.2s;
    /* mesmo elemento hover */
    &:hover {
      transform: translateY(-5px);
    }

    img {
      margin-top: 0;
      margin-bottom: 20px;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      width: 100%;
      height: 140px;
    }

    div {
      max-width:100%;
      min-width:230px;
      padding: 0 18px;

      span {
        font-size: 18px;
        color: #3d3d4d;
      }

      .data {
        flex-direction: row;
        font-size: 12px;
        color: #BBB;
        margin-top: 10px;
        line-height: 11px;
        padding:0;
        justify-content: center;
        
        span {
          padding: 0 5px;
          color: #b2dd4c;
          font-weight: bold;
          font-size: 12px;
          border-left: solid 1px #EEE;

          &:first-child {
            margin-left: 5px;
          }
        }

      }

      .lead {
        font-size: 12px;
        line-height: 15px;
        color: #a8a8b3;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;