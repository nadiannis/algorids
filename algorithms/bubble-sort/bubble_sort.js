// Input: array of integers
// Output: sorted array of integers
// Time Complexity: O(N^2)

const bubbleSort = (arr) => {
  let unsortedUntilIndex = arr.length - 1;
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < unsortedUntilIndex; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
        sorted = false;
      }
    }
    unsortedUntilIndex -= 1;
  }

  return arr;
};

const nums = [13, 2, 8, 7, 10, 1, 17, 15, 18, 20, 4, 3];
console.log(bubbleSort(nums));
