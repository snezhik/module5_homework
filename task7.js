let arr = [0, 1, "kadebo", 3, "4", "0", null, 6]
//         0  1      2     3  4  5   6    7 

let chetnih = 0
let nechetnih = 0
let nulei = 0

for ( let i = 0; i < arr.length ; i = i + 1) {

    num = +arr[i]

    if(Number.isInteger(num))
    {
        console.log(num)
        
        if ( num == 0){

            nulei = nulei + 1
        } else if ( num % 2 == 0 ){
            
            chetnih = chetnih + 1
        } else {

            nechetnih = nechetnih + 1
        }
    }

}


console.log("Четных: ", chetnih, " Нечетных: ", nechetnih, " Нулей: ", nulei)