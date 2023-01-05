// Input: array of integers
// Output: sorted array of integers
// Time Complexity: O(N^2)

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let tempValue = arr[i];
    let position = i - 1;

    while (position >= 0) {
      if (arr[position] > tempValue) {
        arr[position + 1] = arr[position];
        position -= 1;
      } else {
        break;
      }
    }

    arr[position + 1] = tempValue;
  }

  return arr;
};

const nums = [13, 2, 8, 7, 10, 1, 17, 15, 18, 20, 4, 3];
console.log(insertionSort(nums));
