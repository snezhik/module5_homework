console.log("------------------------------------------------")

let massiv = ["markusha", "kadebo", "kadebo"]

let perviy_element = massiv[0]
let resultat = true

massiv.forEach(function(item, index, array) {

    console.log("Начинаю новый шаг цикла")
    console.log("Берем элемент массива с индексом ", index, " и значением ", item)
    console.log("Сравниваем значение первого элемента(", perviy_element, ") со значением", index,"-го элемента:", item)
    if(perviy_element == item){
        console.log("Эти собаки равны")
    } else{
        console.log("Аккуратней, собака не", perviy_element)
        resultat = false
    }

    console.log("Завершаю текущий шаг цикла")
    console.log("-----")
});

console.log("РЕЗУЛЬТАТ:", resultat)