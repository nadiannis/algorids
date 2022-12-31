# Input: sorted array of integers & integer target
# Output: if target exists return index, otherwise return null
# Time Complexity: O(log N)

def binary_search(arr, target):
  lower_bound = 0
  upper_bound = len(arr) - 1

  while lower_bound <= upper_bound:
    midpoint = int((lower_bound + upper_bound) / 2)
    value_at_midpoint = arr[midpoint]

    if target == value_at_midpoint: 
      return midpoint
    elif target < value_at_midpoint:
      upper_bound = midpoint - 1
    elif target > value_at_midpoint:
      lower_bound = midpoint + 1
  
  return None

nums = [1, 2, 3, 4, 7, 8, 10, 13, 15, 17, 18, 20]
print(binary_search(nums, 8))
print(binary_search(nums, 11))