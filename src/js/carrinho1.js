
//FELIPE, ELVIS, LAILA, SANDRO/
let quantidadeSubtotal = document.getElementById("quantidade-subtotal");

let valorSubtotal = document.getElementById("valor-subtotal");
console.log(quantidadeSubtotal)



let subtotalInfo = {

  quantidade: 1,

  valorInicial: 11.66,

  valor: 11.66,

  

};


function atualizarSubtotal() {
  if (subtotalInfo.quantidade > 1) {
    quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";

    valorSubtotal.innerText = subtotalInfo.valor.toFixed(2);
  } else {
    quantidadeSubtotal.innerText = subtotalInfo.quantidade + " item";

    valorSubtotal.innerText = subtotalInfo.valor.toFixed(2);
  }


}

atualizarSubtotal()



let btnAdicionarProduto01 = document.querySelector

  ('#btn-adicionar-produto-01');



let quantidadeProduto01 = document.querySelector

  ('#quantidade-produto-01');



function adicionarUm() {

  quantidadeProduto01.value = Number(quantidadeProduto01.value) + 1;
  //manupular qtd no subtotal
  subtotalInfo.quantidade = subtotalInfo.quantidade + 1;
  // atualizar valor
  subtotalInfo.valor = subtotalInfo.valor + subtotalInfo.valorInicial;


  //atualizar dom
  atualizarSubtotal()

}



btnAdicionarProduto01.addEventListener('click', adicionarUm);



let btnSubtrairProduto01 = document.querySelector

  ('#btn-subtrair-produto-01');



function subtrairUm() {
  if (quantidadeProduto01.value > 0) {
    quantidadeProduto01.value = Number(quantidadeProduto01.value) - 1;

    subtotalInfo.quantidade = subtotalInfo.quantidade - 1;

    if (subtotalInfo.valor > subtotalInfo.valorInicial) {
      subtotalInfo.valor = subtotalInfo.valor - subtotalInfo.valorInicial;
    } else {
      subtotalInfo.valor = 0.00;
    }
    
    atualizarSubtotal()

  }



}



btnSubtrairProduto01.addEventListener('click', subtrairUm);