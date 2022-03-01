//line=readline()
//print(line)
function find(data, n, sum) {
    if (n == 1) {
        const index = data.indexOf(sum);
        if (index >= 0) {
            return [data[index]];
        }
        return null;
    }
    
    for(let i = 0; i < data.length; i++) {
        let findArr;
        if (i == 0) {
            findArr = data.slice(1);
        } else {
            findArr = [...data.slice(0, i - 1), ...data.slice(i + 1)];
        }
        const arr = find(findArr, n - 1, sum - data[i]);
        if (arr) {
            return [data[i]].concat(arr);
        }
    }
}

console.log(find([0,2,3,4,5,6], 3, 6));