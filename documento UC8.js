// Permitir o cadastro da peca apenas se ela pesa mais que 100 gramas;
// Validar se o nome da peca possui 3 caracteres

var listadepecas = ["Vela de ignição", "Disco de freio", "Amortecedor", "Filtro de ar"]

if (listadepecas.length < 10){
    console.log("Caso queira, é possível cadastrar mais peças")
} else {
    console.log("A lista de peças está lotada, gênio")
}


let peso = 140

if (peso < 100){
    console.log("A peça é muito leve para ser cadastrada. Escolha uma peça com mais de 100 gramas.")
} else {
    console.log("O peso da peça é ideal.")
}

let nomepeca = "Vela de ignição"

if(nomepeca.length > 2){
    console.log("O tamanho do nome da peça está adequado.")
}else{
    console.log("O nome da peça deve ter mais de 3 caracteres.")
}