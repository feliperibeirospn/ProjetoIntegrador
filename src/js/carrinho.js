const itens = [
    {   id:0,
        nome:"COMPUTADOR GAMER RGB COMPLETO",
        img:"./assents/icon/produtoPequeno.svg",
        valor:3999.99,
        quantidade:0
    },
    {   id:2,
        nome:"FONTE GAMER",
        img:"./assents/icon/produtoPequeno.svg",
        valor:1999.99,
        quantidade:0
    },
    {   id:3,
        nome:"Monitor",
        img:"./assents/icon/produtoPequeno.svg",
        valor:2999.99,
        quantidade:0
    }
]

inicializarLoja = () =>{
    var containerProdutos = document.getElementById("produtos");
    itens.map((val)=>{
       containerProdutos.innerHTML+=
        `<div class="produto">
                
        <div>
            <h3 class="name">`+val.nome+`</h3>
            <img src=`+val.img+` alt="">
            <h3>Valor <span class="cart-product-price">`+val.valor+`</span></h3>
            <input type="number" value="2" min="0" class="productQtdInput">
            <a key ="`+val.id+`" href="#" id="comprar">Adicionar ao carrinho!</a>
            <button class="btn remove-product-button " >remover</button>
            
        </div>`
    })
}
inicializarLoja()

atualizarCarrinho= () =>{

}

var links = document.getElementById("comprar")
console.log(itens)

for(var i=0; i<links.length;i++){
    links[i].addEventListener("click",function(){
        var key = this.getAttribute('id');
        itens[key].quantidade++;
        atualizarCarrinho();
    })
}

//Funções 
const removeProductButtons= document.getElementsByClassName("remove-product-button")


removerProduto()

function removerProduto(){
    for(var i=0; 1< removeProductButtons.length; i++){
        removeProductButtons[i].addEventListener("click", function(event){
            event.target.parentElement.parentElement.remove();
        })
    }
}






const productCarts= document.getElementsByClassName("card-cart")
for (var i =0; i<productCarts.length; i++){
    
    
}

productPrice = productCart[i].getElementsByClassName("cart-product-price")[0].innerText
productQuantity = productCart[i].getElementsByClassName("productQtdInput")[0].value
