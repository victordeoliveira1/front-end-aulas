
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