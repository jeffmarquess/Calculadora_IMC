function inicíar() {
  var campoPeso = document.getElementById('box__peso')
  var campoAltura = document.getElementById('box__altura')
  var display = document.getElementById('box-display__display')
  var botaoAvaliar = document.getElementById('avaliar')
  var styleIndicador = document.getElementById('indicador')
  // ---------------------------------------------------------função inicío

  botaoAvaliar.addEventListener('click', () => {
    let peso = Number(campoPeso.value)
    let altura = Number(campoAltura.value)
    let alturaAuQuadrado = altura * altura
    let imcNoneStyle = peso / alturaAuQuadrado
    let imc = imcNoneStyle.toFixed(2)

    // ------------------------------------------------------condições de erro inicío
    if (peso == '' && altura == '') {
      alert('Incira os dados nesessarios!')
      display.innerHTML = ''
      styleIndicador.style.backgroundColor = '#ffffff'
      styleIndicador.style.border = '1px solid black'
      styleIndicador.style.boxShadow = '0px 0px 9px black'
    } else if (altura > 2.5) {
      alert('[Erro], incira a virgula!')
    } else if (altura == '') {
      alert('[Erro], incira a sua altuta!')
    } else if (peso == '') {
      alert('[Erro], incira o seu peso!')
    }
    // ------------------------------------------------------condições de erro fim

    // ------------------------------------------------------condiçõesn true inicío
    if (imc <= 17) {
      display.innerHTML = `imc = <strong>${imc}</strong>Kg/m², Muito abaixo peso ideal.`
      styleIndicador.style.backgroundColor = 'rgb(255, 0, 0)'
      styleIndicador.style.border = '1px solid black'
      styleIndicador.style.boxShadow = '0px 0px 9px black'
    } else if (imc > 17 && imc <= 18.49) {
      display.innerHTML = `imc = <strong>${imc}</strong>Kg/m², Abaixo do peso.`
      styleIndicador.style.backgroundColor = 'rgb(255, 238, 0)'
      styleIndicador.style.border = '1px solid black'
      styleIndicador.style.boxShadow = '0px 0px 9px black'
    } else if (imc >= 18.5 && imc <= 24.99) {
      display.innerHTML = `imc = <strong>${imc}</strong>Kg/m², Peso normal.`
      styleIndicador.style.backgroundColor = 'rgb(47, 255, 64)'
      styleIndicador.style.border = '1px solid black'
      styleIndicador.style.boxShadow = '0px 0px 9px black'
    } else if (imc >= 25 && imc <= 29.99) {
      display.innerHTML = `imc = <strong>${imc}</strong>Kg/m², Acima do peso.`
      styleIndicador.style.backgroundColor = 'rgb(255, 238, 0)'
      styleIndicador.style.border = '1px solid black'
      styleIndicador.style.boxShadow = '0px 0px 9px black'
    } else if (imc >= 30 && imc <= 34.99) {
      display.innerHTML = `imc = <strong>${imc}</strong>Kg/m², Obesidade grau 1.`
      styleIndicador.style.backgroundColor = 'rgb(255, 0, 0)'
      styleIndicador.style.border = '1px solid black'
      styleIndicador.style.boxShadow = '0px 0px 9px black'
    } else if (imc >= 35 && imc <= 39.99) {
      display.innerHTML = `imc = <strong>${imc}</strong>Kg/m², Obesidade grau 2.`
      styleIndicador.style.backgroundColor = 'rgb(255, 0, 0)'
      styleIndicador.style.border = '1px solid black'
      styleIndicador.style.boxShadow = '0px 0px 9px black'
    } else if (imc >= 40) {
      display.innerHTML = `imc = <strong>${imc}</strong>Kg/m², Obesidade grau 3 (mórbida).`
      styleIndicador.style.backgroundColor = 'rgb(255, 0, 0)'
      styleIndicador.style.border = '1px solid black'
      styleIndicador.style.boxShadow = '0px 0px 9px black'
    }
    // ------------------------------------------------------condições true fim
  })
  // ---------------------------------------------------------função fim
}
