/*Given as many arrays as possible e.g E, F, G,...., of non-negative integer scores. A "unique" score is one which is a multiple of 10, such as 50 or 60. Return the sum of largest unique score in each array. 

Hint: 
stringRemoverSolution([12, 10, 4], [2, 20, 30]) → 40
stringRemoverSolution([12, 10, 4], [2, 20, 30],[2, 20, 30]) → 70
stringRemoverSolution([12, 10, 4]) → 10
*/


  // WRITE YOUR CODE HERE
function stringRemoverSolution(nextArr){
  return arguments.length;
    let uniqueSum = 0;
    let arr = Array.prototype.slice.call(arguments,0);
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            let ar = Array.prototype.slice(arr,0);
            console.log(ar);
            if(parseInt(arr[j]) % 10 === 0){
                uniqueSum = uniqueSum +  parseInt(arr[j]);
            }
        }
    }
    console.log(uniqueSum);

}

console.log(stringRemoverSolution());
module.exports = stringRemoverSolution;