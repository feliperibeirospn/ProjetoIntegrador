const itens = [
    {   id:0,
        nome:"COMPUTADOR GAMER RGB COMPLETO",
        img:"./assents/icon/produtoPequeno.svg",
        valor:3999.99,
        quantidade:0,
    },
    {   id:1,
        nome:"FONTE GAMER",
        img:"./assents/icon/produtoPequeno.svg",
        valor:1999.99,
        quantidade:0,
    },
    {   id:2,
        nome:"Monitor",
        img:"./assents/icon/produtoPequeno.svg",
        valor:2999.99,
        quantidade:0,
    }
]

//Dar inicio a página index
inicializar = () =>{
    var containerProdutos = document.getElementById("produtos");
    itens.map((val)=>{
       containerProdutos.innerHTML+=
        `<div class="produto">
                
        <div>
            <h3 class="name">`+val.nome+`</h3>
            <img src=`+val.img+` alt="">
            <h3>Valor <span class="cart-product-price">`+val.valor+`</span></h3>
            <input type="number" value="" min="0" class="productQtdInput">
            <a key ="`+val.id+`" href="#" id="comprar">Adicionar ao carrinho!</a>
        </div>`
        
    })
}
//atualizar carrinho na página do carrinho
atualizarCarrinho = () => {
    var containerCarrinho = document.getElementById("carrinho");
    containerCarrinho.innerHTML = "";
    //Mostrar na tela o carrinho
    itens.map((val, index) => {
        if (val.quantidade > 0) {
            containerCarrinho.innerHTML += `
                <div class="produto">
                    <div>
                        <h3 class="name">${val.nome}</h3>
                        <h3>Valor <span class="cart-product-price">${val.valor}</span></h3>
                        <p>Quantidade: ${val.quantidade}</p>
                        <a href="#" class="btn remove-product-button" id="comprar" data-index="${index}">Remover</a>
                    </div>
                </div>
            `;
        }
    });
    
    //Criar a remorção
    const removeButtons = document.getElementsByClassName("remove-product-button");
    
    for (var i = 0; i < removeButtons.length; i++) {
        removeButtons[i].addEventListener("click", function() {
            const index = this.getAttribute('data-index'); // Obtenha o índice do item a ser removido
            itens[index].quantidade--; 
            atualizarCarrinho(); // Atualize o carrinho após a remoção
        });
    }
}
// Adicionar item da página inicial ao carrinho
AdicionarItem=()=>{
    var add = document.getElementsByTagName("a");

    for (var i = 0; i < add.length; i++) {
        add[i].addEventListener("click", function() {
            let key = this.getAttribute('key');
            itens[key].quantidade++;
            atualizarCarrinho();
            return false;
        });
    }
    
}



inicializar()
atualizarCarrinho()
AdicionarItem()

