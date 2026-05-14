
function validarFormTarefa() {

    let titulo = document.getElementById("tituloTarefa").value;
    let prioridade = document.getElementById("prioridadeTarefa").value;
    let responsavel = document.getElementById("responsavelTarefa").value;
    let descricao = document.getElementById("descricaoTarefa").value;
    let dataCriacao = document.getElementById("dataCriacaoTarefa").value;
    let dataConclusao = document.getElementById("dataConclusaoTarefa").value;
    let status = document.getElementById("statusTarefa").value;
    let projeto = document.getElementById("projetoTarefa").value;

    if (titulo == "") {
        alert("O campo título é obrigatório!");
    }
    if (prioridade == "") {
        alert("O campo prioridade é obrigatório!");
    }
    if (responsavel == "") {
        alert("O campo responsável é obrigatsório!");
    }
    if (dataCriacao == "") {
        alert("O campo data de criação é obrigatório!");
    }
    if (dataConclusao == "") {
        alert("O campo data de conclusão é obrigatório!");
    }
    if (status == "") {
        alert("O campo status é obrigatório!");
    }
    if (projeto == "") {
        alert("O campo projeto é obrigatório!");
    }
}

function validarFormProjeto() {

    let titulo = document.getElementById("tituloProjeto").value;
    let descricao = document.getElementById("descricaoProjeto").value;
    let dataCriacao = document.getElementById("dataCriacaoProjeto").value;
    let dataConclusao = document.getElementById("dataConclusaoProjeto").value;
    let status = document.getElementById("statusProjeto").value;
    let responsavel = document.getElementById("responsavelProjeto").value;

    if (titulo == "") {
        alert("O campo título é obrigatório!");
    }
    if (descricao == "") {
        alert("O campo descrição é obrigatório!");
    }
    if (dataCriacao == "") {
        alert("O campo data de criação é obrigatório!");
    }
    if (dataConclusao == "") {
        alert("O campo data de conclusão é obrigatório!");
    }
    if (status == "") {
        alert("O campo status é obrigatório!");
    }
    if (responsavel == "") {
        alert("O campo responsável é obrigatório!");
    }
}

function validarFormUsuario() {

    let nome = document.getElementById("nomeUsuario").value;
    let cpf = document.getElementById("cpfUsuario").value;
    let email = document.getElementById("emailUsuario").value;
    let dataNascimento = document.getElementById("dataNascimento").value;
    let status = document.getElementById("statusUsuario").value;
    let senha = document.getElementById("senhaUsuario").value;

    if (nome == "") {
        alert("O campo nome é obrigatório!");
    }
    if (cpf == "") {
        alert("O campo CPF é obrigatório!");
    }
    if (email == "") {
        alert("O campo e-mail é obrigatório!");
    }
    if (dataNascimento == "") {
        alert("O campo data de nascimento é obrigatório!");
    }
    if (status == "") {
        alert("O campo status é obrigatório!");
    }
    if (senha == "") {
        alert("O campo senha é obrigatório!");
    }
}