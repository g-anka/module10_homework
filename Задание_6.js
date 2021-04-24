// Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.


let arr = [5, 5, 5, 5];
let result = true;  

for (let i = 0; i < arr.length; i++) {
    if (arr[0] !== arr [i]) {
        result = false;
      break; 
    } 
}

if (result) {
  console.log(true);
} else {
  console.log(false);
}
