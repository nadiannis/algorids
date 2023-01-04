# Input: array of integers
# Output: sorted array of integers
# Time Complexity: O(N^2)

def selection_sort(arr):
  for i in range(len(arr)-1):
    lowest_value_index = i 

    for j in range(i+1, len(arr)):
      if arr[j] < arr[lowest_value_index]:
        lowest_value_index = j 
    
    if lowest_value_index != i:
      arr[i], arr[lowest_value_index] = arr[lowest_value_index], arr[i] 
  
  return arr
      
nums = [13, 2, 8, 7, 10, 1, 17, 15, 18, 20, 4, 3]
print(selection_sort(nums))