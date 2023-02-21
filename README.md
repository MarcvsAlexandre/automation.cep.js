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

Realize o donwload do projeto template e commit ele no seu repositorio do gitHub

* **Instale o cypress com o comando**           ```-> npm install cypress```
* **Execute o runner do cypress**               ```-> npm run cy:open```

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
