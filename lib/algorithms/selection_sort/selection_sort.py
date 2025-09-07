def selection_sort(arr):
    length = len(arr)

    if length <= 1:
        return arr

    for i in range(length):
        min_index = i
        for j in range(i, length):
            if arr[j] < arr[min_index]:
                min_index = j
        arr[i], arr[min_index] = arr[min_index], arr[i]

    return arr


print(selection_sort([10, -2, 45, 3]))
