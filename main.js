//-----Obtener datos----

const formulario = document.getElementById("form");

const nombre = document.getElementById("firstName");
const apellido = document.getElementById("lastName");
const email = document.getElementById("email");
const monto = document.getElementById("amount");
const cuotas = document.getElementById("fees");


const montoFinal = document.getElementById("finalAmount");
const cuotasFinales = document.getElementById("finalFees");
const intereses = document.getElementById("interests");
const totalADevolver = document.getElementById("totalAmount");
const guardarInfo = document.getElementById("simulate")



//------Constructores-----

class Camioneta{
    constructor(id,modelo,motor,precio,combustible){
        this.id=id;
        this.modelo=modelo;
        this.motor=motor;
        this.precio=precio;
        this.combustible=combustible
    }
}

//------Array----

const pickups = [
    {
        id:1,
        modelo:"Ecosport",
        motor:"SE 1.5L",
        precio:7000000,
        combustible:"Nafta",
        img:'/img/ecosport.png'
    },
    {
        id:2,
        modelo:"Nueva Bronco Sport",
        motor:"2.5 Big Bend TM",
        precio:10500000,
        combustible:"Nafta" ,
        img: '/img/bronco.png',
    },
    {
        id:3,
        modelo:"Nueva Territory",
        motor:"2.8 Nueva Territory TitaniumL",
        precio:12500000,
        combustible:"Nafta" ,
        img: '/img/territory.png',
    },
    {
        id:4,
        modelo:"Nueva Kuga Híbrida",
        motor:"3.0 Nueva Kuga Híbrida",
        precio:19000000,
        combustible:"Nafta",
        img: '/img/kugahybrid.png',
    }
]

pickups.push(new Camioneta)


//----Financiacion-----

const tasa = 0.24; 

formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    const cuotaPrestamo = obtenerCuotaPrestamo()
    const total = obtenerTotal(cuotaPrestamo)
    pintarPrestamo(total)
});

// Obtener cuota del préstamo

const obtenerCuotaPrestamo = () => {
    const cuotaPrestamo = tasa * monto.value / (1 - (1 + tasa)**-cuotas.value)
    return cuotaPrestamo
};

// Obtenemos el total a devolver

const obtenerTotal = (cuotaPrestamo) => {
    const total = Math.ceil(cuotaPrestamo) * cuotas.value
    return total
};



// Pintar los datos en el DOM

const pintarPrestamo = (total) => {
    montoFinal.innerText = monto.value
    cuotasFinales.innerText = cuotas.value
    intereses.innerText = total - monto.value
    totalADevolver.innerText = total
};


// Guardar la info --> storage y JSON


const presupuestos =[]

guardarInfo.addEventListener('click', () =>{

    const inpunombre = document.getElementById("firstName");
    const inputapellido = document.getElementById("lastName");
    const inputemail = document.getElementById("email");
    const inputmontoFinal = document.getElementById("finalAmount");
    const inputcuotasFinales = document.getElementById("finalFees");
    const inputIntereses = document.getElementById("interests");
    const inputtotalADevolver = document.getElementById("totalAmount");

    const nombre = inpunombre.value
    const apellido = inputapellido.value
    const email = inputemail.value
    const montoFinal= inputmontoFinal.value
    const intereses= inputIntereses.value 
    const totalADevolver= inputtotalADevolver.value
    const cuotasFinales = inputcuotasFinales.value

const arrayPresupuesto ={
    id: presupuestos +1,
    nombre: nombre,
    apellido: apellido,
    email:email,
    presupuestosFinal: montoFinal,
    cuotasFinales :cuotasFinales,
    intereses:intereses,
    totalADevolver:totalADevolver
}

presupuestos.push(arrayPresupuesto)


const presupuestosJSON= JSON.stringify(presupuestos)
localStorage.setItem('presupuestos', presupuestosJSON)
})
console.log (presupuestos)