/*function abrirmenu(){
    let BarraMenuAberto = document.getElementById ('.navegacao'); 
    let BarraMenu = document.getElementById ('.icon-menu'); 

    if (BarraMenuAberto.style.display == "none" && BarraMenu.style.display == "block"){
        BarraMenuAberto.style.display = "flex"; 
        BarraMenu.style.display = "none"; 
    }else{
        BarraMenuAberto.style.display = "none";
        BarraMenu.style.display = "block";
    }
}

*/

function abrirmenu(){
    let BarraMenuAberto = document.getElementById ('navegacao'); //

    if (BarraMenuAberto.style.width == "0px"){
        BarraMenuAberto.style.width = "300px"; //MUDA O WIDTH, QUE ATÉ O MOMENTO VAI ESTAR OCULTO, PARA UMA LARGURA VISÍVEL
    }else{
        BarraMenuAberto.style.width = "0px";
    }
}