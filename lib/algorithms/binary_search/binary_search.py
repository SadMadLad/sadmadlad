def binary_search(arr, val):
    length = len(arr)

    if length == 0:
        return None
    if length == 1 and arr[0] == val:
        return 0
    if length == 1 and arr[0] != val:
        return None

    low = 0
    high = length - 1

    while low <= high:
        mid = (low + high) // 2

        if arr[mid] == val:
            return mid

        if arr[mid] > low:
            low = mid + 1
        else:
            high = mid - 1

print(binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9))
