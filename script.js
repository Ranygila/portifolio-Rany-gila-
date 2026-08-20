let caminhoCurriculo = "./VITOR_MOUTIM_PT-BR.pdf"

let botaoBaixarCurriculo = document.querySelector("#botao-curriculo")
console.log(botaoBaixarCurriculo)

botaoBaixarCurriculo.addEventListener("click", function() {
    console.log("Botão clicado!")

let tagA = document.createElement("a")
CONSOLE.log(tagA)
tagA.href = caminhoCurriculo
tagA.download = "VITOR_MOUTIM_PT-BR.pdf"
tagA.click()

})
