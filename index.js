function validarCPF() {
    const validarDom = document.querySelector('#validar')

    let cpfInputDom = document.querySelector('#cpfInput').value;

    cpfInputDom = cpfInputDom.replace(/[^\d]+/g, ''); 

    if(cpfInputDom === ""){
        validarDom.innerText = "Favor não deixar o campo vazio";
        validarDom.style.color = 'red';
        return; 
    }


    if (cpfInputDom.length < 11) {
        validarDom.innerText = "CPF deve conter 11 digitos.";
        validarDom.style.color = 'red';
        document.querySelector('#cpfInput').value = ""
        return;
    }
    
    if (/^(\d)\1{10}$/.test(cpfInputDom)) {
        validarDom.innerText = "CPF inválido.";
        validarDom.style.color = 'red';
        document.querySelector('#cpfInput').value = ""
        return
    }

    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpfInputDom.charAt(i)) * (10 - i);
    }
    let restante = 11 - (soma % 11);
    let primeiroDigito = (restante >= 10) ? 0 : restante;
    
    if (parseInt(cpfInputDom.charAt(9)) !== primeiroDigito) {
        return false;
    }
    
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpfInputDom.charAt(i)) * (11 - i);
    }
    restante = 11 - (soma % 11);
    let segundoDigito = (restante >= 10) ? 0 : restante;
    if (parseInt(cpfInputDom.charAt(10)) !== segundoDigito) {
        return false;
    }
    validarDom.innerText="CPF valido!!"
    validarDom.style.color = 'green';
}

function formatarCPF() {
    let cpfInput = document.getElementById('cpfInput');
    let cpf = cpfInput.value;
    
    cpf = cpf.replace(/\D/g, '');
    
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    
    cpfInput.value = cpf;
}