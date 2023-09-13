
const arrayDoadores = []

    const cadastrarDoador = () => {
        const nome = prompt("Informe seu nome completo!")
        const idade = (prompt("Informe sua idade!"))
        const peso = (prompt("Informe seu peso!"))
        const tipoSang = prompt("Informe seu tipo sanguíneo!").toLocaleUpperCase()
        const ultimaDoacao = prompt("Informe data da última doação DD/MM/AAAA!")
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
    const listarDoadores = () =>{
        let lista = `
        -----------------
        LISTA DE DOADORES:
        -----------------
NOME        | IDADE  | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
----------------------------------------------------------------------
`
        for (let i=0 ; i < arrayDoadores.length; i++){
            const {nome, idade, peso, tipoSang, ultimaDoacao} = arrayDoadores[i]
lista += 
`${nome.padEnd(13)}|${idade.padEnd(10)}|${peso.padEnd(10)}|${tipoSang.padEnd(10)}|${ultimaDoacao.padEnd(10)}`
    
    }
    lista += 
`--------------------------------------------------------------------`
    prompt(lista)
    menu()
}
 


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





    
 //=====================//===================//==================//=============   
/*3.
const buscarPorTipoSangue = () => {
        const tipoSanguineo = []
    const tipo = prompt("Informe o tipo sanguíneo!")
    alert(doador.tipoSang)
    


}
//=================//====================//==================//===================
//4.

const buscarPorData = () => {
const data = prompt("Informe a data da última doação dd/mm/aaaa")
alert(doador.ultimaDoacao)
}


        
        

*/