import styled from 'styled-components';

export const Container = styled.div`
  width: 95%;
  max-width: 960px;
  margin: 140px auto 0;

  h5 {
    margin-top: -10px;
  }

  .heroText {
    width: 90%;
    max-width: 680px;
    display: block;
    position: relative;
    margin: 80px auto 1%;
    left: 3%;
    right: 3%;
  }

  .heroBanner {
    width: 100%;
    max-width: 960;
    display: block;
    margin: 0 auto 8%;
    padding-bottom: 8%;
    border-bottom: solid 1px #DDD;
  }
`; 

export const Cards = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 50px auto;
  outline: none;
  display: flex;
  flex: 1;

  @media screen and (max-width: 960px) {
    & {
      flex-direction: column;
      align-items: center; 
      flex-wrap: wrap;
    }      
  }

  @media screen and (min-width: 920px) {
    & {
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: nowrap;
    }   
  }

  a {
    display: flex;
    background: #fff;
    border-radius: 8px;
    border: solid 1px rgba(100,100,100,0.1);  
    max-width: 320px;
    height: 300px;
    box-shadow: 0px 1px rgba(100,100,100,0.1);
    
    @media screen and (max-width: 960px) {
      & {
        margin-top: 30px;
      }      
    }

    @media screen and (max-width: 499px) {
      & {
        width: 90%;
      }      
    }
    @media screen and (min-width: 500px) {
      & {
        width: 280px;
      }   
    }
    
    flex-direction: column;
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
          margin-left: 10px;
          padding: 0 10px;
          border-left: solid 1px #EEE;
          color: #b2dd4c;
          font-weight: bold;
          font-size: 12px;
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

export const Social = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 160px;
  margin: 60px auto 20px;
  text-align: center;
  align-items: center;
  justify-content: space-between;

  svg {
    display: block;
    margin:5px;
    transition: transform 0.2s;
    &:hover {
      transform: translateY(-3px);
    }
  }
`;

export const DivPlane = styled.div`
  width: 100%;
  max-width: 960px;
  margin-top:0;
  height: 40px;
  display: flex;
  flex: 1;

  .planeImage {
    position: absolute;
    right: -15px;
  }

`;

export const FormContainer = styled.div`
  width: 100%;
  padding: 60px 40px;
  max-width: 960px;
  margin: auto;
  border-radius: 12px;
  background-color: rgba(138,138,138,0.2);

  @media screen and (max-width: 700px) {
    & {
      margin-top: 110px;
    }      
  }

  & > span {
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media screen and (max-width: 700px) {
      & {
        flex-direction: column;
      }      
    }

    & > img {
      width: 35%;
      margin-right: 30px;
      @media screen and (max-width: 700px) {
        & {
          position: relative;
          width: 60%;
          margin: -10px auto 30px;
          right: -30px;
        }      
      }

    }
  }
`;

export const Form = styled.div`
  display: flex;
  flex:1;
  max-width: 60%;
  flex-direction: column;

  @media screen and (max-width: 700px) {
    & {
      max-width: 100%;
      width: 100%;
      margin: 10px auto 30px;
    }      
  }

  & > span {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media screen and (max-width: 500px) {
      & {
        flex-direction: column;
      }   
    }
  }

  & > a {
    color: gray;
    margin-top: 10px;
    text-decoration: underline;
    font-size: 0.9em;
  }

  .inputForm {
    margin-bottom: 10px;
    width: 100%;

    & > .icon {
      color: #b2dd4c;
    }
  }

  .buttonForm {
    background-color: #b2dd4c;
    max-width: 58%;
    width: 58%;
    height: 40px;
  }
  
  .selectForm {
    min-width: 10em !important;
    max-width: 40%;
    width:40%;
    height: 40px !important;
  }
`;