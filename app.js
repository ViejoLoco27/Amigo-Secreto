const listaAmigos = []
const inputAmigo =document.getElementById("amigo");
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

//Agregar amigos en la lista

function agregarAmigo(){
    listaAmigos.push(inputAmigo.value);

//Renderizar lista de amigos
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;


// Condición: alert si el campo "Escribe nombre esta vacío"
    if(!inputAmigo.value){
        alert("Por favor ingresar un nombre");
        return;
    };
};

//Sortear lista de amigos
function sortearAmigo() {
    if (listaAmigos.length === 0){
        alert ("No hay amigos suficientes para sotear")
    };
    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos [random]
    ulResultado.innerHTML = `<li> El amigo secreto es: ${inputAmigo.value}</li>`;
    
};