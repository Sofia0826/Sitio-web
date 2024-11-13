function calculateAge() {
    const birthYear = document.getElementById("birthYear").value;
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    if (age >= 0) {
        document.getElementById("ageResult").innerText = `Tu edad es: ${age} años.`;
    } else {
        document.getElementById("ageResult").innerText = "Por favor, ingresa un año válido.";
    }
}
