//const prompt = require('prompt-sync')();
const convertir = document.getElementById('calcular')
const carrus = document.querySelector('.carousel-inner')
const Total = document.getElementById('total')

convertir.addEventListener('click',()=>{

    
    carrus.innerHTML="";    
    const numero = parseInt(document.getElementById('numero').value);

    if(!/^[0-9]+$/.test(numero)){
        console.log("Error el número no es de tipo NUMBER ! Por favor ingresa un número")
        Total.innerText="Error el número no es de tipo NUMBER ! \nPor favor ingresa un número mayor a cero"
        numero="";
    }
    else if (typeof(numero)==='number'){
        console.log("Ok es un tipo Number")
         let multi=1;    
        for(let i=1; i<=numero; i++){
                multi*=i;
                const colores = ["red", "green", "blue", "fuchsia"];
                const aleat = Math.floor(Math.random() * colores.length);
                const color = colores[aleat]; // Genera un nuevo color para cada elemento

                    if(i===1){

                        console.log("es uno" + i)
                        let crearDiv= document.createElement('div');
                        crearDiv.classList.add('carousel-item', 'active') ;
                        let crearPararf= document.createElement('p');
                        crearPararf.innerText=i;   
                        crearPararf.style.color=color;
                       crearDiv.appendChild(crearPararf);
                       carrus.appendChild(crearDiv);     
                       //console.log("este es el primero")
                    }else{
                        console.log("los demas " +i)
                       let crearDiv= document.createElement('div');
                        crearDiv.classList.add('carousel-item') ;
                        let crearPararf= document.createElement('p');
                        crearPararf.innerText=i; 
                        crearPararf.style.color=color;  
                       crearDiv.appendChild(crearPararf);
                       carrus.appendChild(crearDiv);  
                       //console.log("estos son los demas")
 

                    }
                //console.log(i);

         } 
         Total.innerText=`el total factorial de !${numero}  es ${multi}`;
         //console.log("el total factorial de !"+numero +" es " +multi)
         numero="";
    
    }else if(numero==0){
        console.log("El total factorial es 1 ")
        Total.innerText=`El total factorial es 1`; 
        numero="";

    }

})

/*
let bucle= true; 
do{
    //let numeo= parseInt( prompt("Ingresa el numero"));
    if(isNaN(numero)){
        console.log("Error el número no es de tipo NUMBER ! Por favor ingresa un número")
        bucle=false;
    
    }else if (typeof(numero)==='number'){
        console.log("Ok es un tipo Number")
         let multi=1;    
        for(let i=1; i<=numero; i++){
                multi*=i;

         }   
         //console.log("el total factorial de !"+numeo +" es " +multi)
        bucle=false;
    }else if(numero==0){
        console.log("El total factorial es 1 ")
        bucle=false;
    }

}while(bucle)*/