class criarHeroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar() {
        let ataque 
        if (this.tipo == "Mago") {
            ataque = "magia";
            console.log(`O ${this.tipo} atacou usando ${ataque}`);
        }
        if (this.tipo == "Guerreiro") {
            ataque = "espada";
            console.log(`O ${this.tipo} atacou usando ${ataque}`);
        }
        if (this.tipo == "Monge") {
            ataque = "artes marciais";
            console.log(`O ${this.tipo} atacou usando ${ataque}`);
        }
        if (this.tipo == "Ninja") {
            ataque = "shuriken";
            console.log(`O ${this.tipo} atacou usando ${ataque}`);
        }
        
    }       
}

let heroi = new criarHeroi("David", "26", "Ninja");

heroi.atacar();
