let caminhoCurriculo = "./VITOR_MOUTIM_PT-BR.pdf"

let botaoBaixarCurriculo = document.querySelector("#botao-curriculo")
console.log(botaoBaixarCurriculo)
let botaoZap = document.querySelector("#botao-zap")

botaoBaixarCurriculo.addEventListener("click", function(){
  console.log("Clicou! Não grita.")
  
  let tagA = document.createElement("a")
  console.log(tagA)

  tagA.href = caminhoCurriculo
  tagA.download = "Curriculo.pdf"
  tagA.click()
})
