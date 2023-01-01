# Input: array of integers
# Output: sorted array of integers
# Time Complexity: O(N^2)

def bubble_sort(arr):
  unsorted_until_index = len(arr) - 1 
  sorted = False 

  while not sorted: 
    sorted = True 
    for i in range(unsorted_until_index):
      if arr[i] > arr[i+1]:
        arr[i], arr[i+1] = arr[i+1], arr[i]
        sorted = False
    unsorted_until_index -= 1

  return arr 

nums = [13, 2, 8, 7, 10, 1, 17, 15, 18, 20, 4, 3]
print(bubble_sort(nums))