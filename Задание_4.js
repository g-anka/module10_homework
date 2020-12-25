//Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.
  



function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min + 1;
}
console.log(getRandom(0, 100))
