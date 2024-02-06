function getRandomCardValue() {
    // Retorna un número aleatorio entre 1 y 11 para representar el valor de una carta
    return Math.floor(Math.random() * 11) + 1;
}

function getInitialHand() {
    // Retorna un arreglo con dos valores representando la mano inicial de un jugador o la computadora
    return [getRandomCardValue(), getRandomCardValue()];
}

function calculateHandValue(hand) {
    // Retorna la suma de los valores de las cartas en la mano
    return hand.reduce((total, card) => total + card, 0);
}

function playBlackjack() {
    // Inicializar manos de usuario y computadora
    const userHand = getInitialHand();
    const computerHand = getInitialHand();

    // Mostrar las cartas del usuario
    alert(`Tus cartas son: ${userHand.join(', ')}.`);

    // Bucle principal
    while (true) {
        // Preguntar al usuario si desea otra carta
        const userDecision = prompt(`¿Deseas otra carta? Actualmente el valor de tus cartas suma: ${calculateHandValue(userHand)}. (si/no)`);

        if (userDecision.toLowerCase() === 'si') {
            // Obtener una nueva carta y mostrar el mensaje
            const newCard = getRandomCardValue();
            userHand.push(newCard);
            alert(`Tu nueva carta vale ${newCard}, tu total es ${calculateHandValue(userHand)}.`);

            // Verificar si el usuario se pasó de 21
            if (calculateHandValue(userHand) > 21) {
                alert(`Lastima, tu total es ${calculateHandValue(userHand)}. Suerte para la próxima.`);
                alert(`La computadora tiene ${calculateHandValue(computerHand)}.`);
                alert(`El jugador tiene ${calculateHandValue(userHand)}.`);
                alert('Lastima, ha perdido.');
                return;
            }
        } else if (userDecision.toLowerCase() === 'no') {
            // Mostrar las cartas de la computadora
            alert(`La computadora tiene ${calculateHandValue(computerHand)}.`);

            // Comparar manos y determinar el resultado
            const computerValue = calculateHandValue(computerHand);
            const userValue = calculateHandValue(userHand);

            if (computerValue > userValue) {
                alert('Lastima, ha perdido.');
            } else if (computerValue < userValue) {
                alert('¡Enhorabuena, ha ganado!');
            } else {
                alert('Empate.');
            }

            return;
        } else {
            // Respuesta no válida, solicitar de nuevo
            alert('Respuesta no válida. Por favor, ingresa "si" o "no".');
        }
    }
}

// Iniciar el juego
playBlackjack();
