 sum = 0;
      
//     // Iterate till the length of array
//     for(let i = 0; i < nums.length; i++)
//         sum += nums[i];
 
//     // Initialize the memorization table
//     let memo = new Array([nums.length + 1][2 * sum + 1]);
     
//      for(let i = 0; i < nums.length + 1; i++)
//     {
//         memo[i] = new Array(2 * sum + 1);
//         for(let j = 0; j < 2 * sum + 1; j++)
//         {
//             memo[i][j] = Number.MIN_VALUE;
//         }
//     }