const arr = [
   "x", "o", "x",
   "o", "x", "o",
   "x", "o", "x",
];
const quarterArray = [];

let index = 0;
for (let i = 0; i < 3; i += 1) {
   quarterArray[i] = [];
   for (let j = 0; j < 3; j += 1) {
      quarterArray[i][j] = arr[index];
      index += 1;
   }
}
console.log(quarterArray);

let str = "";
for (let i = 0; i < quarterArray.length; i += 1) {
   for (let j = 0; j < quarterArray[i].length; j += 1) {
      str += `${quarterArray[i][j]} `;
   }
   str += "\n";
}
console.log(str);