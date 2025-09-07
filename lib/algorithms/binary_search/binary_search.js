function binarySearch(array, val) {
  const length = array.length;

  if (length <= 0) return;
  if (length == 1 && array[0] === val) return array[0];
  if (length == 1 && array[0] !== val) return;

  let low = 0;
  let high = length;
  let mid;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);

    if (array[mid] === val) return mid;

    if (array[mid] < val) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
