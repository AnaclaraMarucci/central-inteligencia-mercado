# 📊 Central de Inteligência de Mercado — Varejo

![Django](https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

Uma solução completa de monitoramento e inteligência competitiva desenvolvida para o setor de varejo. O sistema permite acompanhar os preços praticados pela concorrência, armazenar dados de forma estruturada e emitir alertas visuais instantâneos para apoiar os gerentes na tomada de decisões estratégicas de precificação.

---

## 🎯 Funcionalidades Atuais (Versão 1.0)

- **Painel de Controle Administrativo:** Gestão total de produtos, marcas e preços concorrentes através do painel admin do Django.
- **Engine de Alertas Automatizada:** Lógica de backend que compara os preços em tempo real e identifica quando um concorrente possui uma oferta mais agressiva.
- **Interface Visual Dinâmica (Dashboard):** Painel frontal limpo e intuitivo com sinalizações visuais (alertas intermitentes) para chamar a atenção do operador do sistema imediatamente.

---

## 🏗️ Arquitetura do Projeto

O repositório está organizado de forma modular e profissional:

- `/backend_projeto`: Núcleo da aplicação desenvolvido em Python com a framework **Django**, responsável pelas regras de negócio, rotas e persistência de dados.
- `/painel_visual`: Front-end construído com **HTML semântico, CSS estruturado e JavaScript assíncrono** para exibição e dinâmica dos dados.
- `/scraper`: Módulo isolado em Node.js preparado para a lógica de extração de dados da web (*Web Scraping*).

---

## 🚀 Próximos Passos & Roadmap de Evolução

O projeto foi planejado arquitetonicamente para escala e receberá as seguintes atualizações profissionais nas próximas versões:

1. **Automação do Robô Coletor (Python Scraper):** Integração total do script de scraping para rodar de forma agendada na nuvem, capturando preços dos sites concorrentes de madrugada de forma 100% autónoma.
2. **Histórico Visual e Relatórios (Gráficos):** Implementação de gráficos dinâmicos de linha (ex: com Chart.js) para exibir a oscilação do preço dos produtos ao longo do tempo.
3. **Filtros Avançados de Interface:** Otimização da tabela com buscas e filtros instantâneos em JavaScript por categorias de produtos (ex: Eletrodomésticos, Smartphones) ou apenas Alertas Ativos.
