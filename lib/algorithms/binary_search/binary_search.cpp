#include <iostream>
#include <vector>

int binarySearch(const std::vector<int> &arr, int val) {
  int length = arr.size();

  if (length == 0)
    return -1;
  if (length == 1 && arr[0] == val)
    return 0;
  if (length == 1 && arr[0] != val)
    return -1;

  int low = 0;
  int high = length;
  int mid;

  while (low <= high) {
    mid = (low + high) / 2;

    if (arr[mid] == val)
      return mid;

    if (arr[mid] < val) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

int main() {
  std::cout << binarySearch(std::vector<int>{1, 2, 3, 4, 5, 6, 7, 8}, 1)
            << std::endl;

  return 0;
}
