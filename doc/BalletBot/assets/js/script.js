function abrirmenu(){
    let BarraMenuAberto = document.querySelector('.navegacao'); 
    let BarraMenu = document.querySelector('.icon-menu'); 

    if (BarraMenuAberto.style.display == "none" && BarraMenu.style.display == "block"){
        BarraMenuAberto.style.display = "flex"; 
        BarraMenu.style.display = "none"; 
    }else{
        BarraMenuAberto.style.display = "none";
        BarraMenu.style.display = "block";
    }    
}

function closeMenu(){
    let BarraMenuAberto = document.querySelector('.navegacao'); 
    let BarraMenu = document.querySelector('.icon-menu'); 

    if (BarraMenuAberto.style.display == "flex" && BarraMenu.style.display == "none"){
        BarraMenuAberto.style.display = "none"; 
        BarraMenu.style.display = "block"; 
    }else{
        BarraMenuAberto.style.display = "flex";
        BarraMenu.style.display = "none";
    }    
}
