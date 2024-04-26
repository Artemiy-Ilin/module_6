let word = prompt ('Введите строку');
let wordLen = word.length - 1;

for (let i=0; i < wordLen / 2; i=i+1) {
    if (word [i] == word [wordLen-i]) {
        alert ('Введенная строка - палиндром!');
    } else {
        alert ('Введенная строка - не палиндром!');
        break;
    }
}




