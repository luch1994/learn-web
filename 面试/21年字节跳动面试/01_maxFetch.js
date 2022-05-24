function fetch(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, parseInt(Math.random() * 1000));
    })
}

function maxFetch(ajaxList, limit) {
    return new Promise((resolve, reject) => {
        const resList = new Array(ajaxList.length).fill(null);
        let successCount = 0, curIndex = 0, sendedCount = 0;
        const start = async () => {
            if (sendedCount < ajaxList.length) {
                let index = curIndex;
                curIndex++;
                sendedCount++;
                const res = await fetch(ajaxList[index]);
                resList[index] = res;
                successCount++;
                if (successCount === ajaxList.length) {
                    resolve(resList);
                } else {
                    start();
                }
            } else {
                if (successCount === ajaxList.length) {
                    resolve(resList);
                }
            }
        }
        while (limit) {
            start();
            limit--;
        }
    })
}

maxFetch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3).then(res => {
    console.log(res);
})