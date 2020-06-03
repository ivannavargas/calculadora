function sumar() {
    var a,b;
  

    //covertir el valor de x a un entero 
    a=document.getElementById("a").value;
    b=document.getElementById("b").value;

    a=parseFloat(a);
    b=parseFloat(b);
    
  
  

    document.getElementById("resultado").innerHTML=a+b;



}
function dividir() {
    let a,b;
  

    //covertir el valor de x a un entero 
    a=document.getElementById("a").value;
    b=document.getElementById("b").value;

    a=parseFloat(a);
    b=parseFloat(b);
    
  
  

    document.getElementById("resultado").innerHTML=a/b;
}
function multiplicar() {
    let a,b;
  

    //covertir el valor de x a un entero 
    a=document.getElementById("a").value;
    b=document.getElementById("b").value;

    a=parseFloat(a);
    b=parseFloat(b);
    
  
  

    document.getElementById("resultado").innerHTML=a*b;

}
function modulo() {
    let a,b;
  

    //covertir el valor de x a un entero 
    a=document.getElementById("a").value;
    b=document.getElementById("b").value;

    a=parseFloat(a);
    b=parseFloat(b);
    
  
  

    document.getElementById("resultado").innerHTML=a%b;



}