/*Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y». 
Используйте шаблонные строки.*/




let berries = new Map();
berries.set("cranberry", "red");
berries.set("blueberry", "blue");
berries.set("gooseberry", "green");
berries.set("raspberry", "pink");

for (let [key, value] of berries){
  console.log(`Ключ - ${key}, значение - ${value}`);
}
