// By recursion method
function findWays(arr, target_sum, curr_sum, i) {
  // console.log(curr_sum);

  if (i == arr.length) {
    if (curr_sum == target_sum) {
      return 1;
    } else {
      return 0;
    }
  }
  let cnt = 0;

  // addition of current value
  cnt += findWays(arr, target_sum, curr_sum + arr[i], i + 1); 

  // substraction of current value
  cnt += findWays(arr, target_sum, curr_sum - arr[i], i + 1);

  //did not take any value
  cnt += findWays(arr, target_sum, curr_sum, i + 1);

  return cnt;
}

const arr = [-1, 9, 8, -3, 4];

console.log(findWays(arr, 5, 0, 0));
