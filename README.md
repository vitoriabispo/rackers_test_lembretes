# rackers_test_lembretes
Repositório criado para a ferramenta de Lembretes desenvolvida no processo seletivo da dti. A ferramenta conta com as funções de adicionar e remover lembretes para dias seguintes.

---

## Premissas
* Não é necessário realizar login na plataforma
* O tamanho da tela sempre será o mesmo, não se trata de um sistema responsivo
* O usuário só tenta apagar lembretes que já existem

---
## Decisões de projeto
* Plataforma desktop não responsiva
* Backend foi desenvolvido em NodeJS
* Frontend foi desenvolvido com ReactJS + CSS
* Utilização de mysql2 para banco de dados
* Utilização do docker
* Criação de middleware para validar dados enviados por meio do formulário no backend
* Calendário só permite escolha de datas a partir do D+1

---
## Instruções de execução
1. Clonar o repositório por meio de  
``` $ git clone https://github.com/vitoriabispo/rackers_test_lembretes.git ``` 
2. Criação de um arquivo .env (exemplo abaixo):

```  
HOST = localhost
USER = root
PASSWORD = root
DATABASE = reminders
PORT = 3333 
``` 
3. Criar um banco de dados com o mesmo nome inserido no .env
4. Instalar Node, NPM, React
5. Com o repositório clonado, acessar a pasta backend e executar o comando abaixo:  
``` $ npm start ``` 

6. Em outro terminal, acessar a pasta frontend e executar o comando abaixo:  
``` $ npm start ``` 

---
## Protótipo desenvolvido

Link para o figma: https://www.figma.com/file/U3WCDAgqGXJDMahSunDWNF/rackers_test_-_trainee?node-id=0%3A1&t=5WQllctYz2YlHfgz-1