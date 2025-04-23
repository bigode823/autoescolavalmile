# Guia de Hospedagem e Manutenção do Site da Auto Escola Valmile

## Introdução

Este documento fornece instruções detalhadas sobre como hospedar o site da Auto Escola Valmile e como realizar atualizações periódicas. O site foi desenvolvido utilizando HTML, CSS e JavaScript, e pode ser hospedado em qualquer serviço de hospedagem web que suporte sites estáticos.

## Estrutura de Arquivos

O site é composto pelos seguintes arquivos e diretórios:

- `index.html`: Página principal do site
- `/css/style.css`: Estilos do site
- `/js/script.js`: Funcionalidades interativas do site
- `/img/`: Diretório para armazenar imagens (logotipo, fotos, etc.)

## Hospedagem do Site

Para hospedar o site com o domínio personalizado `autoescolavalmile.com.br`, siga os passos abaixo:

### 1. Registro de Domínio

1. Acesse um registrador de domínios brasileiro como Registro.br, Hostgator, Locaweb ou similar
2. Verifique a disponibilidade do domínio `autoescolavalmile.com.br`
3. Registre o domínio seguindo as instruções do registrador
4. O custo aproximado para registro de domínio .com.br é de R$ 40,00 a R$ 60,00 por ano

### 2. Contratação de Hospedagem

1. Escolha um serviço de hospedagem web (recomendações: Hostgator, Locaweb, Hostinger, GoDaddy)
2. Contrate um plano de hospedagem básico para sites estáticos (suficiente para este site)
3. O custo aproximado para hospedagem básica é de R$ 15,00 a R$ 30,00 por mês

### 3. Configuração do Domínio

1. No painel de controle da hospedagem, configure os nameservers do seu domínio
2. Siga as instruções específicas do seu provedor de hospedagem para apontar o domínio para o servidor

### 4. Upload dos Arquivos

1. Acesse o painel de controle da hospedagem
2. Localize a ferramenta de gerenciamento de arquivos ou FTP
3. Faça upload de todos os arquivos e diretórios do site para a pasta raiz do servidor (geralmente chamada `public_html`, `www` ou `htdocs`)
4. Mantenha a mesma estrutura de diretórios do projeto original

## Atualizações do Site

O site foi projetado para ser facilmente atualizado. Abaixo estão instruções para os tipos mais comuns de atualizações:

### Atualização de Valores das Categorias

1. Abra o arquivo `index.html` em um editor de texto
2. Localize a seção "Nossas Categorias"
3. Para cada categoria, encontre a div com a classe `preco` e altere o valor "R$ X" para o valor atual
4. Salve o arquivo e faça upload para o servidor

### Adição de Imagens

1. Otimize as imagens para web (tamanho recomendado: máximo 1200px de largura, formato JPG ou PNG)
2. Faça upload das imagens para a pasta `/img/` no servidor
3. Para adicionar o logotipo, edite o arquivo `index.html` e descomente a linha com a tag `<img>` na seção do logotipo
4. Para adicionar imagens na seção "Sobre", edite o arquivo `index.html` e descomente a linha com a tag `<img>` na seção correspondente

### Atualização de Informações de Contato

1. Abra o arquivo `index.html` em um editor de texto
2. Localize a seção "Entre em Contato"
3. Atualize os dados de endereço, telefone, e-mail e horário de funcionamento
4. Atualize também os links de redes sociais e WhatsApp
5. Salve o arquivo e faça upload para o servidor

### Atualização do Chat

Para modificar as respostas automáticas do chat:

1. Abra o arquivo `js/script.js` em um editor de texto
2. Localize o objeto `chatResponses`
3. Adicione, remova ou modifique as palavras-chave e respostas conforme necessário
4. Salve o arquivo e faça upload para o servidor

## Backup do Site

Recomenda-se fazer backup regular dos arquivos do site:

1. Baixe todos os arquivos do servidor para seu computador
2. Armazene os backups em local seguro
3. Realize backups antes de fazer alterações significativas no site

## Suporte Técnico

Para dúvidas ou assistência técnica adicional, entre em contato com o desenvolvedor do site.

---

Este guia foi criado em Abril de 2025 para a Auto Escola Valmile.
