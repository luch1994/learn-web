/**
 * 冒泡排序算法的思路就是相邻的比较，能把最大（最小）的排到最前面
 * 第二轮比较前N-1个，把前N-1最大（最小）的排到前面
 * 因为是相邻两两比较，就像冒泡一样，俗称冒泡算法
 */

const arr = [22, 48, 13, 56, 13, 11, 51, 7, 69, 24, 6, 99, 48, 43, 53, 17, 53, 6, 79, 58];

function bubbleSort(arr) {
    const n = arr.length;
    for(let i = n - 1; i >= 0; i--) {
        for(let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                const tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort(arr))