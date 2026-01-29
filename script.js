const cepInput = document.querySelector('#cep');
const errorSpan = document.querySelector('#error-message');

// Máscara de CEP (00000-000)
cepInput.addEventListener('keypress', (e) => {
    if (e.keyCode < 48 || e.keyCode > 57) e.preventDefault();
});

cepInput.addEventListener('keyup', (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 5) {
        value = value.substring(0, 5) + "-" + value.substring(5, 8);
    }
    e.target.value = value;
});

// Busca de CEP ao sair do campo
cepInput.addEventListener('blur', async () => {
    const cep = cepInput.value.replace(/\D/g, "");

    if (cep.length !== 8) {
        if (cep.length > 0) showError("CEP incompleto");
        return;
    }

    try {
        errorSpan.textContent = "Buscando...";
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        if (data.erro) {
            showError("CEP não encontrado");
            clearForm();
        } else {
            errorSpan.textContent = "";
            fillForm(data);
        }
    } catch (error) {
        showError("Erro na conexão");
    }
});

function fillForm(data) {
    document.querySelector('#logradouro').value = data.logradouro;
    document.querySelector('#bairro').value = data.bairro;
    document.querySelector('#cidade').value = data.localidade;
    document.querySelector('#uf').value = data.uf;
    document.querySelector('#numero').focus();
}

function clearForm() {
    document.querySelectorAll('input:not(#cep)').forEach(input => input.value = "");
}

function showError(msg) {
    errorSpan.textContent = msg;
}

// Impede envio se campos automáticos estiverem vazios
document.querySelector('#address-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Seu CEP foi enviado com sucesso!");
});
