# Input: sorted array of integers & integer target  
# Output: if target exists return index, otherwise return null
# Time Complexity: O(N)

def linear_search(arr, target):
  for index, item in enumerate(arr): 
    if item == target:
      return index
    elif item > target: 
      break 
  return None  

nums = [1, 2, 3, 4, 7, 8, 10, 13, 15, 17, 18, 20]
print(linear_search(nums, 8))
print(linear_search(nums, 11))