// Endereço da nossa Central Python onde os produtos estão guardados
const URL_API = 'http://127.0.0.1:8000/api/produtos/';

// Função principal que vai buscar os produtos no cofre
async function buscarProdutosDoCofre() {
    try {
        console.log("🎨 Painel: Indo buscar os dados na Central Python...");
        
        // Fazemos a requisição para a nossa API
        const resposta = await fetch(URL_API);
        const produtos = await resposta.json();

        // Pegamos os elementos da tela que precisamos atualizar
        const corpoTabela = document.getElementById('corpo-tabela');
        const totalProdutosCard = document.getElementById('total-produtos');
        const totalAlertasCard = document.getElementById('total-alertas');

        // 1. Limpamos a tabela (apaga aquela linha de teste antiga)
        corpoTabela.innerHTML = '';

        // 2. Atualizamos o número total de produtos no card lá em cima
        totalProdutosCard.textContent = produtos.length;

        let contadorAlertas = 0;

        // 3. Passamos de produto em produto e desenhamos na tabela
        produtos.forEach(produto => {
            
            // Se o produto estiver com alerta de preço baixo ativo, contamos ele
            if (produto.alerta_baixa) {
                contadorAlertas++;
            }

            // Criamos uma linha nova para a tabela
            const linha = document.createElement('tr');

            linha.innerHTML = `
                <td>${produto.id}</td>
                <td>${produto.nome}</td>
                <td>R$ ${Number(produto.preco_atual).toFixed(2)}</td>
                <td>
                    <span class="badge ${produto.disponivel ? 'disponivel' : 'indisponivel'}">
                        ${produto.disponivel ? 'Disponível' : 'Esgotado'}
                    </span>
                </td>
                <td>
                    <span class="badge ${produto.alerta_baixa ? 'alerta-aceso' : 'normal'}">
                        ${produto.alerta_baixa ? '🚨 Preço Baixou!' : 'Preço Normal'}
                    </span>
                </td>
            `;

            // Colocamos a linha dentro da tabela
            corpoTabela.appendChild(linha);
        });

        // Atualizamos o card de alertas com o valor real
        totalAlertasCard.textContent = contadorAlertas;

    } catch (erro) {
        console.error("❌ Painel: Erro ao tentar conectar com a API Python:", erro);
    }
}

// Executa a função assim que a página carregar
window.addEventListener('DOMContentLoaded', buscarProdutosDoCofre);