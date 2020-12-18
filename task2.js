a = prompt("Введите что-нибудь")

if(Number.isInteger(+a)){
    console.log("Это число")
} else if ( a == 'true' || a == 'false'){
    console.log("Это логический тип")
} else {
    console.log("Это строка")
}
