function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} Horas`
    if(hora >= 0 && hora < 12) {
        //Bom Dia!
        img.src = "imagens/manha1.png"
        document.body.style.background = '#3a3aee'
    } else if(hora >= 12 && hora < 18){
        //Boa Tarde!
        img.src = "imagens/tarde1.png"
        document.body.style.background = '#6634aa'
    }
    else{//Boa Noite!  
        img.src = "imagens/noite1.png"
        document.body.style.background ='#3a3a22'
    }
}
