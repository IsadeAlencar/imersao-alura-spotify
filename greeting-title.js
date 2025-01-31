document.addEventListener("DOMContentLoaded", function() {
    const greetingElement = document.getElementById('greeting-title');
    const currentHour = new Date().getHours();
    let greetingMessage;

    if (currentHour < 12) {
        greetingMessage = "Bom dia, luz do dia!";
    } else if (currentHour < 18) {
        greetingMessage = "Boa tarde alurer!";
    } else if (currentHour < 22) {
        greetingMessage = "Boa noite, alurer!";
    } else {
        greetingMessage = "Boas vindas, coruja noturna!";
    }

    greetingElement.textContent = greetingMessage;
});