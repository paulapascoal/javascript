function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById ('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number (fano.value) > ano){
        window.alert ('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName ('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement ('img')
        img.setAttribute ('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >0 && idade < 10){
               img.setAttribute ('src', 'imagem/foto-menino.png')
            } else if (idade >= 10 && idade < 21 ){
                // Jovem
                img.setAttribute ('src', 'imagem/foto-jovem-homem.png')

            } else if (idade < 21){
                //Adulto
                img.setAttribute ('src', 'imagem/foto-homem.png')

            } else if (idade < 50){
                //Idoso
                img.setAttribute ('src', 'imagem/foto-homem.png')
                
            } else{
                img.setAttribute ('src', 'imagem/foto-homem-idoso.png')
            }



        } else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >0 && idade < 10){
               img.setAttribute ('src', 'imagem/foto-menina.png')
            } else if (idade >= 10 && idade < 21 ){
                // Jovem
                img.setAttribute ('src', 'imagem/foto-jovem-mulher.png')

            } else if (idade < 21){
                //Adulto
                img.setAttribute ('src', 'imagem/foto-jovem-mulher.png')

            } else if (idade < 50){
                img.setAttribute ('src', 'imagem/foto-mulher.png')
            } else{
                img.setAttribute ('src', 'imagem/foto-mulher-idosa.png')
            }



        } 
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
}



