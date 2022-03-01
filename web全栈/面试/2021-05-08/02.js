function multiFetch(urls, max) {
    return new Promise((resolve, reject) => {
        const resArr = new Array(urls.length);
        console.log(resArr);
        let count = 0, urlindex = 0;
        const ajax = (url, index) => {
            urlindex++;
            mfetch(url).then(res => {
                resArr[index] = res;
                count++;
                if (count >= urls.length ) {
                    resolve(resArr);
                } else if (urls[urlindex]) {
                    ajax(urls[urlindex], urlindex)
                }
            })
        }
        for(let i = 0; i < max; i++) {
            ajax(urls[i], i);
        }
    });
}

function mfetch(url) {
    return new Promise((resolve) => {
        resolve(url);
    })
}

multiFetch([
  '1',
  '2',
  '3',
  '4'
], 2).then((res) => {
  console.log(res); // [a, b, c, d]
});