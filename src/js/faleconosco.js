// ---------- VALIDAÇÃO NOME ---------- //
let nomeInput = document.getElementById("nome");
let nomeLabel = document.querySelector('label[for="nome"]');
let nomeHelper = document.getElementById("nome-helper");


//---------- VALIDAÇÃO email ---------- 
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper")



// Mostrar popup de campo obrigatório
    nomeInput.addEventListener("focus", function (){
    nomeLabel.classList.add('required-popup')
})

    emailInput.addEventListener("focus", function (){
    emailLabel.classList.add('required-popup')
})
// Ocultar popup de campo obrigatório
    nomeInput.addEventListener('blur', function(){
    nomeLabel.classList.remove ('required-popup')
})
    emailInput.addEventListener("blur", function (){
    emailLabel.classList.add('required-popup')
})
// Validar valor do input
    nomeInput.addEventListener("change", function(evento){
    let valor = evento.target.value
    if(valor.length < 3) {
    nomeInput.classList.remove('correct');
    nomeInput.classList.add('error');
    nomeHelper.innerText='Seu Nome deve conter 3 ou mais caracteres'
    nomeHelper.classList.add('visible');
  } else {
    nomeInput.classList.remove('error');
    nomeHelper.classList.remove('visible');
    nomeInput.classList.add('correct');
  }
})
    emailInput.addEventListener("change", function(evento){
    let valor = evento.target.value
  if(valor.includes('@') && valor.includes('.com')) {
    emailInput.classList.remove('error');
    emailHelper.classList.remove('visible');
    emailInput.classList.add('correct');
  } else {
    emailInput.classList.remove('correct');
    emailInput.classList.add('error');
    emailHelper.innerText='Seugit  E-mail deve conter "@" e ".com"'
    emailHelper.classList.add('visible');
    
  }
})
