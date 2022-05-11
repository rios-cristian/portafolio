
function cambiarAMiInfo(){
    document.querySelector(".contenedor-texto").style.display="block";   
    document.querySelector(".contenedor-lista-skill").style.display="none";
    document.querySelector(".contenedor-lista-hobbies").style.display="none";
    document.querySelector(".contenedor-formacion").style.display="none";
    
}
function cambiarASkill(){
    document.querySelector(".contenedor-texto").style.display="none";  
    document.querySelector(".contenedor-lista-skill").style.display="block";
    document.querySelector(".contenedor-lista-hobbies").style.display="none";
    document.querySelector(".contenedor-formacion").style.display="none";
}
function cambiarAhobbies(){
    document.querySelector(".contenedor-texto").style.display="none";
    document.querySelector(".contenedor-lista-skill").style.display="none";
    document.querySelector(".contenedor-lista-hobbies").style.display="block";
    document.querySelector(".contenedor-formacion").style.display="none";
}
function cambiarAFormacion(){
    document.querySelector(".contenedor-texto").style.display="none";
    document.querySelector(".contenedor-lista-skill").style.display="none";
    document.querySelector(".contenedor-lista-hobbies").style.display="none";
    document.querySelector(".contenedor-formacion").style.display="block";
}
    
