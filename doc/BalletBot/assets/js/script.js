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
/*
document.addEventListener('DOMContentLoaded', function(){
    function abrirmenu(){
        let BarraMenuAberto = document.getElementById ('.cabecalho'); 
        console.log('ok funciona a função');
        BarraMenuAberto.style.backgroundColor = "transparent";
    }
})*/

function abrirmenu(){
    let BarraMenuAberto = document.querySelector('.cabecalho'); 
    console.log('ok funciona a função');
    BarraMenuAberto.style.padding = "200px";
}
