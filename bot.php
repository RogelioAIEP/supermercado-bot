<?php
$token = "TU_TOKEN_AQUÍ";
$website = "https://api.telegram.org/bot".$token;

$input = file_get_contents('php://input');
$update = json_decode($input, TRUE);

$chatId = $update["message"]["chat"]["id"];
$message = strtolower($update["message"]["text"]);

$reply = "";

switch($message) {
    case "carne":
    case "queso":
    case "jamón":
        $reply = "El producto está en el pasillo 1.";
        break;
    case "leche":
    case "yogurth":
    case "cereal":
        $reply = "El producto está en el pasillo 2.";
        break;
    case "bebidas":
    case "jugos":
        $reply = "El producto está en el pasillo 3.";
        break;
    case "pan":
    case "pasteles":
    case "tortas":
        $reply = "El producto está en el pasillo 4.";
        break;
    case "detergente":
    case "lavaloza":
        $reply = "El producto está en el pasillo 5.";
        break;
    default:
        $reply = "Lo siento, no entiendo tu pregunta.";
        break;
}

file_get_contents($website."/sendMessage?chat_id=".$chatId."&text=".urlencode($reply));
?>
