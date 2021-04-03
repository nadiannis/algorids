// Input  : sorted array of integers & integer target
// Output : return index if target exists, otherwise return -1

const search = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const result = nums[mid];

    if (result === target) return mid;

    if (result > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
};

nums = [1, 2, 3, 4, 7, 8, 10, 13, 15, 17, 18, 20];
console.log(search(nums, 8));
console.log(search(nums, 5));