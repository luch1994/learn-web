/**
 * 选择排序算法的思路就是遍历数组，找到最小的元素放到最前面
 * 接着选择剩余数字中最小的放到第一个的后面，依次选择
 */

 const arr = [22, 48, 13, 56, 13, 11, 51, 7, 69, 24, 6, 99, 48, 43, 53, 17, 53, 6, 79, 58];

 function selectionSort(arr) {
     const n = arr.length;
     for(let i = 0; i < n; i++) {
         let min = arr[i], minIndex = i;
         for(let j = i + 1; j < n; j++) {
            if (min > arr[j]) {
                min = arr[j];
                minIndex = j;
            }
            
         }
         arr.splice(minIndex, 1);
         arr.splice(i, 0, min);
     }
     return arr;
 }
 
 console.log(selectionSort(arr))