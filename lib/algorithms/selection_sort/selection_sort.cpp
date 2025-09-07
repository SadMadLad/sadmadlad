#include <iostream>
#include <vector>

void selectionSort(std::vector<int> &array) {
  unsigned int len = array.size();

  if (array.size() <= 1)
    return;

  int minIndex = 0;

  for (int i = 0; i < len; i++) {
    minIndex = i;
    for (int j = i; j < len; j++) {
      if (array[j] < array[minIndex])
        minIndex = j;
    }
    if (i != minIndex)
      std::swap(array[i], array[minIndex]);
  }
}

void print(const std::vector<int> &array) {
  for (int i = 0; i < array.size(); i++)
    std::cout << array[i] << std::endl;
}

int main() {
  std::vector<int> array = {1, 10, 20, -5, 30};

  selectionSort(array);
  print(array);

  return 0;
}
