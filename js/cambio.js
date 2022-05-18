
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
var estado=true;
function abrirhamburguesa(){
    
    console.log("hola");
    if(estado){
        document.querySelector(".nav").style.display="block";
        estado=false;
    }else{
        document.querySelector(".nav").style.display="none";
       estado=true;
    }

}
const elementMenu = document.getElementById("menuhamburguesa");
const elementNav = document.getElementById("nav");

