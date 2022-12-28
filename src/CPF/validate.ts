function hasAllDigitsEqual(cpf: string) {
    return cpf.split('').every(c => c === cpf[0]);
}

function cleanCpf(cpf: string) {
    return cpf.replace(/\D/g, '');
}

function isValidLength(cpf: string) {
    return cpf.length === 11;
}

function extractDigit(cpf: string) {
    return cpf.substring(cpf.length - 2, cpf.length);
}

function calculateDigit(cpf: string, factor: number) {
    let total = 0;
    for(const digit of cpf) {
        if(factor > 1) total += parseInt(digit) * factor--;
    }
    const rest = total % 11;
    return (rest < 2) ? 0 : 11 - rest;
}

export function validate (cpf: string) {
    if(!cpf) return false;
    cpf = cleanCpf(cpf);
    if(!isValidLength(cpf)) return false;
    if(hasAllDigitsEqual(cpf)) return false;
    const dg1 = calculateDigit(cpf, 10);
    const dg2 = calculateDigit(cpf, 11);
    const checkDigit = extractDigit(cpf);
    const calculatedDigit = `${dg1}${dg2}`;
    return checkDigit == calculatedDigit;
}