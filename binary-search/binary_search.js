// Input: sorted array of integers & integer target
// Output: if target exists return index, otherwise return null
// Time Complexity: O(log N)

const binarySearch = (arr, target) => {
  let lowerBound = 0;
  let upperBound = arr.length - 1;

  while (lowerBound <= upperBound) {
    let midpoint = Math.floor((lowerBound + upperBound) / 2);
    let valueAtMidpoint = arr[midpoint];

    if (target === valueAtMidpoint) {
      return midpoint;
    } else if (target < valueAtMidpoint) {
      upperBound = midpoint - 1;
    } else if (target > valueAtMidpoint) {
      lowerBound = midpoint + 1;
    }
  }

  return null;
};

const nums = [1, 2, 3, 4, 7, 8, 10, 13, 15, 17, 18, 20];
console.log(binarySearch(nums, 8));
console.log(binarySearch(nums, 11));
