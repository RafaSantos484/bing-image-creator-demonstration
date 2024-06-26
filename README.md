## Instalando dependências
- Baixe o repositório e execute o seguinte comando para instalar as dependências
 ```
npm i
 ```

## Obtendo cookie _U:
- Acesse o site `https://www.bing.com/images/create` e realize login
- Acesse o console do navegador, execute o seguinte comando e copie o resultado
 ```
document.cookie.split('; ').find(c => c.startsWith('_U')).split('=')[1]
 ```

## Executando
- execute um dos seguintes comandos para executar o programa
 ```
npm run dev
 ```
 ```
npm run build;npm start
 ```
