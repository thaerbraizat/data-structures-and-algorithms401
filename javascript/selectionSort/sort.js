function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let temp = arr[i];
    let j = i-1;
    while ((j > -1) && (temp < arr[j])) {
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = temp;
  }
  return arr;
}

let array=[8,4,23,42,16,15];
// insertionSort(array);
console.log(insertionSort(array));
