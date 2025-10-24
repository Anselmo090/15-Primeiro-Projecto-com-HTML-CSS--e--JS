const button = document.getElementById("btn-conversor")
const select = document.getElementById('trocaMoedas')

const dolar = 5.2
const euro = 5.9

const converterValor = () => {
    const inputReais = document.getElementById("campo").value
    const campo1 = document.getElementById("testeDeValor1")
    const campo2 = document.getElementById("testeDeValor2")

    campo1.innerText = new Intl.NumberFormat('pt-Br',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReais)

    if (select.value === "US$ Dólar americano") {
        campo2.innerText = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputReais / dolar)
    }

    if (select.value === '€ Euro') {
        campo2.innerText = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputReais / euro)
    }
}

const trocaMoedas = () => {
    const nomeDaMoeda = document.getElementById('nomeMoeda')
    const moedaImg = document.getElementById("imagem")

    if (select.value === 'US$ Dólar americano') {
        nomeDaMoeda.innerText = "Dólar americano"
        moedaImg.src = "./Imagens/EUA.svg"
    }
    if (select.value === '€ Euro') {
        nomeDaMoeda.innerText = "Euro"
        moedaImg.src = "./Imagens/euro.svg"
    }
    converterValor()
}
button.addEventListener('click', converterValor)
select.addEventListener('change', trocaMoedas)