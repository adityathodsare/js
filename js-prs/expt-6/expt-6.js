function removeSpecific(arr, n) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== n) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(removeSpecific([1, 2, 3, 4, 5, 6, 6], 6));

// array contains specific ele

let arr = [1, 2, 3, 4, 5, 7, 7, 2, 2, 1];
if (arr.includes(6)) {
  console.log("yes 6 is present");
} else {
  console.log("NO 6 is NOT present");
}

// to empty an array

function toEmptyArr(arr) {
  arr = [];
  return arr;
}

console.log(toEmptyArr([1, 2, 3, 4, 54, 5, 43]));
