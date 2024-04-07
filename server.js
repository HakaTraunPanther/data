// script.js für die Darstellungswebsite
document.addEventListener('DOMContentLoaded', function() {
    ladeDaten();
});

function ladeDaten() {
    const gespeicherteDaten = JSON.parse(localStorage.getItem('meineDaten'));
    if (gespeicherteDaten) {
        document.getElementById('data-container').innerText = `Name: ${gespeicherteDaten.name}, Email: ${gespeicherteDaten.email}`;
    } else {
        document.getElementById('data-container').innerText = 'Keine Daten gefunden.';
    }
}

