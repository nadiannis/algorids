// Input: array of integers & integer target
// Output: if target exists return index, otherwise return null
// Time Complexity: O(N)

const linearSearch = (arr, target) => {
  for (const [index, item] of arr.entries()) {
    if (item === target) {
      return index;
    }
  }
  return null;
};

const nums = [13, 2, 8, 7, 10, 1, 17, 15, 18, 20, 4, 3];
console.log(linearSearch(nums, 8));
console.log(linearSearch(nums, 11));
