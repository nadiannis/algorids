// Input: sorted array of integers & integer target
// Output: if target exists return index, otherwise return null
// Time Complexity: O(N)

const linearSearch = (arr, target) => {
  for (const [index, item] of arr.entries()) {
    if (item == target) {
      return index;
    } else if (item > target) {
      break;
    }
  }
  return null;
};

const nums = [1, 2, 3, 4, 7, 8, 10, 13, 15, 17, 18, 20];
console.log(linearSearch(nums, 8));
console.log(linearSearch(nums, 11));
