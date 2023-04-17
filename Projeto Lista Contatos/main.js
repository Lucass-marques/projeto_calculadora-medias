const form = document.getElementById("adicionar-contatos");
const nomes = [];
const numeros = [];
const tipos = [];

let linhas = "";

form.addEventListener("submit", function(e){
    e.preventDefault();

    adicionarLinha ();
    atualizarTabela ();
})

function adicionarLinha () {
    const nomeContato = document.getElementById("nome-contato");
    const numeroContato = document.getElementById("numero-contato");
    const tipoContato = document.getElementById("selector");

    if (nomes.includes(nomeContato.value)) {
        alert(`O nome: ${nomeContato.value} já foi inserido.`)
    }
    else {
        nomes.push(nomeContato.value)
        tipos.push(tipoContato.value)

        let linha = "<tr>";
        linha += `<td>${nomeContato.value}</td>`;
        linha += `<td>${numeroContato.value}</td>`;
        linha += `<td>${tipoContato.value}</td>`;
        linha += "<tr>";

        linhas += linha;
    }

    if (numeros.includes(numeroContato.value)) {
        alert(`O número ${numeroContato.value} já foi inserido.`)
    }
    else {
        numeros.push(numeroContato.value);
    }

    nomeContato.value = "";
    numeroContato.value = "";   
}

function atualizarTabela () {
    const bodyTabela = document.querySelector("tbody");
    bodyTabela.innerHTML = linhas;
}
