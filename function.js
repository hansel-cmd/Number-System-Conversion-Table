function decimaltoOctal(e) {

    let answer = 0, countval = 1;
    let remainder = 0
    while (e > 0) {
        remainder = e % 8;
        answer = answer + (remainder * countval);
        countval = countval * 10;
        e = Math.trunc(e / 8);
    }
    // console.log(answer)
    return answer;
}

function decToBinary(e) {
    let binaryNum = [];

    for (; e > 0; e = Math.trunc(e / 2))
        binaryNum.push(e % 2);

    // console.log(binaryNum.reverse())
    return binaryNum.reverse().join('')
}

function dectoHex(n) {
    let hexaDeciNum = [];

    for (; n > 0; n = Math.trunc(n / 16)) {
        let temp = 0

        temp = n % 16

        temp < 10 ? hexaDeciNum.push(String.fromCharCode(temp + 48)) :
            hexaDeciNum.push(String.fromCharCode(temp + 55));
    }

    // console.log(hexaDeciNum.reverse());
    return hexaDeciNum.reverse().join('');
}

function main(n) {
    let retval = []
    retval.push('<table id="me-table"><tr><th>DECIMAL</th><th>BINARY</th><th>OCTAL</th><th>HEXADECIMAL</th></tr>');
    for (let i = 1; i <= n; i++) {
        retval.push('<tr>');
        retval.push(`<td>${i}</td>`);
        retval.push(`<td>${decToBinary(i)}</td>`);
        retval.push(`<td>${decimaltoOctal(i)}</td>`);
        retval.push(`<td>${dectoHex(i)}</td>`);
        retval.push('</tr>');
    }
    retval.push('</table>');
    return retval.join('');
}