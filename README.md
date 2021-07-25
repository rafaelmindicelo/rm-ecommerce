## E-commerce
--------------------------------
### Descrição

- Criação de um sistema e-commerce para inventário de produtos e dados de clientes

### Entregáveis
- Os dados de clientes, endereços e produtos devem estar devidamente estruturados;
- Dados no localstorage;
- Código fonte no github com o arquivo README detalhando as funcionalidades da programação

### Tecnologias Utilizadas

- HTML
- CSS
- BootStrap 4.1
- JavaScript

### Funcionalidades

- A página inicial do site é o cadastro de usuários, onde os dados deverão ser preenchidos ("required" via html) e ao clicar no botão "Cadastrar", os dados do formulário são recuperados via JS e setados no LocalStorage. Após 1 segundo (setTimeout) é enviada uma mensagem de sucesso na tela (alert) e após 1 segundo, os campos dos inputs são limpos com o reload da página.

- Na página de produtos, é possível adicionar cada item ao "carrinho". Existe uma função "addEventListener" que fica "escutando" cada clique no botão "Adicionar" e quando há, o array de dados é alimentado através do push, guardando as informações de código do produto, descrição e valor no LocalStorage. A disposição dos produtos de forma centralizada foi feita através de CSS (flex-box).