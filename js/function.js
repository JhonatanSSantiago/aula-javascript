/*function soma (n1, n2){
    return n1 + n2;
} */

function botao(){
    document.getElementById("agrad").innerHTML = "<b>Obrigado por clicar</b>";


    //alert("Obrigado por clica");
}

function redirecionamento(){
    window.open("https://www.google.com"); //abre em outra janela
   // window.location.href = "https://www.google.com"; // abre na mesma janela
}

function trocar(){
    document.getElementById("id2").innerHTML = "Obrigado"; 
}

function voltar(){
    document.getElementById("id2").innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

//alert(soma(5,10));


/*function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar= true;
    } else{
        validar = false;
    }
    return validar;

}

var idade = prompt("Qul a sua idade: ");
console.log(validaIdade(idade));*/