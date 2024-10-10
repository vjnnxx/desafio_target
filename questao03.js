// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora de todos os dias de um ano, faça um programa, na linguagem que desejar, que calcule e retorne:

// - O menor valor de faturamento ocorrido em um dia do ano;
// - O maior valor de faturamento ocorrido em um dia do ano;
// - Número de dias no ano em que o valor de faturamento diário foi superior à média anual.

// a) Considerar o vetor já carregado com as informações de valor de faturamento.

// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média.

// c) Utilize o algoritmo mais veloz que puder definir.

function menorFaturamento (vetor) {
    return Math.min(...vetor)
}

function maiorFaturamento (vetor) {
    return Math.max(...vetor)
}

function diasAcimaMedia(vetor){
    const diasValidos = vetor.filter((dia) => dia > 0 && dia != null);
    const soma = diasValidos.reduce((total, dia) => total + dia);
    const media = soma / diasValidos.length;
    return media;
}