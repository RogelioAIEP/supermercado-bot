const token = 'TU_TOKEN_AQUI'; // El token que te dio BotFather
const url = `https://api.telegram.org/bot${token}/sendMessage`;

async function sendMessage(chatId, text) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: text
        })
    });

    const data = await response.json();
    console.log(data);
}

// Simulación de mensaje recibido y respuesta
function handleMessage(message) {
    let reply = '';

    switch (message.toLowerCase()) {
        case 'carne':
        case 'queso':
        case 'jamón':
            reply = 'El producto está en el pasillo 1.';
            break;
        case 'leche':
        case 'yogurth':
        case 'cereal':
            reply = 'El producto está en el pasillo 2.';
            break;
        case 'bebidas':
        case 'jugos':
            reply = 'El producto está en el pasillo 3.';
            break;
        case 'pan':
        case 'pasteles':
        case 'tortas':
            reply = 'El producto está en el pasillo 4.';
            break;
        case 'detergente':
        case 'lavaloza':
            reply = 'El producto está en el pasillo 5.';
            break;
        default:
            reply = 'Lo siento, no entiendo tu pregunta.';
    }

    // Simular el envío del mensaje (esto es una simulación, no interactúa directamente con Telegram)
    sendMessage(123456789, reply);  // Cambia 123456789 por tu ID de chat
}

// Simular que recibes un mensaje
handleMessage('carne');
