a = prompt("Введите пожалуйста ваше число")

if( Number.isInteger(+a) ){
    if( +a % 2 === 0 ){
        result = "Число четное"
    } else {
        result = "Число нечетное"
    }
} else {
    result = "Упс, вы ошиблись"
}

console.log(result)


