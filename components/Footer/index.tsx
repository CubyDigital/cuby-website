import React from 'react';
import { ContainerFooter, Rocket, Assinatura, Logos } from './styles';

export default function Footer() {
  return (
      <ContainerFooter>
        <Rocket>
          <img src='/assets/footer/rocket.svg' />
        </Rocket>
        <Assinatura>
          <div><strong>Cuby Serviços Digitais</strong>&nbsp;© {new Date().getFullYear()} Todos os direitos reservados</div>
          <Logos>
            <a href="https://nodejs.org/" target="_blank"><img src='/assets/footer/logos/node.svg' /></a>
            <a href="https://reactjs.org" target="_blank"><img src='/assets/footer/logos/react.svg' /></a>
            <a href="http://www.ecma-international.org/ecma-262/" target="_blank"><img src='/assets/footer/logos/javascript.svg' /></a>
            <a href="https://www.typescriptlang.org" target="_blank"><img src='/assets/footer/logos/typescript.svg' /></a>
            <a href="https://www.sketch.com/" target="_blank"><img src='/assets/footer/logos/sketch.svg' /></a>
            <a href="https://www.figma.com/" target="_blank"><img src='/assets/footer/logos/figma.svg' /></a>
            <a href="https://github.com/" target="_blank"><img src='/assets/footer/logos/github.svg' /></a>
            <a href="https://www.docker.com/" target="_blank"><img src='/assets/footer/logos/docker.svg' /></a>
            <a href="https://www.postgresql.org/" target="_blank"><img src='/assets/footer/logos/postgres.svg' /></a>
            <a href="https://www.mysql.com/" target="_blank"><img src='/assets/footer/logos/mysql.svg' /></a>
          </Logos>
        </Assinatura>
      </ContainerFooter>
  )
}

