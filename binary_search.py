# Input  : sorted array of integers & integer target
# Output : return index if target exists, otherwise return -1

def search(nums, target):
  low = 0
  high = len(nums) - 1 

  while low <= high: 
    mid = int((low + high) / 2)
    result = nums[mid]

    if result == target:
      return mid 
    elif result > target:
      high = mid - 1 
    else:
      low = mid + 1
    
  return -1

nums = [1, 2, 3, 4, 7, 8, 10, 13, 15, 17, 18, 20]
print(search(nums, 8))
print(search(nums, 5))