let numbers = [12, 18, 11, 5, 8, 2];

function displayMiddleNumber(numbersArray) {
    let middle = numbersArray.length / 2;
    if (numbersArray.length % 2 === 0) {
        return [numbersArray[middle - 1], numbersArray[middle]];
    } else {
        return numbersArray[Math.floor(middle)];
    }
}

console.log(displayMiddleNumber(numbers));