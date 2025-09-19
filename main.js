const numeroSenha = document.querySelector(".parametro-senha__texto");
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;
const letraMaiuscula = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letraMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789'
const simbolos = '!@%*?';

const botoes = document.querySelectorAll('.parametro-senha__botao');
const CampoSenha = document.querySelector("#campo-senha");
const checkbox = document.querySelectorAll('.checkbox');
const forcaSenha = document.querySelector('.forca');

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


for (i=0;1< checkbox.length;i++){
    checkbox[i].onclick = geraSenha;
}

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
   let numeroALeatorio = Math.random() *alfabeto.length;
   numeroALeatorio = math.floor (numeroALeatorio);
   senha = senha + alfabeto[numeroALeatorio];
  )
}
campoSenha.value = senha;
}


function classficaSenha(tamanhoAlfabeto){
  let entropia = tamanhoSenha* Math.log2(tamanhoAlfabeto);
  console.log(entropia);
  forcaSenha.classList.remove('fraca,'media', forte');
  if(entropia>57){
    forcaSenha.classList.add('forte');
  }else if (tamanhoSenha > 35 && entropia<57){
    forcaSenha.classList.add('media');
  }else if (tamanhoSenha <= 35){
    forcaSenha.classList.add('fraca');
  }
const valorEntropia = document.querySelector('.entropia');
valorEntropia.textContent = 2**Math.floor(entropia)/(100e6*60*60*24);
}