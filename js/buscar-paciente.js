var botaoAdiciona = document.querySelector("#buscar-pacientes")

botaoAdiciona.addEventListener("click", function(){
    console.log("Buscando Pacientes");

    var xhr = new XMLHttpRequest(); //Permite utilizar a API
    
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); //Abrindo API

    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");
        if(xhr.status == 200){
            erroAjax.classList.add("invisivel");
        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);
    
        pacientes.forEach(function(paciente){
            adicionaPacienteNaTabela(paciente);
        });
    }else{
        console.log(xhr.status);
        console.log(xhr.responseText);
        erroAjax.classList.remove("invisivel");
    }
    });

    xhr.send();
});