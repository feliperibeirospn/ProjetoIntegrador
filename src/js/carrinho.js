const itens = [
  {
    id: 0,
    nome: "COMPUTADOR GAMER",
    img: "./assents/img/1pcgamer.jpeg",
    valor: 3999.99,
    quantidade: 0,
  },
  {
    id: 1,
    nome: "FONTE GAMER",
    img: "./assents/img/2fontegamer.jpeg",
    valor: 1999.99,
    quantidade: 0,
  },
  {
    id: 2,
    nome: "Monitor",
    img: "./assents/img/3monitor.jpeg",
    valor: 2999.99,
    quantidade: 0,
  },
  {
    id: 3,
    nome: "Teclado Mecânico",
    img: "./assents/img/4tecladogamer.jpeg",
    valor: 149.99,
    quantidade: 0,
  },
  {
    id: 4,
    nome: "Mouse Gamer",
    img: "./assents/img/5mousegamer.jpeg",
    valor: 79.99,
    quantidade: 0,
  },
  {
    id: 5,
    nome: "Headset Gamer",
    img: "./assents/img/6headsetgamer.jpeg",
    valor: 299.99,
    quantidade: 0,
  },
  {
    id: 6,
    nome: "Cadeira Gamer",
    img: "./assents/img/7cadeiragamer.jpeg",
    valor: 599.99,
    quantidade: 0,
  },
  {
    id: 7,
    nome: "Placa de Vídeo",
    img: "./assents/img/8placadevideo.jpeg",
    valor: 999.99,
    quantidade: 0,
  },
  {
    id: 8,
    nome: "SSD 1TB",
    img: "./assents/img/9ssd.jpeg",
    valor: 199.99,
    quantidade: 0,
  },
  {
    id: 9,
    nome: "Webcam HD",
    img: "./assents/img/10webcamhd.jpeg",
    valor: 49.99,
    quantidade: 0,
  },
  {
    id: 10,
    nome: "Impressora Laser",
    img: "./assents/img/11impressora.jpeg",
    valor: 299.99,
    quantidade: 0,
  },
  {
    id: 11,
    nome: "Roteador Wi-Fi",
    img: "./assents/img/12roteadorwifi.jpeg",
    valor: 59.99,
    quantidade: 0,
  },
  {
    id: 12,
    nome: "Caixa de Som Bluetooth",
    img: "./assents/img/13caixadesombluetooth.jpeg",
    valor: 79.99,
    quantidade: 0,
  },
  {
    id: 13,
    nome: "Monitor Ultrawide",
    img: "./assents/img/14monitorultrawide.jpeg",
    valor: 499.99,
    quantidade: 0,
  },
  {
    id: 14,
    nome: "Impressora 3D",
    img: "./assents/img/15impressora3d.jpeg",
    valor: 399.99,
    quantidade: 0,
  },
  {
    id: 15,
    nome: "Câmera DSLR",
    img: "./assents/img/16cameradsrl.jpeg",
    valor: 899.99,
    quantidade: 0,
  },
  {
    id: 16,
    nome: "Microfone USB",
    img: "./assents/img/17microfone.jpeg",
    valor: 59.99,
    quantidade: 0,
  },
  {
    id: 17,
    nome: "Mochila Gamer",
    img: "./assents/img/18mochila.jpeg",
    valor: 29.99,
    quantidade: 0,
  },
  {
    id: 18,
    nome: "Cooler RGB",
    img: "./assents/img/19cooler.jpeg",
    valor: 19.99,
    quantidade: 0,
  },
  {
    id: 19,
    nome: "Tapete para Mouse",
    img: "./assents/img/20tapete.jpeg",
    valor: 9.99,
    quantidade: 0,
  },
];

const containerProdutos = document.getElementById("produtos");
const containerCarrinho = document.getElementById("carrinho");
const containerResume = document.getElementById("resume");

function criarProdutoHTML(item) {
  return `
            <div class="produto">
              
                <h3 class="name">${item.nome}</h3>
                <img src="${item.img}" key="${item.id}" href="#" class="ver-detalhes" alt="">
                <h3>Valor: <span class="cart-product-price">${item.valor} R$</span></h3>
                <input type="number" value="" min="0" class="productQtdInput">
                <a key="${item.id}" href="#" class="btn adicionar-ao-carrinho" onclick="return false;">Adicionar ao carrinho!</a>
              
            </div>
          `;

}
containerProdutos.addEventListener("click", (event) => {
  if (event.target.classList.contains("ver-detalhes")) {
    const key = event.target.getAttribute("key");
    const item = itens[key];
    exibirDetalhesDoProduto(item);
  }
});

function exibirDetalhesDoProduto(item) {
  // Limpa o conteúdo existente no container de produtos
  containerProdutos.innerHTML = "";

  // Cria o HTML com os detalhes do produto
  const detalhesHTML = `
  <div class="produto-detalhes">
    <div id="produto-1">
        <h3 class="name">${item.nome}</h3>
    <img src="${item.img}" alt="">
    <h3>Valor: ${item.valor} R$</h3>
    <p>Quantidade disponível: 2</p>
    </div>
    <div id="produto-2">
    <a href="#" id="voltar-para-lista" class="btn voltar-para-lista">Voltar para o inicio</a>
        <input type="number" value="1" min="1" class="productQtdInput">
        <a key="${item.id}" href="#" id="adicionar-ao-carrinho" class="btn adicionar-ao-carrinho">Adicionar ao carrinho</a>
    </div>
    <div id="produto-3">
    
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Tempora possimus odio beatae ad labore est ex tempore cum <br>
            accusamus vitae tenetur enim mollitia consequatur impedit, 
            quaerat quidem placeat quam accusantium?</p>
    </div>
   
  </div>
          `;

  // Insere o HTML dos detalhes do produto no container de produtos
  containerProdutos.innerHTML = detalhesHTML;

  // Adiciona um evento para voltar para a lista quando clicar no botão "Voltar para a lista"
  const voltarParaListaButton = document.getElementById("voltar-para-lista");
  voltarParaListaButton.addEventListener("click", () => {
    // Recarrega a lista de produtos
    indexizar();
  });

  // Adiciona um evento para adicionar o item ao carrinho quando clicar no botão "Adicionar ao carrinho"
  const adicionarAoCarrinhoButton = document.getElementById("adicionar-ao-carrinho");
  adicionarAoCarrinhoButton.addEventListener("click", () => {
    const key = adicionarAoCarrinhoButton.getAttribute("key");
    const quantidadeInput = document.querySelector(".productQtdInput");
    const quantidade = parseInt(quantidadeInput.value, 10);
   
    itens[key].quantidade += quantidade;
    atualizarCarrinho();
    //validação não ultilizada no momento
   /* if (!isNaN(quantidade) && quantidade > 1 && quantidade <= item.quantidade) {
     itens[key].quantidade += quantidade;
      atualizarCarrinho();
    } else {
      alert("Quantidade inválida. Certifique-se de escolher um valor entre 1 e a quantidade disponível.");
    }*/
  });
}

function criarCarrinhoHTML(item, index) {
  if (item.quantidade > 0) {
    return `
                <div class="produto">
                  <div>
                    <h3 class="name">${item.nome}</h3>
                    <img src="${item.img}" alt="">
                    <h3>Valor <span class="cart-product-price">${item.valor}</span></h3>
                    <p>Quantidade: ${item.quantidade}</p>
                    <a href="#" key="${item.id}" class="btn remove-product-button" data-index="${index}" onclick="return false;">Remover</a>
                  </div>
                </div>
              `;
  }
}

function somarValorQuantidade(item) {
  return item.valor * item.quantidade;
}

//função para atualizar os valores no carrinho
function atualizarResumo() {
  const quantidadeTotal = itens.reduce((total, item) => total + item.quantidade, 0);
  const valorTotal = itens.reduce((total, item) => total + somarValorQuantidade(item), 0);
  const valorFrete = 50.00; // Valor de frete fixo

  const valorSubtotal = valorTotal + valorFrete;

  const quantidadeSubtotal = document.getElementById("quantidade-subtotal");
  quantidadeSubtotal.querySelector("span").textContent = quantidadeTotal;

  const valorSubtotalElement = document.getElementById("valor-subtotal");
  valorSubtotalElement.querySelector("span").textContent = valorSubtotal.toFixed(2) + " R$";
}
// aqui estamos atualizando o carrinho
function atualizarCarrinho() {
  containerCarrinho.innerHTML = "";
  itens.forEach((item, index) => {
    const carrinhoHTML = criarCarrinhoHTML(item, index);
    if (carrinhoHTML) {
      containerCarrinho.innerHTML += carrinhoHTML;
    }
  });
  adicionarEventosRemover();
  atualizarResumo();
  salvarCarrinhoNoLocalStorage();
}
//função para adicionar produto ao carrinho
function adicionarEventosAdicionar() {
  const botoesAdicionar = document.querySelectorAll(".adicionar-ao-carrinho");
  botoesAdicionar.forEach((botao) => {
    botao.addEventListener("click", function () {
      const key = this.getAttribute('key');
      itens[key].quantidade++;
      atualizarCarrinho();
      return false;
    });
  });
}

//função para remover o produto do carrinho
function adicionarEventosRemover() {
  const botoesRemover = document.querySelectorAll(".remove-product-button");
  botoesRemover.forEach((botao) => {
    botao.addEventListener("click", function () {
      const index = this.getAttribute('key');
      itens[index].quantidade--;
      atualizarCarrinho();
    });
  });
}
// Está função inicia a pagina com os produtos
function indexizar() {
  containerProdutos.innerHTML = "";
  itens.forEach((item) => {
    containerProdutos.innerHTML += criarProdutoHTML(item);
  });
  adicionarEventosAdicionar();
  carregarCarrinhoDoLocalStorage();
  atualizarCarrinho();
  atualizarResumo();
}

//salvando o carrinho no local storage do cliente e transformando em string
function salvarCarrinhoNoLocalStorage() {
  const carrinhoJSON = JSON.stringify(itens);
  localStorage.setItem('carrinho', carrinhoJSON);
}

//carregando a string que está no local storage e transformando em obj novamente
function carregarCarrinhoDoLocalStorage() {
  const carrinhoJSON = localStorage.getItem('carrinho');
  if (carrinhoJSON) {
    const carrinhoItens = JSON.parse(carrinhoJSON);
    itens.forEach((item, index) => {
      item.quantidade = carrinhoItens[index].quantidade;
    });
  }
}

// Quando clica em comprar usar mostrar os detalhes do produto para o item selecionado
containerProdutos.addEventListener("click", (event) => {
  if (event.target.tagName === "A" && event.target.id === "comprar") {
    const key = event.target.getAttribute("key");
    const item = itens[key];
    exibirDetalhesDoProduto(item);
  }
});

// Iniciar a pagina com os produtos
indexizar();

