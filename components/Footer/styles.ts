import styled from 'styled-components';

export const ContainerFooter = styled.div`
  position: relative;
  z-index: 5;

  width: 100%;
  margin: auto;
  
  padding: 0 1.25rem;
  
  margin-top: 0px;
  background: #F6F1F1 url('/assets/footer/nuvens.png') repeat-x 100% bottom;
`;

export const Rocket = styled.div`
    margin: auto;
    width: 100%;
    max-width: 960px;
    margin-top: 0px;
    padding-right: 5%;
    display: flex;
    justify-content: flex-end;
  
    img {
        max-height: 600px;
        margin-top: -40px;
        position: relative;
        z-index: 8;
    } 
`;

export const Assinatura = styled.div`
    margin: auto;
    color: #626262;
    max-width: 960px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    vertical-align: bottom;
    @media only screen and (max-width: 375px) {
      html {
        justify-content: center;
      }
    }

    & > div {
      margin-top: auto;
      padding-bottom: 30px;
    }
`;

export const Logos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  position: relative;
  z-index: 12;
  
  & > a {
    margin-left: 8px;
    transition: transform 0.2s;
    
    & > img {
      border-radius: 4px;
    }
    :hover {
      transform: translateY(-5px);
    }
  }


  
`;