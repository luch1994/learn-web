/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
    let low = 0, high = numbers.length - 1;
    while(low < high) {
        const mid = Math.floor((low + high) / 2);
        if (numbers[mid] < numbers[high]) {
            high = mid;
        } else if (numbers[mid] > numbers[high]) {
            low = mid + 1;
        } else {
            high--;
        }
    }
    return numbers[low];
};

















// var minArray = function(numbers) {
//     let low = 0;
//     let high = numbers.length - 1;
//     while (low < high) {
//         const pivot = Math.floor((low + high) / 2);
//         if (numbers[pivot] <= numbers[high]) {
//             high = pivot;
//         } else if (numbers[pivot] > numbers[high]) {
//             low = pivot + 1;
//         }
//     }
//     return numbers[low];
// };




// console.log(minArray([2, 3, 4, 5, 1]))
// console.log(minArray([3, 4, 5, 1, 2]))
// console.log(minArray([4, 5, 1, 2, 3]))
// console.log(minArray([5, 1, 2, 3, 4]))
// console.log(minArray([1, 2, 3, 4, 5]))
// console.log(minArray([2, 2, 2, 0, 1]))
// console.log(minArray([2, 2, 0, 1, 2]))
// console.log(minArray([10, 1, 10, 10, 10]))
console.log(minArray([3, 3, 1, 3]))
