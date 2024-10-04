let num = document.getElementById('digitar-num')
let lista = document.getElementById('caixa-resul')
let item = document.getElementById('item')
let resul = document.getElementById('resul')
let valores = []


function ehnumero (n) {
  if (Number(n) >= 1 && Number(n) <=100) {
    return true
  } else {
    return false
  }
}

function tanalista (n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true
  } else {
    return false
  }
}

function adicionar() {
    
  if(ehnumero(num.value) && !tanalista(num.value, valores)) {
    valores.push(Number(num.value))
    item.innerHTML += `O valor ${num.value} foi adicionado<br>`
    
  } else {
    window.alert('Valor inválido')
  }
  num.value = ''
  num.focus()
  resul.innerHTML = ''
}

function finalizar() {
  if (valores.length <= 0) {
    window.alert('Adicione valores antes de finalizar')
  } else {
    let total = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0

    for(let pos in valores) {
      soma += valores[pos]
      if(valores[pos] > maior)
      maior = valores[pos]
      if(valores[pos] < menor)
      menor = valores[pos]
    }

    media = soma / total
    resul.innerHTML = ''
    resul.innerHTML += `Ao todo, temos ${total} números cadastrados.<br>`
    resul.innerHTML += `O maior valor informado foi ${maior}.<br>`
    resul.innerHTML += `O menor valor informado foi ${menor}.<br>`
    resul.innerHTML += `Somando todos os valores, temos o total de: ${soma}.<br>`
    resul.innerHTML += `A média dos valores digitados é ${media}.<br>`

  }
}
