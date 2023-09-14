
const arrayDoadores = []
const tiposSanguineos = ["AB+","AB-","A+","A-","B+","B-","O+","O-"]
//===================//=====================//====================//=========
const cadastrarDoador = () => {
const nome = prompt("Informe seu nome completo!")
const idade = (prompt("Informe sua idade!"))
const peso = (prompt("Informe seu peso!"))
const tipoSang = prompt("Informe seu tipo sanguíneo!").toUpperCase()
const ultimaDoacao = prompt("Informe data da última doação (DD/MM/AAAA):")
const doador = {
 nome: nome,
 idade: idade,
 peso: peso,
 tipoSang: tipoSang,
 ultimaDoacao: ultimaDoacao,
}
arrayDoadores.push(doador) 
menu()
}
//===============//===============//===================//=================
const listarDoadores = () =>{
let lista = `
-----------------------
LISTA DE DOADORES:
-----------------------
NOME               | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
----------------------------------------------------------------------
`
for (let i=0 ; i < arrayDoadores.length; i++){
 const {nome, idade, peso, tipoSang, ultimaDoacao} = arrayDoadores[i]
lista += 
`${nome.padEnd(20)}|${idade.padStart(6).padEnd(10)}|${peso.padStart(6).padEnd(9)}|${tipoSang.padStart(15).padEnd(27)}|${ultimaDoacao.padStart(15)}\n`   
}
lista += `
----------------------------------------------------------------------`
prompt(lista)
menu()
}
//=================//==============//================//=============
const buscarPorTipoSangue = () => {
const tipoSang = prompt("Digite o tipo sanguíneo desejado:").toUpperCase()
const listaDoadores = []
for(let i = 0; i < arrayDoadores.length; i++){
if (tiposSanguineos.includes(tipoSang)){
listaDoadores.push(arrayDoadores[i])
}
}
let lista = `
-----------------------
LISTA DE DOADORES:
-----------------------
NOME               | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
----------------------------------------------------------------------
`
for (let i=0 ; i < listaDoadores.length; i++){
 const {nome, idade, peso, tipoSang, ultimaDoacao} = listaDoadores[i]
lista += 
`${nome.padEnd(20)}|${idade.padStart(6).padEnd(10)}|${peso.padStart(6).padEnd(9)}|${tipoSang.padStart(15).padEnd(27)}|${ultimaDoacao.padStart(15)}\n`   
}
lista += `
----------------------------------------------------------------------`
prompt(lista)
menu()
}

//===============//===================//================//============= 
const buscarPorData = () => {
const ultimaDoacao = prompt("Digite a data desejada (dd/mm/aaaa):")
const porData = []
for(let i = 0; i < arrayDoadores.length; i++){
if (arrayDoadores[i].ultimaDoacao === ultimaDoacao){
porData.push(arrayDoadores[i])
}
}
let lista = `
-----------------------
LISTA DE DOADORES:
-----------------------
NOME               | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
----------------------------------------------------------------------
`
for (let i=0 ; i < porData.length; i++){
 const {nome, idade, peso, tipoSang, ultimaDoacao} = porData[i]
lista +=
`${nome.padEnd(20)}|${idade.padStart(6).padEnd(10)}|${peso.padStart(6).padEnd(9)}|${tipoSang.padStart(15).padEnd(27)}|${ultimaDoacao.padStart(15)}\n`   
}
lista += `
----------------------------------------------------------------------`
prompt(lista)
menu()
}

//================//==================//================//==============

const menu = () => {
const opcoes = Number(prompt(`
=====SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====
1. Cadastrar doador
2. Listar doadores
3. Buscar doador por tipo sanguíneo
4. Buscar doador por data da última doação
5. Sair
Escolha uma opção:
        `))
        switch (opcoes){
        case 1:
            cadastrarDoador()
            break
        case 2:
            listarDoadores()
            break
        case 3:
            buscarPorTipoSangue()
            break
        case 4:
            buscarPorData()
            break
        case 5:
            break
        default:
            alert("Opção inválida. Tente novamente.")
            menu()    
        }      
}
menu()  
