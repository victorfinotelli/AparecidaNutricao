let botaoAdicionar = document.querySelector("#adicionar-paciente");

//Evento ao clicar no botão
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();
    //Selecionando o form
    var form = document.querySelector("#form-adiciona");

    //Extraindo informações do paciente do form
    var paciente = obtemPacienteDoFormulario(form);

    var erros = validaPaciente(paciente);
    console.log(erros);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;

    }

    adicionaPacienteNaTabela(paciente);

    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});

function adicionaPacienteNaTabela(paciente) {
    //Cria a tr a td do paciente
    var pacienteTr = montaTr(paciente);
    //Adicionando o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li)
    });

}

function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)

    }
    return paciente;
}

function montaTr(paciente) {
    //Cria tr e td
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    var nomeTd = montaTd(paciente.nome, "info-nome")
    var pesoTd = montaTd(paciente.peso, "info-peso");
    var alturaTd = montaTd(paciente.altura, "info-altura");
    var gorduraTd = montaTd(paciente.gordura, "info-gordura");
    var imcTd = montaTd(paciente.imc, "info-imc");

    //função que coloca como filho(ou seja coloca os td dentro do tr como filho) com função appendChield
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;

}

function montaTd(dado, classe) {

    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0) erros.push("Nome não pode ser em branco.");
    if (paciente.gordura.length == 0) erros.push("A gordura não pode ficar em branco");;
    if (paciente.peso.length == 0) erros.push("O peso não pode ser em branco");
    if (paciente.altura.length == 0) erros.push("O peso não pode ser em branco");

    if (!validaPeso(paciente.peso)) erros.push("Peso é inválido");

    //Ou (estilos de iF)
    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é invalida!");
    }
    return erros;
}