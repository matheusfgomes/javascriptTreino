//3-parte
// function  soma(n1,n2){
// 	return n1+n2;
// }

//  function setReplace(frase,nome,novo_nome){
//  	return frase.replace(nome, novo_nome);
//  }
// alert(soma(5,10));
// alert(setReplace("Vai Japão" , "Japão", "Brasil"));

// function validaIdade(idade){
// 	var validar;
// 	if(idade>=18){
// 		validar = true;
// 	} else{
// 		validar = false;
// 	}
// 	return validar;

// }

//  var idade = prompt("Qual sua idade");
//  console.log(validaIdade(idade));


//4-parte

function clicar(){
	//alert("Obrigado por Clicar");
	document.getElementById("agradeco").innerHTML = "<b>Obrigado por clicar</b>"; 
}

function redPag(){
	window.open("https://www.youtube.com/watch?v=ZjUAsMnCB_Y");
	//window.location.href = "https://www.youtube.com/watch?v=ZjUAsMnCB_Y";
}


function trocar(elemento){
	//document.getElementById("mousemove").innerHTML = "Obrigado por ser trouxa";
	//alert("trocar texto");
	elemento.innerHTML = "Clique para ir para a página";
}

function voltar(elemento){
	//document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
	elemento.innerHTML = "Passe o mouse aqui";
}