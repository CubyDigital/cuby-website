---
title: 'www.simonrh.com.br'
lead: 'Renovamos o website da SimonRH - Consultoria em Recursos Humanos'
date: '2017-04-06T14:11:42.322Z'
coverImage: '/assets/blog/portfolio-website-simonrh/cover.jpg'
categories: [ 'portfólio', 'website' ]
tags: [ 'website', 'desenvolvimento web', "criação de sites"  ]
author:
  name: Cristian Giordani
  picture: '/assets/blog/authors/cristian.jpg'
ogImage:
  url: '/assets/blog/portfolio-website-simonrh/cover.jpg'
---

# Por que JavaScript?

Hello, world!

Diante de inúmeras possibilidades de linguagens de programação disponíveis hoje no mercado, por que utilizar JavaScript?

Senta que lá vem história....

Acho que primeira vez que fiz algum código virar utilidade foi quando acessava salas de bate-papo do mIRC. Se você não faz ideia do que é mIRC, considere-se invejado por sua juventude. Basicamente eram configurações de Remotes, Popups, Users, Alias, Variables... era fantástico como um punhado de códigos (grande parte copiado de tutoriais e pouco compreendido) fazia algo surgir na tela, ser útil, encurtar processos. Desenvolvi alguns Scripts, criei páginas em HTML para hospedá-los e distribuir para os amigos ou qualquer interessado.

Do conhecimento em HTML aprendi um pouco de JavaScript.

Em seguida CSS.

Logo estava aprendendo ASP e Access (não julgue).

Nesse ponto eu já estava trabalhando e produzindo comercialmente.

Logicamente houve algumas outras aventuras: Delphi, Asp.NET, Java... nada muito profissional.

Até que cheguei, em fim, ao PHP.

Foram alguns longos anos, PHP 4, PHP 5 (e suas infinitas subversões), PHP 7 (Laravel... uou!) ... que linguagem de programação web incrível, algumas das melhores aplicações e projetos que desenvolvi foram com PHP.

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

Assim como a [W3C](http://www.w3c.org/), um consórcio que padroniza a web em geral, existe a [Ecma-International](http://www.ecma-international.org/) que através do comitê TC39 padroniza a linguagem e busca suas melhorias. Em 2015 essas melhorias foram consideráveis, possibilitando aplicações mais complexas juntamente com bibliotecas de fácil desenvolvimento e integração.

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
- importações e exportações
- async / await

Já estamos partindo para o ES7 e ES8 (ES2020) que, entre algumas novidades traz: dynamic imports (lazy loading), bigInt, nullish coalescing, globalThis, optional chaining, promise.allSettled e string.prototype.matchAll.

Só esse parágrafo acima já teria assunto para um artigo inteiro, mas não quero entrar em muitos detalhes para não me estender demais. Caso queira mais informações da ES2020, sugiro esse [link](https://braziljs.org/artigos/o-que-ha-de-novo-no-es2020/) do Braziljs.org ou esse [tracking](https://github.com/tc39/proposals) no GitHub.

**Então... por que mudar?**

Talvez agora essa pergunta faça mais sentido, concorda?

Ao migrar para o JavaScript com NodeJS eu me deparei com algumas respostas, antes e durante o processo. Vou destacar dois principais motivos que apoiaram minha decisão.

### 1. FullStack

O tripé NodeJS + ReactJS + React Native que vamos estudar aqui, faz praticamente tudo.

![Por%20que%20JavaScript%2050d1f61894384ba2bd206bd09852b3ac/node_react_reactnative.png](Por%20que%20JavaScript%2050d1f61894384ba2bd206bd09852b3ac/node_react_reactnative.png)

Sem dúvida, o fato de precisar dominar apenas uma linguagem para produzir, do zero, qualquer aplicação. Desde uma API no backend com NodeJS, passando por website no frontend com ReactJS até chegar em soluções para celular e tablets com React Native - além de outras soluções para televisão (ReactTV), realidade virtual (ReactVR), etc...

Percebe que acabou a limitação?

Para desenvolver um aplicativo para celular não precisamos mais terceirizar a produção Java para Android e outra em Objective C / Swift para iOS (ou quebrar a cabeça desenvolvendo com um guia de referências do lado e levando 5x mais tempo - para cada aplicação!).

Outra vantagem é que o React Native tem performance de linguagem nativa (Java/ObjC) pois produz uma interface nativa a partir do código JavaScript, diferente, por exemplo, do Ionic que cria um código híbrido dentro de uma webview, perdendo muito em performance.

Se precisamos apenas um website, desenvolvemos com ReactJS e no futuro podemos reaproveitar grande parte do código no React Native (além de 100% da API desenvolvida em NodeJS) para criar uma aplicação mobile.

Esse foi pra mim o principal motivo.

Talvez seja pra você também um grande pontapé inicial

### 2. Comunidade e mercado de trabalho

Ninguém caminha sozinho para o sucesso.

Qualquer programador com o mínimo de caminhada, sabe o quanto as comunidades são importantes para o seu desenvolvimento pessoal e para consequente desenvolvimento da linguagem por ele utilizada.

O GitHub, maior plataforma de hospedagem de código-fonte do mundo com mais de 100 milhões de projetos e mais de 35 milhões de usuários, publica no site [octoverse.github.com](https://octoverse.github.com/), inúmeras estatísticas relacionadas aos seus repositórios.

Veja este gráfico, relacionado às linguagens de programação entre 2014 e 2019.

Não deixem de notar o crescimento do TypeScript, que utilizaremos em nossa caminhada.

![Por%20que%20JavaScript%2050d1f61894384ba2bd206bd09852b3ac/grafico.png](Por%20que%20JavaScript%2050d1f61894384ba2bd206bd09852b3ac/grafico.png)

*Link: [https://octoverse.github.com/#top-languages](https://octoverse.github.com/#top-languages)*

Ok, eu sei que, acreditando em apenas um gráfico, podemos ser erroneamente convencidos de qualquer coisa. Obviamente eu também conseguiria, através de um gráfico dizer para você seguir com PHP e esquecer o JavaScript (se você acreditasse apenas nesse hipotético gráfico, lógico).

Então, gostaria de encerrar esse post recomendando um vídeo do Filipe Deschamps sobre o PHP que, na minha humilde opinião, é a melhor produção atual (março, 2020) sobre a linguagem e seu futuro.

Vale a penas assistir, de coração aberto, pois o Deschamps foi muito cuidadoso na produção, e teve a responsabilidade necessária para exibir uma opinião bem embasada e isenta.

[https://www.youtube.com/watch?v=H43fXodv6WY](https://www.youtube.com/watch?v=H43fXodv6WY)

Bye, world!

Cristian Giordani