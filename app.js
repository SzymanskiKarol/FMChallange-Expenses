import data from './data.json' assert {type: 'json'};

// console.log(data[0].day);

const amountSpan = document.querySelectorAll('.amount');
const columnDiv = document.querySelectorAll('.column');

amountSpan.forEach((amount, index) => {
    amount.innerHTML = "$" + data[index].amount
})

columnDiv.forEach((column, index) => {
    let multipler = 200 / getMax(data).max;
    column.style.height = multipler * data[index].amount + "px";
})

columnDiv[getMax(data).maxIndex].style.background = "var(--Cyan)";


function getMax(data) {
    let maxArr = []
    data.forEach((column) => {
        maxArr.push(column.amount)
    })
    let max = Math.max(...maxArr);
    let maxIndex = maxArr.indexOf(Math.max(...maxArr));
    return {
        "max": max,
        "maxIndex": maxIndex,
    };
}


columnDiv.forEach((column) => {
    column.addEventListener("mouseover", () => {
        column.previousElementSibling.classList.remove("hidden");
    })
})
columnDiv.forEach((column) => {
    column.addEventListener("mouseout", () => {
        column.previousElementSibling.classList.add("hidden");
    })
})