var dadosForm = null

function cadastroForm() {
    var nome = document.getElementById("nome");
    var sobrenome = document.getElementById("sobrenome");
    var email = document.getElementById("email");

    var dados = JSON.parse(localStorage.getItem("dadosForm"));

    if(dados == null){
        localStorage.setItem("dadosForm", "[]")
        dados = [];
    }

    var todosDados = {
        nome: nome.value,
        sobrenome: sobrenome.value,
        email: email.value
    }

    dados.push(todosDados)

    localStorage.setItem("dadosForm", JSON.stringify(dados))
    alert("Formulário registrado com sucesso!")

    nome.value = "";
    sobrenome.value = "";
    email.value = "";
}