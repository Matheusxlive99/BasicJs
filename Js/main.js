//var nome = "Matheus Felipe";
//var idade = 23;
//var idade2 = 10;
//var frase = "Psg é o melhor time do mundo"
//alert(nome + " tem " + idade + " anos "); concatena
//alert(idade + idade2); soma
//console.log(nome); mostra no console do navegador
//console.log(idade); mstra no console
//console.log(frase.replace("Psg", "Real MAdrid")); Substitui palavra
//alert(frase.replace("Psg", "Real Madrid")); Substitui palavra no alert
//console.log(frase.replace("Psg", "Real Madrid").toUpperCase()); Substitui palavra e coloca tudo maiusculo

//var n1 = 10;
//var n2 = 20;
//console.log(n1 * n2); Multiplica e mostra resultado no console


//var lista = ["maça", "pera", "laranja"];
//console.log(lista); Imprime lista
//console.log(lista[2]); Imprime posição 2 da lista, no caso laranja
//alert(lista[1]); imprime posição da lista no alert
//lista.push("uva"); insere nome na ultima posição da lista;
//lista.pop(); remove ultimo nome da lista
//lista.push("uva");
//console.log(lista.length); mostra o tamanho da lista
//console.log(lista.reverse()); imprime a lista ao contrario
//console.log(lista.toString()); transforma lista em string
//console.log(lista.join(" - ")); transdorma em string e separa por traço etc

//var fruta = {nome: "banana", cor: "amarela"}
//console.log(fruta); imprime dicionario fruta
//console.log(fruta.cor); imprime cor da fruta
//console.log(fruta.nome); imprime nome da fruta
//var frutas = [{nome:"banana", cor: "amarela"}, {nome:"pera", cor: "verde"}, {nome:"uva", cor: "roxa"}] 
//console.log(frutas);
//alert(frutas[2].nome); imprime nome da fruta 3;

/*var idade = 18; condicional para verificar idade
if (idade >= 18){
    alert("Maior de idade");
}else{
    alert("menor de idade");
}; */

/*var idade = prompt("Qual a sua idade?"); grava resposta na variavel idade
if (idade >= 18){
    alert("Maior de idade");
}else{
    alert("menor de idade");
}; */

/* var count = 0; exemplo estrutura de repetição
while (count <= 5){
    console.log(count);
    count++;
} */

/*var count; Exemplo for
for(count=0; count<=5; count++){
    alert(count);
}
*/

//var d = new Date(); 
//alert(d); imprime data atual
//alert(d.getMonth()+1); imprime mes atual
//alert(d.getMinutes()); minutos
//alert(d.getHours()); horas
//alert(d.getDay()); dia


/*function soma(n1,n2){ função para soma
    return n1 + n2;
}
*/

//alert(soma(20,40));

/*function setReplace(frase, nome, novo_nome){ função para trocar palavra
   return frase.replace(nome, novo_nome);
}
alert(setReplace("vai Japão", "Japão", "Brasil"));
*/

/*function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
} 
var idade = prompt("Qual a sua idade?")
console.log(validaIdade(idade));
*/

/*function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado pro clicar</b>";
    //console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    window.open("https://globoesporte.globo.com/");
    window.location.href = "https://globoesporte.globo.com/"; 
} 

 function trocar(){
     document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
 }

 function voltar(){
     document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
 }
 */