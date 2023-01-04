// Input: array of integers
// Output: sorted array of integers
// Time Complexity: O(N^2)

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let lowestValueIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowestValueIndex]) {
        lowestValueIndex = j;
      }
    }

    if (lowestValueIndex != i) {
      let temp = arr[lowestValueIndex];
      arr[lowestValueIndex] = arr[i];
      arr[i] = temp;
    }
  }

  return arr;
};

const nums = [13, 2, 8, 7, 10, 1, 17, 15, 18, 20, 4, 3];
console.log(selectionSort(nums));
