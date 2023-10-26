document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector("form");

    formulario.addEventListener("submit", function (event) {
        const usuarioInput = document.querySelector('input[name="Nome"]');
        const senhaInput = document.querySelector('input[name="Senha"]');

        if (!usuarioInput.value.trim() || !senhaInput.value.trim()) {
            event.preventDefault(); // Impedir o envio do formulário se os campos estiverem vazios
            alert("Por favor, preencha todos os campos.");
        }
    });
});
