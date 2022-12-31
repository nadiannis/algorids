# Input: array of integers & integer target  
# Output: if target exists return index, otherwise return null
# Time Complexity: O(N)

def linear_search(arr, target):
  for index, item in enumerate(arr):
    if item == target: 
      return index 
  return None

nums = [13, 2, 8, 7, 10, 1, 17, 15, 18, 20, 4, 3]
print(linear_search(nums, 8))
print(linear_search(nums, 11))