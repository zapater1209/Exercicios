var arrayRespostas = document.getElementsByClassName("resposta")
var arrayButton = document.getElementsByClassName("buttonButton");

for(i = 0; i < arrayButton.length; i++){
    arrayButton[i].setAttribute("onClick", "question" + (i+2) + "()");
}

function question2(){
    let resposta = [1,3,4,9,5,7,2,6,20,11,12,17]
    resposta.sort(function(a,b){
     if(a > b) return 1;
     if(a < b) return -1;
     return 0;
    });
    resposta = "ordem crescente: [" + resposta+"]";
    arrayRespostas[0].textContent=resposta;
 }

function question3(){
    let resposta = [1,3,4,9,5,7,2,6,15,12]
    resposta.sort(function(a,b){
     if(a < b) return 1;
     if(a > b) return -1;
     return 0;
    });
    resposta = "ordem decrescente: [" + resposta+"]";
    arrayRespostas[1].textContent=resposta;
 }

function question4(){
    let resposta = document.getElementById("LoremIpsum").textContent;
    resposta = "Quantidade de Caracteres: "+ resposta.length;
    arrayRespostas[2].textContent=resposta;

}

function question5(){
    let frase = document.getElementById("Frase").textContent;
//5.1
    let resposta1 = frase.slice(23, 58);
    resposta1 = resposta1.replace("marcelo", "joão");
    arrayRespostas[3].textContent = resposta1;
 //5.2
    let resposta2 = resposta1.replace("pão", "torta");
    arrayRespostas[4].textContent = resposta2;
//5.3
    let resposta3 = resposta2.replace("joão ", "").replace(" joão", "");
    arrayRespostas[5].textContent = resposta3;
//5.4
    let resposta4 = resposta3.slice(5);
    arrayRespostas[6].textContent = resposta4;
//5.5
    let resposta5 = resposta4 + " da IBRS";
    arrayRespostas[7].textContent = resposta5;
//5.6
    let resposta6 = resposta5.split("ou torta na").slice(1);
    arrayRespostas[8].textContent = resposta6;
}

function question6(){
    let arrayNomes= ['João','Marcelo','Marcus','Lucas','Nelson'];
//6.1
    arrayNomes.push("Azeite");
    arrayRespostas[9].textContent = arrayNomes;
//6.2
    arrayNomes.splice(1, 1);
    arrayRespostas[10].textContent = arrayNomes;
//6.3
    arrayNomes.sort()
    arrayRespostas[11].textContent = arrayNomes;
//6.4
    resposta = "Existem "+arrayNomes.length+" registros em seu array";
    arrayRespostas[12].textContent = resposta;
}