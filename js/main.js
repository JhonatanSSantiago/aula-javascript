var nome = "Jhonatan Santiago";
var n1 = 22;
var n2 = 10;
var frase = "FLA é o melhor time do mundo"


console.log(nome);
console.log(n1 + n2);
console.log(frase.replace("FLA", "Flamengo"));
console.log(frase.toLowerCase());
console.log(frase.toUpperCase());

var lista = ["maça", "uva", "laranja", "abacaxi"];
console.log(lista);
console.log(lista[1]);
lista.push("pera"); //adiciona objeto na lista
console.log(lista);
lista.pop(); //remove o ultimo objeto da lista
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista[0]);
console.log(lista.toString()[0]);
console.log(lista.join(" * "));

var fruta = {nome: "maça", cor: "vermelha"}
console.log(fruta);
console.log(fruta.nome);

var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxa"}]
console.log(frutas);
console.log(frutas[1].nome);

var idade = prompt("Qual a sua idade? ");
if (idade >= 18 ){
    alert("maior de idade");
} else {
    alert ("menor de idade");
}

var count = 0;
while (count <= 5){
    console.log(count);
    count++;
};


for (var cont=5;cont>=0;cont--){
    console.log(cont)
}

var data = new Date();
alert(data);
alert(data.getMonth()+1);
alert(data.getMinutes());
alert(data.getHours());
alert(data.getSeconds());
alert(data.getDay());