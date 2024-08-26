
# Desafio de Projeto - Bootcamp Blockchain Developer
## Criando e Utilizando a sua Carteira de Criptomoedas

Projeto destina-se a desenvolver competências para criar e utilizar carteiras de criptomoedas.

Consiste basicamente das seguintes atividades:

- Desenvolver um gerador de carteiras de bitcoins para a rede testnet
- Gerar carteiras - endereço e chaves - com o gerador desenvolvido
- Obter fundos - Faucets - para uma carteira gerada através de um site dado
- Consultar transações para a carteira gerada por meio de explorador de blocos
- Importar carteiras geradas no gerenciador de carteiras ELECTRUM
- Consultar e acompanhar transações da carteira com o ELECTRUM

## Tecnologias envolvidas

### Para o desenvolvimento do gerador de carteiras
- [NodeJS](https://nodejs.org)
- Lib bip32
- Lib bip39
- Lib bitcoinjs-lib
- [Visual Studio Code](https://code.visualstudio.com/)

### Para o gerenciamento local das carteiras 
- [Electrum](https://electrum.org/)

### Para obter Faucets 
- [Bitcoin Testnet Faucet](https://bitcoinfaucet.uo1.net/) - opção Other Testnet Faucets => coinfaucet.eu

### Para consultar/acompanhar movimentações para a uma carteira de bitcoins na Testnet
- [BLOCKCYPHER](https://live.blockcypher.com/btc-testnet/)

## O passo a passo para concluir o desafio

1º - Desenvolvendo o gerador de carteiras

1.1 - Instalação do VS code 
    Caso ainda não tenha instalado, fazer download adequado ao seu ambiente e instalar.

1.2 - Instalação do NodeJS e criação de novo projeto
    a - Caso ainda não tenha instalado, fazer download adequado ao seu ambiente e instalar
    b - No VS Code, abrir uma nova pasta - BTCWALLET - e posicionar-se nela
    c - Abrir um terminal pelo menu
    d - No terminal, inicializar a pasta como um novo projeto: 
        > npm init -y
        Como resultado serão gerados os arquivos package-lock.json e package.json
    e - Instalar dependências para o projeto: 
        > npm install bip39 bip32@2.0.6 bitcoinjs-lib --save
   
1.3 - Desenvolver o gerador de carteiras
    No VS code: 
        Criar uma subpasta - src - e posicionar-se nela
        Criar novo arquivo - createWallet.js
        Editar o arquivo reproduzindo o código escrito pelo professor

2º - Gerar uma ou mais carteiras
    No terminal, executar o programa gerador
        > node createwallet.js
        Como resultado de cada execução tem-se o endereço da carteira gerada, a chave privada e a seed, as variáveis printadas.

3º - Instalar gerenciador de carteiras ELECTRUM e importar carteiras geradas
    3.1 Baixar e instalar o ELECTRUM a partir de https://electrum.org
    3.2 Ativar a rede testnet para o ELECTRUM. No atalho, ir em propriedades e acrescer --testnet ao final do campo target ou destino
    3.2 Abrir o aplicativo e importar uma ou mais das carteiras geradas solicitando criar nova carteira, importar e informar chave privada e senha para a carteira. A chave privada é aquela gerada e printada pelo gerador desenvolvido.

4º - Fazer movimentações de criptos Faucet na testnet e acompanhar o processamento das transações por meio do ELECTRUM e de exploradores de blocos.
    4.1 Obter Faucets para uma carteira gerada e importada no Electrum através do Bitcoin Testnet Faucet
        OBS.: No meu caso só funcionou pela opção Other TestnetFaucets => cointaucet.eu
    4.2 Uma vez obtidos Faucets, já há registro de transações para a carteira que podem ser consultados pelo explorador de blocos.
        Eu utilizei o BLOCKCYPHER pois o Blockchain.com/Explorer não reconheceu o endereço ds minhas carteiras. Problema reportado no Forum, onde um colega que enfrentou o mesmo problema sugeriu outros sites para obter faucets e explorar blocos de transações.
    4.3 No ELECTRUM também pode-se enviar e receber criptos com as carteiras importadas bem como acompanhar o processamento das transações até serem conformadas. Isso através das opções histórico, enviar e receber. Além disso é possível consultar dados da carteira como endereço e chave privada etc.

##  Sobre mim
Eu sou Sérgio Santa Catarina, servidor público aposentado após longa carreira em TI, começando como programador em ambientes mainframe IBM, linguagem COBOL/CICS, e passando por diversas outras tecnologias e funções/cargos, como analista de suporte, administrador de banco de dados, analista de negócios e, por fim, gerente de projetos. Antes de me aposentar ainda trabalhei 6 anos com gestão de processos e planejamento estratégico. Se tem uma linguagem que ainda me atrevo a codificar algo é SQL.

Hoje busco me atualizar nas tecnologias atuais com ênfase em blockchain e demais que dão suporte às cripto moedas. Não faço ideia se vou trabalhar com isso. No momento busco aprender.

### Conecte-se comigo

[![Perfil DIO](https://img.shields.io/badge/-Meu%20Perfil%20na%20DIO-30A3DC?style=for-the-badge)](https://www.dio.me/users/sergio_santacatarina)
[![E-mail](https://img.shields.io/badge/-Email-000?style=for-the-badge&logo=microsoft-outlook&logoColor=E94D5F)](mailto:sergio.santacatarina@gmail.com)
[![LinkedIn](https://img.shields.io/badge/-LinkedIn-000?style=for-the-badge&logo=linkedin&logoColor=30A3DC)](www.linkedin.com/in/sérgio-santa-catarina-95b58273/)
[![Instagram](https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/sergiosantacatarina/)



### Habilidades

![SQL](https://img.shields.io/badge/SQL-999?style=for-the-badge&logo=html5&logoColor=30A3DC)
[![Git](https://img.shields.io/badge/Git-000?style=for-the-badge&logo=git&logoColor=E94D5F)](https://git-scm.com/doc)
[![GitHub](https://img.shields.io/badge/GitHub-000?style=for-the-badge&logo=github&logoColor=30A3DC)](https://docs.github.com/)

### GitHub Stats

![GitHub Stats](https://github-readme-stats.vercel.app/api?username=SergioSantaCatarina&theme=transparent&bg_color=000&border_color=30A3DC&show_icons=true&icon_color=30A3DC&title_color=E94D5F&text_color=FFF)
![Top Langs](https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/top-langs/?username=SergioSantaCatarina&layout=compact&bg_color=000&border_color=30A3DC&title_color=E94D5F&text_color=FFF)


## Apêndice

Apenas lembrando que sou iniciante nesta tecnologias, inclusíve neste editor, portanto é bem básico.


## Autores

- [@SergioSantaCatarina](https://www.github.com/SergioSantaCatarina)
