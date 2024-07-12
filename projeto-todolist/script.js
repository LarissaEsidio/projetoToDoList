const input = document.querySelector(".caixinha");
const button = document.querySelector(".botao");
const listaTarefas = document.querySelector(".lista-tarefas");

let lista = [];

function adicionar() {
  lista.push({
    tarefa: input.value,
    concluida: false,
  });

  input.value = "";

  mostrarlista();
}

function mostrarlista() {
  let novaLi = "";

  lista.forEach((item, posicao) => {
    novaLi =
      novaLi +
      `
        <li class="tarefas ${item.concluida && "done"}">
        <img src="./img/checked.png" alt="icon-adicionar" onclick="concluir(${posicao})"/>
        <p>${item.tarefa}</p>
        <img src="./img/trash.png" alt="icon-remover" onclick="remover(${posicao})"/>
        
        `;
  });

  listaTarefas.innerHTML = novaLi;

  localStorage.setItem("listacompleta", JSON.stringify(lista));
}

function remover(posicao) {
  lista.splice(posicao, 1);

  mostrarlista();
}

function concluir(posicao) {
  lista[posicao].concluida = !lista[posicao].concluida;

  mostrarlista();
}

function recarregarTela() {
  const dadosDoStorage = localStorage.getItem("listacompleta");

  if (dadosDoStorage) {
    lista = JSON.parse(dadosDoStorage);
  }

  mostrarlista();
}

recarregarTela();
button.addEventListener("click", adicionar);

//em function o input.value = '' > serve para ele limpar a caixinha de tarefas para adicionar mais um item.

//localStorage.setItem('listacompleta', JSON.stringify(lista)) : salvar os dados na local storage.
