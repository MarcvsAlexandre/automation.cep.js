[javascript-image]: https://img.shields.io/badge/javascript-red
[javascript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[cucumber-image]: https://img.shields.io/badge/cucumber-4.1.2-brightgreen
[cucumber-url]: https://github.com/TheBrainFamily/cypress-cucumber-preprocessor
[cypress-image]:https://img.shields.io/badge/cypress-9.7.0-beige
[cypress-url]:https://docs.cypress.io/guides/overview/why-cypress

# Project structure cypress + cucumber + allure
[![JavaScript Version][javascript-image]][javascript-url]
[![Cucumber Version][cucumber-image]][cucumber-url]
[![Cypress Version][cypress-image]][cypress-url]

***Autor:*** -> **Marcus Alexandre**

* Email: marcus_alexandre98@outlook.com  -  
* Linkedin: https://www.linkedin.com/in/marcus-vinicius-alexandre-barbosa/

***Comandos:***

* **Instale o cypress com o comando**           ```-> npm install cypress@9.7.0```
* **Instale o node com o comando**             ```-> npm install ```
* **Execute o runner do cypress**               ```-> npx cypress open```
* ** Na instalação do Cypress, observe se realmente está na realizando a instalação do mesmo dentro da pasta do projeto, caso não esteja, o cypress ira instalar sua biblioteca fora da pasta. Observe se o nome do primeiro testes no Cypress está como Feacture, caso contrario, a instalação do cypress foi feita fora da pasta do projeto.**
* **No visual Code, baixe a extensões**               ```Cucumber, Autor Cucumber```
* **No visual Code, baixe as extensões**               ```Cucumber (Gherkin) Full Support, Autor Alexander Krechik```


***Estrutura do projeto:***
```
./
├── cypress
│   ├── fixtures
│   ├── integration
│   ├── plugins
│   └── support
│       ├── elements
│       ├── pages
│       ├── steps
├── .gitignore
├── cypress.json
├── package.json
├── README.md
└── tsconfig.json
