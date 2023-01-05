# Input: array of integers
# Output: sorted array of integers
# Time Complexity: O(N^2)

def insertion_sort(arr):
  for i in range(1, len(arr)):
    temp_value = arr[i]
    position = i - 1
    
    while position >= 0:
      if arr[position] > temp_value:
        arr[position+1] = arr[position]
        position -= 1
      else:
        break 
    
    arr[position+1] = temp_value

  return arr

nums = [13, 2, 8, 7, 10, 1, 17, 15, 18, 20, 4, 3]
print(insertion_sort(nums))