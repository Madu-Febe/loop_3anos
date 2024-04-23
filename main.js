
function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("🐘 Qual o maior animal terrestre do mundo ainda vivo?");

    
    if (respostaTime.toLowerCase() === "elefante") {
      alert("Isso mesmo! O elefante é o maior animal terrestre existente!");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("A resposta está errada, tente novamente! A dica é - Animal cinza com grandes trombas e presas.");
    }
  }
}

// Chamada da função para iniciar o processo
verificarTime();

  
