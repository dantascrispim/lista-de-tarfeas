

const ul = document.getElementById("task-list");
const input = document.getElementById("taskInput");

function adicionarTarefa() {
  if (input.value !== "") {
    const criarLi = document.createElement("li");
    criarLi.textContent = input.value;

    //Adiciona um botão para remover a tarefa
    const createButtonRemove = document.createElement("button");
    createButtonRemove.textContent = "Remover";
    createButtonRemove.style.background = "#D93636"
    
    createButtonRemove.onclick =  () => {
      ul.removeChild(criarLi);
    };
    criarLi.appendChild(createButtonRemove);
    ul.appendChild(criarLi);

    input.value = "";
  } else {
    alert("Por favor inserir uma tarefa!");
  }
}
