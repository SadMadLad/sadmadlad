def selection_sort(arr)
  len = arr.length 
  return arr if len <= 1
  
  0.upto(len-1) do |i|
    minIndex = i
    i.upto(len-1) do |j|
      minIndex = j if arr[j] < arr[minIndex]
    end

    arr[i], arr[minIndex] = arr[minIndex], arr[i]
  end

  arr
end

p selection_sort([2, -2, 3, 50, 5])
