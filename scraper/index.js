const axios = require('axios');
const cheerio = require('cheerio');

async function executarMissaoCompleta() {
    console.log("🤖 Robô: Iniciando varredura de mercado...");

    try {
        // PASSO 1: O robô vai até o site do concorrente e olha o preço
        const urlAlvo = 'https://books.toscrape.com/catalogue/a-light-in-the-attic_1000/index.html';
        const { data } = await axios.get(urlAlvo);
        const $ = cheerio.load(data);

        const nomeProduto = $('h1').text().trim();
        // Pegamos o preço e limpamos o símbolo esquisito (£), deixando só o número
        const precoTexto = $('.price_color').text().replace('£', '').trim(); 
        const precoNumero = parseFloat(precoTexto);

        console.log(`🤖 Robô: Encontrei o produto "${nomeProduto}" por R$ ${precoNumero}`);

        // PASSO 2: O robô corre até a janela da nossa API Python e joga os dados lá dentro!
        const urlCentralPython = 'http://127.0.0.1:8000/api/produtos/';
        
        console.log("🤖 Robô: Enviando esses dados para a nossa Central Python...");
        
        const dadosParaEnviar = {
            nome: nomeProduto,
            preco_atual: precoNumero,
            disponivel: true,
            alerta_baixa: false
        };

        const respostaCentral = await axios.post(urlCentralPython, dadosParaEnviar);

        console.log("🎯 --- MISSÃO CUMPRIDA COM SUCESSO ---");
        console.log("🤖 Robô: O gerente Python recebeu os dados e guardou no cofre!");
        console.log("---------------------------------------\n");

    } catch (erro) {
        console.error("❌ Robô: Ih, deu erro na missão!", erro.message);
    }
}

// Executa a missão completa
executarMissaoCompleta();