class rpg{
    constructor(invocador, age, tipo){
        this.invocador = invocador
        this.age = age
        this.tipo = tipo
    }
    atacar(){
        let atak
        switch (this.tipo) {
            case "mago":
                atak = "magia"
                break

            case "guerreiro":
                atak = "espada"
                break

            case "monje":
                atak = "artes marciais"
                break

            case "minja":
                atak = "shuriken"
                break
        }
        console.log(`Invocador: ${this.invocador} de idade ${this.age}`)
        console.log(`Escolheu ${this.tipo} e atacou usando ${atak}!`)
    }
 }

let dadosRpg = new rpg("Akanato","22","monje")
dadosRpg.atacar()
