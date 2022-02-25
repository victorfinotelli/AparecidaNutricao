// var pacientes = document.querySelectorAll(".paciente"); Comentei pois ja foi declarada na calcula-imc.js

// pacientes.forEach(function(paciente){
//     paciente.addEventListener("dblclick", function(){
//         console.log("Fui clicado com um duplo click");
//         this.remove();
//     });
// });

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event){
    
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        event.target.parentNode.remove();
    },500);
    
})