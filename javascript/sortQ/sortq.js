
function quick_Sort(origArray) {
  if (origArray.length <= 1) {
    return origArray;
  } else {

    let left = [];
    let right = [];
    let newArray = [];
    let pivot = origArray.pop();
    let length = origArray.length;

    for (let i = 0; i < length; i++) {
      if (origArray[i] <= pivot) {
        left.push(origArray[i]);
      } else {
        right.push(origArray[i]);
      }
    }

    return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
  }
}

let myArray = [3, 0, 2, 5, -1, 4, 1 ];

console.log('Original array: ' + myArray);
let sortedArray = quick_Sort(myArray);
console.log('Sorted array: ' + sortedArray);

// const quickSort = arr => {
//   const a = [...arr];
//   if (a.length < 2) return a;
//   const pivotIndex = Math.floor(arr.length / 2);
//   const pivot = a[pivotIndex];
//   const [lo, hi] = a.reduce(
//     (acc, val, i) => {
//       if (val < pivot || (val === pivot && i !== pivotIndex)) {
//         acc[0].push(val);
//       } else if (val > pivot) {
//         acc[1].push(val);
//       }
//       return acc;
//     },
//     [[], []]
//   );
//   return [...quickSort(lo), pivot, ...quickSort(hi)];
// };

// console.log(quickSort([1, 6, 1, 5, 3, 2, 1, 4]));
module.exports=quick_Sort;
