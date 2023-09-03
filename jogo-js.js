var altura = 0
var largura = 0
var vidas = 1

function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()


function posicaoRandomica(){
    //remover o mosquito anterior caso exista
    if(document.getElementById('mosquito')){
    document.getElementById('mosquito').remove()
    if(vidas > 3){
        window.location.href = 'fim_de_jogo.html'
    } else{
    document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
    vidas++ //vidas = 1, então quando não for clicado vai substituir a imagem, para selecionar outra var é só somar o vidas com mais um
    }
    
    } //se localizar o elemento vai entrar na forma true
    

    var posicaoX = Math.floor(Math.random() * largura) - 90 //math.floor = arredonda número, math.random = número aleatório vezes a largura -90 para não vazar da tela
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY //Se posição for menor que zero, ela recebe 0, se não, recebe o valor dela mesma
    
    console.log(posicaoX, posicaoY)
    
    //criar o elemento html
    
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png' //incluindo imagem
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio() //espaço para não juntar as classes
    mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove() //this: ajusta o contexto, referência ao próprio elemento html que faz a function
    }
    document.body.appendChild(mosquito) //adicionando um filho para o body  
}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)
    switch(classe){
        case 0:
        return 'mosquito1' //caso o random for 0, atribuirá a class mosquito1
        case 1:
        return 'mosquito2'
        case 2:
        return 'mosquito3'
    }
}

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)
    switch(classe){
        case 0:
        return 'ladoA' //caso o random for 0, atribuirá o ladoA
        case 1:
        return 'ladoB'
    }
}

