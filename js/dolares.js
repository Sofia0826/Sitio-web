function convertCurrency() {
    const amount = parseFloat(document.getElementById("amount").value);
    const currency = document.getElementById("currency").value;

    const exchangeRates = {
        eur: 0.85,
        mxn: 20.0  
    };

    if (amount > 0) {
        const convertedAmount = amount * exchangeRates[currency];
        const currencySymbol = currency === "eur" ? "€" : "$";
        document.getElementById("conversionResult").innerText = 
            `El monto convertido es: ${currencySymbol}${convertedAmount.toFixed(2)}`;
    } else {
        document.getElementById("conversionResult").innerText = 
            "Por favor, ingresa un monto válido.";
    }
}
