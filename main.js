const numeroSenha = document.querySelector("parametro-senha__texto");
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentoTamanho;

function diminuiTamanho (){
  if (tamanhoSenha > 1){
    // tamanhoSenha = tamanhoSenha -1
    tamanhoSenha--;
 }
 numeroSenha.textContent = tamanhoSenha;}
 geraSenha();
}

function aumentoTamanhoTamanho (){
  if (tamanhoSenha > 20){
    // tamanhoSenha = tamanhoSenha +1
    tamanhoSenha++;
 }
 numeroSenha.textContent = tamanhoSenha;
 geraSenha++;
}

const CampoSenha = document.querySelector("#campo-senha");

const letraMaiuscula = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function geraSenha(){
  let senha ='';
  for(let i = 0; i <tamanhoSenha; i++{ 
   let numeroALeatorio = Math.random() * letraMaiuscula.length;
   numeroALeatorio = math.floor (numeroALeatorio);
   senha = senha + letraMaiuscula[numeroALeatorio];
  )
}
campoSenha.value = senha;
}