let usuario = document.getElementById("user");
let contrasenia = document.getElementById("pass");
let boton = document.getElementById("play");

let cuentas = [
    {nombre: "Mali", contrasenia: "Mali", saldo: 200},
    {nombre: "Gera", contrasenia: "Gera", saldo: 290},
    {nombre: "Maui", contrasenia: "Maui", saldo: 67}
];

if(boton){
    boton.addEventListener("click", (e) => {
        let bol=true
        let obj={}
        console.log(usuario, contrasenia)
        for(let i=0;i<cuentas.length;i++){
        
            if(cuentas[i].nombre==usuario.value && cuentas[i].contrasenia==contrasenia.value){
                console.log(cuentas[i].nombre, cuentas[i].contrasenia);
                obj=cuentas[i];
                bol=false;
                break; 
            }   
        }
        if(bol){
            alert("Credenciales incorrectas") 
        }
        else{
            localStorage.setItem("usuario", usuario.value);
            localStorage.setItem("objeto", JSON.stringify(obj));
            
            window.location.href = "cajero.html";
        }
      
    
    });
}

