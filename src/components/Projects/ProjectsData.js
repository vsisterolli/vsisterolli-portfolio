const projectsData = [
    {
        name: "Linkr",
        images: ["https://i.imgur.com/2bPnKY2.png", "https://i.imgur.com/qQ1m4kC.png", "https://i.imgur.com/ZYncCQ8.png", "https://i.imgur.com/oUYrDoW.png", "https://i.imgur.com/8hYQzQd.png"],
        description: `O Linkr é uma rede social de compartilhamento de links com layout responsivo inspirada pelo twitter. Possuí diversas funcionalidades de uma rede social: cadastro/login, timeline de carregamento infinito que prioriza posts de quem você segue, trending, perfis, etc. Foi construído por um total de 5 pessoas utilizando o método SCRUM.\n\n 
                      O front-end foi construído utilizando React e suas bibliotecas, como Axios, Styled-Components e outras.\n\n
                      O back-end foi construído utilizando Node, com Express.js e PostgreSQL;\n\n
                      Atuei na construção e revisão de features majoritárias, como a página de perfil e pesquisa de usuários. Tanto na parte do front-end quanto na parte do back-end.
                    `,
        deploy: "https://linkr-front-sandy.vercel.app/"
    },
    {
        name: "Drivent",
        images: ["https://i.imgur.com/jzRKUwy.png", "https://i.imgur.com/aXs3Qlp.png", "https://i.imgur.com/4e0bnMX.png"],
        description: `O Driven.t é um serviço de gestão de eventos, facilitando a aquisição de ingressos, hospedagens e certificados para o público-alvo. Contém funcionalidades como cadastro, visualização de eventos próximos a ocorrer, geração de certificado, locação de quartos próximos ao evento, etc.\n\n
                      A princípio, apenas a API do site (back-end) está disponível, e foi construída utilizando Node, Express.js, PostgreSQL, Prisma, Jest, Typescript, Eslint, entre outras ferramentas.\n\n
                      Participei na manutenção e elaboração de novas rotas e features e criação de teste para as que já haviam sido implementadas com o objetivo de garantir o bom funcionamento da aplcação.
                    `,
        deploy: "https://github.com/vsisterolli/projeto__calvs-drivent__p1"
    },
    {
        name: "E-clothing",
        images: ["https://i.imgur.com/jjd15pH.jpg", "https://i.imgur.com/ImzptPY.jpg", "https://i.imgur.com/ik9Opny.jpg", "https://i.imgur.com/lnNuyh8.jpg", "https://i.imgur.com/EmrdcJD.jpg", "https://i.imgur.com/xpwvmCr.png"],
        description:`A E-Clothing é um e-commerce de moda. O site possui um layout mobile com todas as funcionalidades de um e-commerce moderno: listagem de produtos, filtro, cadastro/login, carrinho, etc.\n\n
                     Fui inteiramente responsável pela criação da API do site (back-end), a qual utiliza Node com Express, MongoDb, armazenamento de arquivos com a biblioteca multer, envio de email automático, etc.\n\n
                     Também fui responsável pela criação de páginas e funcionalidades para o front-end do site, além da revisão de algumas previamente realizadas.
                    `,
        deploy: "https://projeto15-e-clothing-front.vercel.app/"
    },
    {
        name: "Shortly",
        images: ["https://i.imgur.com/0EMctVh.png", "https://i.imgur.com/hMTD6U1.png", "https://i.imgur.com/sQWcHzY.png", "https://i.imgur.com/wWds8bR.png", "https://i.imgur.com/UHPlJNf.png"],
        description: `O Shortly é um website encurtador de links. As principais funcionalidades incluem o cadastro e o registro de usuários, encurtar um link, acompanhar em tempo real os cliques nos seus links, edição/exclusão dos links criados, ranking semanal com os links mais acessados, etc.\n\n
                      Eu fui inteiramente responsável pela criação da API do site (back-end). A elaborei utilizando MongoDB como banco de dados e Node juntamente de Express para gerenciamento das requisições.
                     `,
        deploy: "https://github.com/vsisterolli/shortly"
    },
    {
        name: "Este portfolio!",
        images: ["https://i.imgur.com/Rmk0FLy.png"],
        description: `Se você chegou até aqui, agradeço de coração por ter se interessado no meu trabalho! Esse portfolio é justamente a junção de algumas coisas que realizei até aqui e para que você possa me conhecer um pouco melhor.\n\n
                      Esse portfolio é um site simples, de página única criada usando React, com algumas bibliotecas interessantes, como Styled Componentes, react-modal, toastify, entre outras. Não usa nenhuma API externa! As imagens são armazenadas localmente e/ou usando o imgur.\n\n
                      Fui responsável totalmente por sua criação, desde as ideias de layout, composição, front-end e tudo! Espero que tenha gostado do que viu até aqui.
                    `,
        deploy:"https://vsisterolli-portfolio.vercel.app/"
    }
]

export default projectsData;