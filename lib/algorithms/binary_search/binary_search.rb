def binary_search(array, val)
  return if array.empty? || array.nil?
  return if array.one? && array.first != val
  return array.first if array.one?

  low = 0
  high = array.length - 1

  while low <= high
    mid = (low + high) / 2

    if array[mid] == val
      return mid
    elsif array[mid] > val
      high = mid - 1
    else
      low = mid + 1
    end
  end

  nil
end
