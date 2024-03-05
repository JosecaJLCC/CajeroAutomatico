//Botones
let consultar = document.getElementById("consultar");
let retirar = document.getElementById("retirar");
let ingresar = document.getElementById("ingresar");
let cerrar = document.getElementById("cerrar");
//etiqueta p para mostrar los resultados
let parrafo = document.getElementById("respuesta");
let monto = document.getElementById("monto");
//input para ingresar el monto a retirar/ingresar
let deposito = document.getElementById("deposito");

let variable = localStorage.getItem('usuario');
let objeto = JSON.parse(localStorage.getItem('objeto'));
console.log(variable, objeto);

if(consultar){
    consultar.addEventListener("click", (e) =>{
        parrafo.innerText="$"+objeto.saldo;
    })
}

if(retirar){
    retirar.addEventListener("click", (e)=>{
        /* console.log(monto.value); */
        if(objeto.saldo-parseInt(monto.value)>10){
            objeto.saldo-=parseInt(monto.value);
            deposito.innerText="Se retiro: $"+monto.value;
            parrafo.innerText="Su saldo total es: $"+objeto.saldo

        }
        else{
            alert(`Su cuenta no puede tener menos de $10`);
        }
        monto.value="";
    })
}

if(ingresar){
    ingresar.addEventListener("click", (e) =>{
        /* console.log(monto.value); */
        if(objeto.saldo+parseInt(monto.value)<990){
            objeto.saldo+=parseInt(monto.value);
            deposito.innerText="Se ingreso: $"+monto.value;
            parrafo.innerText="Su saldo total es: $"+objeto.saldo

        }
        else{
            alert(`Su cuenta no puede tener mas de $990`);
        }
        monto.value="";
    })
}

if(cerrar){
    cerrar.addEventListener("click", (e)=>{
        window.location.href="index.html";
    })
    
}


