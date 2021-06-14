function reproduce(){
    var audioPenny = document.getElementById("idAudio");

    var camposBocadillos = [
        document.getElementById("idGloboUno"),
        document.getElementById("idGloboDos"),
        document.getElementById("idImagenAyuda")
    ];

    var lanzamiento;

    audioPenny.play();

    lanzamiento = intervaloTiempo(function(){
        mostrarBocatas(camposBocadillos[0])
    },500);

    lanzamiento = intervaloTiempo(function(){
        mostrarBocatas(camposBocadillos[1])
    },1500);

    lanzamiento = intervaloTiempo(function(){
        mostrarBocatas(camposBocadillos[2])
    },3000);

}

function mostrarBocatas(bocata){

    document.getElementById("idConReglas").style.display="block";

    return bocata.style.display="block";

}

function ocultarBocatas(){

    var camposBocadillos = [
        document.getElementById("idGloboUno"),
        document.getElementById("idGloboDos"),
        document.getElementById("idImagenAyuda")
    ];

    for (let index = 0; index < camposBocadillos.length; index++) {
        camposBocadillos[index].style.visibility="hidden";
    }

    document.getElementById("idConReglas").style.display="none";

}

function intervaloTiempo(funcion,milisegundos){

    return window.setTimeout(funcion, milisegundos);

}

function jugadaCpu(listaJugadas){

    var aleatorio = Math.random()*(listaJugadas.length);

    aleatorio = Math.floor(aleatorio);

    return cpu=listaJugadas[aleatorio];

}

function compitiendo(elecJugador,elecCpu){

    var ganador="";

    if (elecJugador=="piedra") {

        switch (elecCpu) {

            case 'lagarto':
                ganador ="jugador";
                break;

            case 'tijeras':
                ganador ="jugador";
                break;

            case 'spock':
                ganador ="cpu";
                break;

            case 'papel':
                ganador ="cpu";
                break;

            case 'piedra':
                ganador ="empate";
                break;

            default:
                ganador ="empate";
                break;
        }

        return ganador;

    }else if(elecJugador=="papel") {

        switch (elecCpu) {

            case 'spock':
                ganador ="jugador";

            case 'piedra':
                ganador ="jugador";
                break;

            case 'lagarto':
                ganador ="cpu";
                break;

            case 'tijeras':
                ganador ="cpu";
                break;

            case 'papel':
                ganador ="empate";
                break;

            default:
                ganador ="empate";
                break;

        }

        return ganador;

    }else if(elecJugador=="tijeras") {

        switch (elecCpu) {

            case 'lagarto':
                ganador ="jugador";
                break;

            case 'papel':
                ganador ="jugador";
                break;

            case 'spock':
                ganador ="cpu";
                break;

            case 'piedra':
                ganador ="cpu";
                break;

            case 'tijeras':
                ganador ="empate";
                break;

            default:
                ganador ="empate";
                break;

        }

        return ganador;

    }else if(elecJugador=="lagarto") {

        switch (elecCpu) {

            case 'spock':
                ganador ="jugador";
                break;

            case 'papel':
                ganador ="jugador";
                break;

            case 'tijeras':
                ganador ="cpu";
                break;

            case 'piedra':
                ganador ="cpu";
                break;

            case 'lagarto':
                ganador ="empate";
                break;

            default:
                ganador ="empate";
                break;

        }

        return ganador;

    }else if(elecJugador=="spock") {

        switch (elecCpu) {

            case "tijeras":
                ganador ="jugador";
                break;

            case "piedra":
                ganador ="jugador";
                break;

            case "papel":
                ganador ="cpu";
                break;

            case "lagarto":
                ganador ="cpu";
                break;

            case 'spock':
                ganador ="empate";
                break;

            default:
                ganador ="empate";
                break;

        }

        return ganador;

    }

}

function limpiarEleccionesAnt(listaAlimpiar){

    for (let index = 0; index < listaAlimpiar.length; index++) {
        listaAlimpiar[index].style.border = "";
    }

}

function localizarDivCpu(lista,cadena){

    var objetivo;

    for (let index = 0; index < lista.length; index++) {

        if (lista[index].firstChild.attributes.alt.value==cadena) {
            return objetivo = lista[index];
        }

    }

}

function pintarJugadaGanadora(jugadaG,jugadaP){

    var ganador = jugadaG;
    var perdedor = jugadaP;
    var panel = document.getElementById("muestraResultado");
    var jGanadoras=[
        "LAS TIJERAS CORTAN EL PAPEL ", //- 0
        "EL PAPEL ENVUELVE A LA PIEDRA ",//- 1
        "LA PIEDRA APLASTA AL LAGARTO ",//- 2
        "EL LAGARTO ENVENENA A SPOCK ",//- 3
        "SPOCK DESTRUYE LAS TIJERAS ",//- 4
        "LAS TIJERAS DECAPITAN AL LAGARTO ",//- 5
        "PAPEL REFUTA A SPOCK ",//- 6
        "SPOCK DESINTEGRA LA PIEDRA ",//- 7
        "PIEDRA APLASTA LAS TIJERAS ",//- 8
        "LAGARTO SE COME EL PAPEL "//-9
    ];

    if (ganador=="piedra"||ganador=="empate") {

        panel;

        switch (perdedor) {

            case "lagarto":
                panel.innerHTML = jGanadoras[2];
                break;

            case "tijeras":
                panel.innerHTML = jGanadoras[8];
                break;

            default:
                panel =ganador+" empata contra "+perdedor;
                break;

        }
    }else if (ganador=="papel"||ganador=="empate") {

        panel;

        switch (perdedor) {

            case "piedra":
                panel.innerHTML = jGanadoras[1];
                break;

            case "spock":
                panel.innerHTML = jGanadoras[6];
                break;

            default:
                panel =ganador+" empata contra "+perdedor;
                break;

        }

    }else if (ganador=="tijeras"||ganador=="empate") {

        panel;

        switch (perdedor) {

            case "papel":
                panel.innerHTML = jGanadoras[0];
                break;

            case "lagarto":
                panel.innerHTML = jGanadoras[5];
                break;

            default:
                panel =ganador+" empata contra "+perdedor;
                break;

        }

    }else if (ganador=="lagarto"||ganador=="empate") {

        panel;

        switch (perdedor) {

            case "papel":
                panel.innerHTML = jGanadoras[9];
                break;

            case "spock":
                panel.innerHTML = jGanadoras[3];
                break;

            default:
                panel =ganador+" empata contra "+perdedor;
                break;

        }

    }else if (ganador=="spock"||ganador=="empate") {

        panel;

        switch (perdedor) {

            case "piedra":
                panel.innerHTML = jGanadoras[7];
                break;

            case "tijeras":
                panel.innerHTML = jGanadoras[4];
                break;

            default:
                panel = ganador+" empata contra "+perdedor;
                break;

        }

    }else{

        panel.innerHTML = ganador+" empata contra "+perdedor;

    }

}


function partida(e){

    var divJugador = e.currentTarget;
    var eleccionJug = e.currentTarget.firstChild.attributes.alt.value;
    var jugadas = ['piedra','papel','tijeras','lagarto','spock'];
    var eleccionCpu = jugadaCpu(jugadas);
    var resultado = compitiendo(eleccionJug,eleccionCpu);
    var divsElecciones = document.getElementsByClassName("cEleccion");
    var divCpu = localizarDivCpu(divsElecciones,eleccionCpu);

    limpiarEleccionesAnt(divsElecciones);

    if(resultado=="cpu"){

        pintarJugadaGanadora(eleccionCpu,eleccionJug);

        document.getElementById("muestraResultado").style.color="red";

    }else if(resultado=="jugador"){

        pintarJugadaGanadora(eleccionJug,eleccionCpu);

        document.getElementById("muestraResultado").style.color="green";

    }else{

        document.getElementById("muestraResultado").innerHTML = eleccionJug+" empata contra "+eleccionCpu;
        document.getElementById("muestraResultado").style.color="black";

    };

    //-marcador
    if(resultado=="cpu"){

        marcadores[1]++;
        document.getElementById("marcCpu").innerHTML=marcadores[1];

    }else if(resultado=="jugador"){

        marcadores[0]++;
        document.getElementById("marcJug").innerHTML=marcadores[0];

    }

    //- estilos para las elecciones
    for (let index = 0; index < divsElecciones.length; index++) {

        if (resultado=="jugador"&&divsElecciones[index].firstChild.alt==eleccionJug) {

            divsElecciones[index].style.border = "2px solid green";
            divCpu.style.border = "2px solid red";

        }else if (resultado=="cpu"&&divsElecciones[index].firstChild.alt==eleccionCpu){

            divJugador.style.border = "2px solid red";
            divsElecciones[index].style.border = "2px solid green";

        }else if(resultado=="empate"){

            return divJugador.style.border = "2px solid black";

        }

    }

}

var marcadores = [
    mJ=0,
    mC=0
];


function precarga(){

    var elecciones = document.getElementsByClassName("cEleccion");

    for (let index = 0; index < elecciones.length; index++) {
        elecciones[index].addEventListener("click", partida);
    }

}

window.onload = precarga();