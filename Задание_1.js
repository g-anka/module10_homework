// Напишите программу, которая работала бы следующим образом: в prompt вводится значение. С помощью унарного плюса (арифметический оператор) необходимо преобразовать его в число, затем проверить с помощью typeof, принадлежит ли оно к множеству Number. Если это число, то вывести в консоль чётное оно или нечётное. Если передано не число, выведите: «Упс, кажется, вы ошиблись». *NaN, хоть и относится к типу Number, числом не является. Добавьте отдельную проверку для этого значения.


let value = prompt("Введите значение");
let toNumber = +value;

if (value != null) {
  
  if (typeof(toNumber) === "number") {
    if (isNaN (toNumber))
      console.log("Вы ввели NaN");
    
    else if (value % 2 === 0)
      console.log("Вы ввели чётное число");
    
    else
      console.log("Вы ввели нечётное число");
  }
}   else
    console.log("Вы нажали отмена")