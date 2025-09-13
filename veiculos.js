class Veiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    acelerar() {
        console.log(`${this.marca} ${this.modelo} está acelerando.`);
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, portas) {
        super(marca, modelo);
        this.portas = portas;
    }

    abrirPorta() {
        console.log(`Abrindo a porta do ${this.marca} ${this.modelo}.`);
    }
}

class Moto extends Veiculo {
    constructor(marca, modelo, tipo) {
        super(marca, modelo);
        this.tipo = tipo; 
    }

    empinar() {
        console.log(`${this.marca} ${this.modelo} está empinando!`);
    }
}

const carro1 = new Carro("Toyota", "Corolla", 4);
const carro2 = new Carro("Honda", "Civic", 4);
const moto1 = new Moto("Yamaha", "R1", "esportiva");

carro1.acelerar();
carro1.abrirPorta();

carro2.acelerar();
carro2.abrirPorta();

moto1.acelerar();
moto1.empinar();
