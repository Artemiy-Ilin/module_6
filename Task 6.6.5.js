const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};

let Arr = [];

for (key in obj) {
    Arr.push (obj[key]);
}

console.log (Arr);
