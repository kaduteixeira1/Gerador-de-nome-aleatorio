function gerarNome(params) {
    var nSilabas = document.getElementById('silabas').value 
    nSilabas = parseInt(nSilabas)

    var name = ""

    var vog, cons
    vog = ""
    cons = ""

    for (let cSilabas = 1;cSilabas <= nSilabas ; cSilabas++) {

    var vogAleatoria 
    var consAleatoria 
    consAleatoria = parseInt(Math.random()*20+1)
    vogAleatoria = parseInt(Math.random()*4 + 1)

        switch (consAleatoria) {
        case 1:
            cons = "B"
            break;
        case 2:
            cons = "C"
            break;
        case 3:
            cons = "D"
            break;
        case 4:
            cons = "F"
            break;
        case 5:
            cons = "G"
            break;    
        case 6:
            cons = "H"
            break;
        case 7:
            cons = "J"
            break;        
        case 8:
            cons = "K"
            break;
        case 9:
            cons = "L"
            break;
        case 10:
            cons = "M"
            break;
        case 11:
            cons = "O"
            break;
        case 12:
            cons = "P"
            break;    
        case 13:
            cons = "Q"
            break;
        case 14:
            cons = "R"
            break;
        case 15:
            cons = "S"
            break;
        case 16:
            cons = "T"
            break;
        case 17:
            cons = "W"
            break;
        case 18:
            cons = "V"
            break;
        case 19:
            cons = "X"
            break;    
        case 20:
            cons = "Y"
            break;
        case 21:
            cons = "Z"
            break;
        default:
            break;
    }

    switch (vogAleatoria) {
        case 1:
            vog = "A"
            break;
        case 2:
            vog = "E"
            break;
        case 3:
            vog = "I"
            break;
        case 4:
            vog = "O"
            break;
        case 5:
            vog = "U"
            break;
        default:
            break;
    }
    vogEcons = parseInt(Math.random()*1) 

    var sequencia
    sequencia = ""

    switch (vogEcons) {
        case 0:
            sequencia = cons + vog
            break;
        case 1: 
            sequencia = vog + cons
            break;
        default:
            break;
    }
        name = name + sequencia
        
    }

    document.getElementById('r1').innerHTML = name
    





}