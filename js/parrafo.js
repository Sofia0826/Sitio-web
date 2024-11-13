function countWords() {
    const paragraph = document.getElementById("paragraph").value;
    const words = paragraph.trim().split(/\s+/);
    const wordCount = words.filter(word => word !== "").length;
    document.getElementById("wordCountResult").innerText = `El párrafo contiene ${wordCount} palabras.`;
}
