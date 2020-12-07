let arrmain = [{
        name: "Vasya",
        incomes: [200, 300, 100, 650]
    },
    {
        name: "Petya",
        incomes: [100, 350, 500, 500]
    },
    {
        name: "Serega",
        incomes: [100, 300, 500, 600]
    }
];

ArraySearch(arrmain);

function ArraySearch(arr) {
    let max = 0;
    let sum = 0;
    let name1 ="";
    for (let i = 0; i < arr.length; i++) {
        sum = arraySum(arr[i].incomes);
        if (sum > max) {
            max = sum;
            name1 = arrmain[i].name;            
        }
    }
    alert(name1);
}

function arraySum(arr1) {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum += arr1[i];
    }
    return sum;
}