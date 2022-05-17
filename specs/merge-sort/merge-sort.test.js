/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const merge  = (lArray, rArray) => {
    let results = [];

    while(lArray.length && rArray.length) {
        if (lArray[0] <= rArray[0]) {
            results.push(lArray.shift())
        } else {
            results.push(rArray.shift())
        }
    }
    return results.concat(lArray, rArray)
}

const mergeSort = (nums) => {
    if (nums.length === 1) {
        return nums;
    }
    const index = Math.floor(nums.length / 2)
    const lArray = nums.slice(0, index)
    const rArray = nums.slice(index)

    return merge(mergeSort(lArray), mergeSort(rArray))
};

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
