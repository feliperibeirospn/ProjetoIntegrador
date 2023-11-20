// ---------- FUNÇÕES GERAIS -------------- //
function togglePopup(input, label) {
  // Mostrar popup de campo obrigatório
    input.addEventListener("focus", () => {
    label.classList.add("required-popup");
  });

  // Ocultar popup de campo obrigatório
    input.addEventListener("blur", () => {
    label.classList.remove("required-popup");
  });
}

function estilizarInputCorreto(input, helper) {
  helper.classList.remove("visible");
  input.classList.remove("error");
  input.classList.add("correct");
}

function estilizarInputIncorreto(input, helper) {
  helper.classList.add("visible");
  input.classList.add("error");
  input.classList.remove("correct");
}


// ---------- VALIDAÇÃO NOME ---------- //
let nomeInput = document.getElementById("nome");
let nomeLabel = document.querySelector('label[for="nome"]');
let nomeHelper = document.getElementById("nome-helper");

togglePopup(nomeInput, nomeLabel)

//---------- VALIDAÇÃO email ---------- 
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper")

togglePopup(emailInput, emailLabel)

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
    inputsCorretos = false;
  } else {
    nomeInput.classList.remove('error');
    nomeHelper.classList.remove('visible');
    nomeInput.classList.add('correct');
    inputCorreto = true;
  }
})
    emailInput.addEventListener("change", function(evento){
    let valor = evento.target.value
  if(valor.includes('@') && valor.includes('.com')) {
    emailInput.classList.remove('error');
    emailHelper.classList.remove('visible');
    emailInput.classList.add('correct');
    inputCorreto = true;
  } else {
    emailInput.classList.remove('correct');
    emailInput.classList.add('error');
    emailHelper.innerText='Seu E-mail deve conter "@" e ".com"'
    emailHelper.classList.add('visible');
    inputCorreto = false;
  }
})

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

//------------ EVITAR ENVIO DE FORMULÁRIO ------------------//
let btnSubmit = document.querySelector('button[type="submit"]');

let inputCorreto = {
  nome: false,
  email: false
}

btnSubmit.addEventListener("click", (e) => {
  if(inputCorreto.nome == false || inputCorreto.email == false) {
      e.preventDefault();
      alert("Os campos precisam ser preenchidos corretamente!");
    } else {
      alert("Formulário enviado com sucesso!"); 
    }
})
