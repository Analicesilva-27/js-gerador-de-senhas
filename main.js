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
const letraMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789'
const simbolos = '!@%*?';

function geraSenha(){
  let alfabeto = '';
  if (checkbox[0].checkbox){
    alfabeto = alfabeto + letraMaiuscula
    
     if (checkbox[0].checkbox){
    alfabeto = alfabeto + letraMinuscula;
    
     if (checkbox[0].checkbox){
    alfabeto = alfabeto + numeros;
    
     if (checkbox[0].checkbox){
    alfabeto = alfabeto + simbolos;
    
  }
  let senha ='';
  for(let i = 0; i <tamanhoSenha; i++{ 
   let numeroALeatorio = Math.random() * letraMaiuscula.length;
   numeroALeatorio = math.floor (numeroALeatorio);
   senha = senha + alfabeto[numeroALeatorio];
  )
}
campoSenha.value = senha;
}