const button = document.getElementById("btn-conversor");
const select = document.getElementById('trocaMoedas');


const dolar = 917
const euro = 1066
const metical = 14.35
const yuan = 128.76

const converterValor = () => {
    const inputKwanza = document.getElementById("campo").value;
    const campo1 = document.getElementById("testeDeValor1");
    const campo2 = document.getElementById("testeDeValor2");

    campo1.innerText = new Intl.NumberFormat('pt-AO',
        { style: 'currency', currency: 'AOA' }
    ).format(inputKwanza);

    if (select.value === "US$ Dólar americano") {
        campo2.innerText = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputKwanza / dolar);

    } else if (select.value === '€ Euro') {
        campo2.innerText = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputKwanza / euro);

    } else if (select.value === 'MT Metical') {
        const valorConvertido = (inputKwanza / metical).toFixed(2);
        campo2.innerText = `MT ${valorConvertido}`
    }
     else if (select.value === '¥ Remimbi Chinês') {
        const valorConvertido = (inputKwanza / yuan).toFixed(2);
        campo2.innerText = new Intl.NumberFormat('zh-CN', {
            style: 'currency',
            currency: 'CNY'
        }).format(valorConvertido);
    }
};

const trocaMoedas = () => {
    const nomeDaMoeda = document.getElementById('nomeMoeda');
    const moedaImg = document.getElementById("imagem");


    if (select.value === 'US$ Dólar americano') {
        nomeDaMoeda.innerText = "Dólar americano";
        moedaImg.src = "./Imagens/EUA.svg";

    } else if (select.value === '€ Euro') {
        nomeDaMoeda.innerText = "Euro";
        moedaImg.src = "./Imagens/euro.svg";

    } else if (select.value === 'MT Metical') {
        nomeDaMoeda.innerText = "Metical";
        moedaImg.src = "./Imagens/mozambique.png";

        moedaImg.style.width = "50px";
        moedaImg.style.height = "50px";

    }
     else if (select.value === '¥ Remimbi Chinês') {
        nomeDaMoeda.innerText = "Remibi Chinês";
        moedaImg.src = "./Imagens/china.png"; // 🔹 Certifica-te de ter esta imagem
        moedaImg.style.width = "45px";
        moedaImg.style.height = "45px";
    }

    converterValor();
};

button.addEventListener('click', converterValor);
select.addEventListener('change', trocaMoedas);
