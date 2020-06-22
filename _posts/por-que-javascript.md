---
title: 'Desenvolvimento WEB: Por que JavaScript?'
lead: 'Considerações sobre o JavaScript para desenvolvimento web e porque deixamos de usar o PHP como linguagem principal'
date: '2020-11-16T05:35:07.322Z'
coverImage: '/assets/blog/por-que-javascript/cover.jpg'
categories: [ 'dev', 'javascript' ]
tags: [ 'linguagem de programação', 'javascript', 'php', "programação web" ]
author:
  name: Cristian Giordani
  picture: '/assets/blog/authors/cristian.jpg'
ogImage:
  url: '/assets/blog/por-que-javascript/cover.jpg'
---

Hello, world!

Diante das inúmeras possibilidades de linguagens de programação web disponíveis no mercado, por que utilizar JavaScript?

Senta que lá vem história....

A primeira vez que fiz algum código virar utilidade foi quando acessava salas de bate-papo do mIRC. Se você não faz ideia do que é mIRC, considere-se invejado por sua juventude. Basicamente eram configurações de Remotes, Popups, Users, Alias, Variables... era fantástico como um punhado de códigos (grande parte copiado de tutoriais e pouco compreendido) fazia algo surgir na tela, ser útil, encurtar processos. Desenvolvi alguns Scripts, criei páginas em HTML para hospedá-los e distribuir para os amigos ou qualquer interessado.

Do conhecimento em HTML veio um pouco de aprendizado em JavaScript.<br />
Em seguida CSS.

> Logo estava aprendendo ASP com base de dados em Access (não julgue!).
> 
> <img src="/assets/blog/por-que-javascript/wtf.gif" alt="WTF!?" width="250" style="border-radius: 10px" />


Mas ok, nesse ponto eu já estava trabalhando e produzindo comercialmente.<br />
Logicamente houve algumas aventuras: Delphi, Asp.NET, Java... nada muito profissional.

>Até que cheguei, em fim, ao PHP com MySQL ou Postgres.
>
><img src="/assets/blog/por-que-javascript/relief.gif" alt="Alívio" width="250" style="border-radius: 10px" />


Foram alguns longos anos, PHP 4, PHP 5 (e seus infinitos versionamentos), PHP 7 (Laravel... uou!) que linguagem de programação web incrível, algumas das melhores aplicações e projetos que desenvolvi foram com PHP.

**Então, por que mudar?**

Eu fiz essa pergunta muitas vezes, talvez até demais!

Antes de responder essa pergunta, vamos conhecer um pouco da história do JavaScript.

Sim, o JavaScript não é uma linguagem nova, ela surgiu em setembro de 1995, ainda com o nome de LiveScript para ser utilizada na versão beta do navegador Netscape Navigator 2.0 e ainda em dezembro do mesmo ano ela foi rebatizada para JavaScript.

Juntamente com HTML e CSS, o JavaScript construiu os pilares da World Wide Web na década de 1990. Porém, naquela época o JavaScript servia para controlar algumas ações do usuário no navegador, como abrir uma janela de diálogo, de alerta, validar formulários, ou colocar alguns efeitos bobos em imagens quando passávamos o mouse por cima delas.

Por ser assim, tão simples e muitas vezes dispensável, foi uma linguagem cercada de alguns preconceitos e considerada amadora por algum tempo, até o surgimento de uma API chamada XMLHttpRequest (XHR) que possibilitou a interação de servidor em interface, alterando a DOM do HTML, exibindo novas informações sem que a página precisasse ser recarregada. O XHR começou a trazer o JavaScript para a modernidade. Baseada nela, surgia o Ajax (Asynchronous Javascript and XML) e inúmeras bibliotecas em JavaScript, com destaque para o JQuery.

Até então, as requisições feitas ao servidor eram tratadas em ASP, PHP, Perl, ColdFusion ou qualquer outra linguagem de servidor (server-side scripting). Apesar de ter um lugar de maior destaque, o JavaScript era apenas uma parte de um processo de desenvolvimento web que envolvia inúmeros conhecimentos.

Até que em 2009 surge o Node.js, e a história começa a ser reescrita.

O JavaScript, finalmente, podia ser escrito para o servidor.

Porém, como toda uma evolução natural das tecnologias, houve um período de maturação que chegaria com força apenas em 2015 com o advento da versão 6 do JavaScript (ES6 ou EcmaScript 6).

Assim como a <a href="http://www.w3c.org/" target="_blank">W3C</a> um consórcio que padroniza a web em geral, existe a <a href="http://www.ecma-international.org/" target="_blank">Ecma-International</a> que através do comitê TC39 padroniza a linguagem e busca suas melhorias. Em 2015 essas melhorias foram consideráveis, possibilitando aplicações mais complexas juntamente com bibliotecas de fácil desenvolvimento e integração.

Com a versão ES6 vieram:

(não assuste com os nomes, vamos falar sobre tudo isso mais pra frente)

- classes nativas
- constantes e variáveis de escopo
- arrow functions
- valores padrão em parâmetros
- desestruturação do objetos e arrays
- operadores rest e spread
- template literals
- sintaxe curta de objetos
- importações e exportações de módulos
- async / await

Já estamos partindo para o ES7 e ES8 (ES2020) que, entre algumas novidades traz: dynamic imports (lazy loading), bigInt, nullish coalescing, globalThis, optional chaining, promise.allSettled e string.prototype.matchAll.

Só esse parágrafo acima já teria assunto para um artigo inteiro, mas não quero entrar em muitos detalhes para não me estender demais. Caso queira mais informações da ES2020, sugiro esse <a href="https://braziljs.org/artigos/o-que-ha-de-novo-no-es2020/" target="_blank">link</a> do Braziljs.org ou esse <a href="https://github.com/tc39/proposals" target="_blank">tracking</a> no GitHub.

**Então... por que mudar?**

Talvez agora essa pergunta faça mais sentido, concorda?

Ao migrar para o JavaScript com Node.js eu me deparei com algumas respostas, antes e durante o processo. Vou destacar dois principais motivos que apoiaram minha decisão.

### 1. FullStack

O tripé Node.js + React + React Native faz praticamente tudo.

![/assets/blog/por-que-javascript/node-react-reactnative.png](/assets/blog/por-que-javascript/node-react-reactnative.png)

Sem dúvida, o fato de precisar dominar apenas uma linguagem para produzir, do zero, qualquer aplicação. Desde uma API no backend com Node.js, passando por website no frontend com React até chegar em soluções para celular e tablets com React Native - além de outras soluções para televisão (ReactTV), realidade virtual (ReactVR), etc...

Percebe que acabou a limitação?

Para desenvolver um aplicativo para celular não precisamos mais terceirizar a produção Java para Android e outra em Objective C / Swift para iOS (ou quebrar a cabeça desenvolvendo com um guia de referências do lado e levando 5x mais tempo - para cada aplicação!).

Outra vantagem é que o React Native tem performance de linguagem nativa (Java/ObjC) pois produz uma interface nativa a partir do código JavaScript, diferente, por exemplo, do Ionic que cria um código híbrido dentro de uma webview, perdendo muito em performance.

Se precisamos apenas um website, desenvolvemos com React e no futuro podemos reaproveitar grande parte do código no React Native (além de 100% da API desenvolvida em Node.js) para criar uma aplicação mobile.

Esse foi pra mim o principal motivo.

Talvez seja pra você também um grande pontapé inicial

# 2. Comunidade e mercado de trabalho

Ninguém caminha sozinho para o sucesso.

Qualquer programador com o mínimo de caminhada, sabe o quanto as comunidades são importantes para o seu desenvolvimento pessoal e para consequente desenvolvimento da linguagem por ele utilizada.

O GitHub, maior plataforma de hospedagem de código-fonte do mundo com mais de 100 milhões de projetos e mais de 35 milhões de usuários, publica no site <a href="https://octoverse.github.com/" target="_blank">octoverse.github.com</a>, inúmeras estatísticas relacionadas aos seus repositórios.

Veja este gráfico, relacionado às linguagens de programação entre 2014 e 2019.

Não deixem de notar o crescimento do TypeScript, importantíssima para a tipagem no JavaScript e que talvez seja um excelente assunto para um próximo artigo.

![/assets/blog/por-que-javascript/octoverse.png](/assets/blog/por-que-javascript/octoverse.png)

*Link: <a href="https://octoverse.github.com/#top-languages" target="_blank">https://octoverse.github.com/#top-languages</a>*

Ok, eu sei que, acreditando em apenas um gráfico, podemos ser erroneamente convencidos de qualquer coisa. Obviamente eu também conseguiria, através de um gráfico dizer para você seguir com PHP e esquecer o JavaScript (se você acreditasse apenas nesse hipotético gráfico, lógico).

Então, gostaria de encerrar esse post recomendando um <a href="https://www.youtube.com/watch?v=H43fXodv6WY" target="_blank">vídeo</a> do Filipe Deschamps sobre o PHP que, na minha humilde opinião, é a melhor produção atual (março, 2020) sobre a linguagem e seu futuro.

Vale a penas assistir, de coração aberto, pois o Deschamps foi muito cuidadoso na produção, e teve a responsabilidade necessária para exibir uma opinião bem embasada e isenta.

Bye, world!