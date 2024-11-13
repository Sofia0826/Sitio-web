function convertToFahrenheit() {
    const celsius = document.getElementById("celsius").value;
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("result").innerText = `La temperatura en Fahrenheit es: ${fahrenheit.toFixed(2)}°F`;
}
