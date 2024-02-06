// Solicitar al usuario el mes y día de nacimiento
var mes = prompt("Ingresa el número del mes en que naciste (1-12):");
var dia = prompt("Ingresa el día en que naciste:");

// Convertir el mes y el día a números enteros
mes = parseInt(mes);
dia = parseInt(dia);

// Validar la entrada del mes
if (mes < 1 || mes > 12 || isNaN(mes)) {
    alert ("Ingresa un mes válido.");
} else {
    // Validar la entrada del día en función del mes
    if (dia < 1 || dia > 31 || isNaN(dia)) {
        alert ("Ingresa un día válido.");
    } else {
        // Determinar el signo zodiacal
        var signo = determinarSignoZodiacal(mes, dia);

        // Mostrar el signo zodiacal al usuario
        alert("Tu signo zodiacal es: " + signo);
    }
}

// Función para determinar el signo zodiacal
function determinarSignoZodiacal(mes, dia) {
    switch (mes) {
        case 1:
            return dia <= 20 ? "Capricornio" : "Acuario";
        case 2:
            return dia <= 19 ? "Acuario" : "Piscis";
        case 3:
            return dia <= 20 ? "Piscis" : "Aries";
        case 4:
            return dia <= 20 ? "Aries" : "Tauro";
        case 5:
            return dia <= 21 ? "Tauro" : "Géminis";
        case 6:
            return dia <= 21 ? "Géminis" : "Cáncer";
        case 7:
            return dia <= 22 ? "Cáncer" : "Leo";
        case 8:
            return dia <= 23 ? "Leo" : "Virgo";
        case 9:
            return dia <= 23 ? "Virgo" : "Libra";
        case 10:
            return dia <= 23 ? "Libra" : "Escorpio";
        case 11:
            return dia <= 22 ? "Escorpio" : "Sagitario";
        case 12:
            return dia <= 21 ? "Sagitario" : "Capricornio";
        default:
            return "Error";
    }
}