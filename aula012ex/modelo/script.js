function carregar(){
    var msg = window.document.getElementById ('msg')
    var img = window.document.getElementById ('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 10
   
    if (hora >= 0 && hora < 12){
        img.src ='imagem/manha.png'
        document.body.style.background ='#b4b402'
        msg.innerHTML = `Agora são ${hora} horas. Bom Dia!`
        
    } else if (hora >= 12 && hora < 18){
        img.src = 'imagem/tarde.png'
        document.body.style.background = '#F76602'
        msg.innerHTML = `Agora são ${hora} horas. Boa Tarde!`
    } else{
        img.src = 'imagem/noite.png'
        document.body.style.background = ' #0859B4'
         msg.innerHTML = `Agora são ${hora} horas. Boa Noite!`

    }

}



