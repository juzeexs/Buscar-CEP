# 📍 Busca de CEP 

Um formulário de endereço moderno e responsivo que utiliza a **API ViaCEP** para preencher dados automaticamente.

🌐 **Acesse o projeto:** [https://buscarseucep.netlify.app/](https://buscarseucep.netlify.app/)

## 🚀 Funcionalidades

* **Máscara Automática**: Formata o CEP no padrão `00000-000` em tempo real.
* **Preenchimento via API**: Busca dados de Rua, Bairro, Cidade e UF assim que o CEP é preenchido.
* **Layout Flexível**: Design adaptável para celulares e computadores usando Flexbox.
* **Feedback ao Usuário**: Exibe mensagens de "Buscando...", "CEP incompleto" ou "Erro na conexão".
* **Campos Inteligentes**: Bloqueia a edição manual de campos que devem ser preenchidos pela API (readonly).

## 🛠️ Tecnologias

* **HTML5**: Estruturação semântica.
* **CSS3**: Estilização com variáveis e foco em acessibilidade visual.
* **JavaScript (Vanilla)**: Lógica de negócio e consumo de API via `fetch`.

## 📂 Estrutura de Arquivos

* `index.html`: Estrutura do formulário e inputs.
* `style.css`: Estilização, cores e responsividade.
* `script.js`: Lógica de validação, máscara e integração com a API.

## 📝 Como testar

1. Salve os três arquivos em uma mesma pasta.
2. Abra o arquivo `index.html` em seu navegador.
3. Digite um CEP (ex: `01001000`) e saia do campo para ver o preenchimento.

---
Desenvolvido com foco em praticidade e experiência do usuário (UX).
