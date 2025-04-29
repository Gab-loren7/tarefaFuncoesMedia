alert("Digite o nome do aluno e duas notas para fazer a média!")

let nomeAluno = prompt("Digite o nome do aluno!:")

if (nomeAluno == "" || !isNaN(nomeAluno)) {
    alert("Digite um nome válido (sem números)! 🔒❌")
} else {
    let nota1 = Number(prompt("Digite o valor da primeira(1) nota!:"))
    let nota2 = Number(prompt("Digite o valor da segunda(2) nota!:"))

    if (nota1 == "" || nota2 == "" || isNaN(nota1) || isNaN(nota2)) {
        alert("Digite um número válido! 🔒❌")
    }
    else {
        let media = (nota1 + nota2) / 2
        alert("Calculando... 🧮")

        if (media < 7) {
            alert(`A média do aluno ${nomeAluno} foi (${media}):\n\nReprovado 😓!`)
        } else if (media == 7) {
            alert(`A média do aluno ${nomeAluno} foi (${media}):\n\nPassou por pouco 😬!`)
        } else if (media > 7) {
            alert(`A média do aluno ${nomeAluno} foi (${media}):\n\nAluno aprovadooooo 😁👍!`)
        }

    }
}
