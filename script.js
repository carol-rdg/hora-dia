function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var agora = new Date()
    var hora = agora.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    
    if (hora >= 0 && hora < 12){
        //DIA
        img.src = 'fotodia.jpeg'  
        document.body.style.background = '#e2cd9f'

    } else if (hora >= 12 && hora <= 18) {
        //TARDE
        img.src = 'fototarde.jpeg'
        document.body.style.background = '#b9846f'

        //NOITE
    } else { 
        img.src = 'fotonoite.jpeg'
        document.body.style.background = '#515154'
}

};

  

/* var dia = new Date()
var diaSem = dia.getDay
msg2.innerHTML = `Hoje é ${diaSem}`

switch (diaSem) {
    case 0:
        document.write = 'domingo'
        break
    case 1:
        document.write = 'segunda'
        break
    case 2: 
        document.write = 'terça'
        break
    case 3:
        document.write = 'quarta'
        break
    case 4: 
        innerHTML = 'quinta'
        break
    case 5:
        document.write = 'sexta'
        break
        case 6:
            document.write = 'sábado'
            break

        default:
            document.write = 'Dia inválido'
        break
}
*/

