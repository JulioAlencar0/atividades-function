function ehPrimo(n) {
    if (n <= 1) return console.log("O número " + n + " não é primo");

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return console.log("O número " + n + " não é primo");
    }

    return console.log("O número " + n + " é primo");
}console.log(ehPrimo(2))
