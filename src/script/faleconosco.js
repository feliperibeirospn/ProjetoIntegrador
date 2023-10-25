// ---------- VALIDAÇÃO NOME ---------- //
let nomeInput = document.getElementById("nome");
let nomeLabel = document.querySelector('label[for="nome"]');
let unomeHelper = document.getElementById("nome-helper");

//---------- VALIDAÇÃO email ---------- 
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper")


// Mostrar popup de campo obrigatório
usernameInput.addEventListener("focus", function (){
    usernameLabel.classList.add('required-popup')
})

emailInput.addEventListener("focus", function (){
    emailLabel.classList.add('required-popup')
})
// Ocultar popup de campo obrigatório
usernameInput.addEventListener('blur', function(){
    usernameLabel.classList.remove ('required-popup')
})
emailInput.addEventListener("blur", function (){
    emailLabel.classList.add('required-popup')
})
// Validar valor do input
usernameInput.addEventListener("change", function(evento){
    let valor = evento.target.value
    if(valor.length < 4) {
    usernameInput.classList.remove('correct');
    usernameInput.classList.add('error');
    usernameHelper.innerText='Seu Name deve conter 3 ou mais caracteres'
    usernameHelper.classList.add('visible');
  } else {
    usernameInput.classList.remove('error');
    usernameHelper.classList.remove('visible');
    usernameInput.classList.add('correct');
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
    emailHelper.innerText='Seu E-mail deve "@" e ".com"'
    emailHelper.classList.add('visible');
    
  }
})
