let num = prompt ('Введите число');

if (isNaN (num) == false) {
    let Arr = [];
    for (let i = 0; i <= num; i+=1) {
    Arr [i] = i;
    }

    alert (Arr);
} else {
    alert ('Необходимо ввести число!')
}

