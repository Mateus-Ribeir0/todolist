const lista = document.getElementById("lista");
const atividade = document.getElementById("campoTexto");

function addAtividade() {
    const textoAtividade = atividade.value.trim();

    if (textoAtividade === "") {
        alert("Digite alguma coisa");
        return;
    }


    const li = document.createElement("li");
    const done = document.createElement("input");
    const span = document.createElement("span");
    const botao = document.createElement("button");
    const div = document.createElement("div");

    div.id = "check_nome";


    done.type = "checkbox";
    done.classList.add("cor");
    span.textContent = textoAtividade;
    botao.textContent = "Excluir";
    botao.classList.add("btn-excluir");


    botao.addEventListener("click", () => {
        li.remove();
        progressBar();
    });


    li.appendChild(div);
    li.appendChild(botao);
    div.appendChild(done);
    div.appendChild(span);

    lista.appendChild(li);

    atividade.value = "";
    progressBar();
}

function contarElementos() {
    var elementosLi = lista.getElementsByTagName("li");
    console.log(elementosLi.length);
    return elementosLi.length;
}

function contarChecks() {
    var checks = lista.querySelectorAll("input[type='checkbox']:checked");
    console.log(checks.length);
    return checks.length;
}


function progressBar(){
    const numTotal = contarElementos();
    const numFeito = contarChecks();
    var progress = (numFeito / numTotal) * 100;
    var progressRound = Math.round(progress * 100) / 100;
    const valorProgress = document.getElementById("valorProgresso");
    valorProgress.textContent = progressRound + "%"
    valorProgress.style.width = progressRound + "%"
}

lista.addEventListener('change', function(event) {

    if (event.target.tagName === 'INPUT' && event.target.type === 'checkbox') {
     progressBar();
    }
});


