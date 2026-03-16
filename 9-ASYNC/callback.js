console.log("1")

setTimeout(function() { // <= "outras coisas"
    console.log("5")
}, 2000) //MILISEGUNDOS

console.log("2")
console.log("3")
console.log("4")

//O PROGRAMA INICIA UMA TAREFA E OUTRAS COISAS ACONTECEM ENQUANTO EXECUTA. 