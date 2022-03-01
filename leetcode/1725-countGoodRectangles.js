/**
 * @param {number[][]} rectangles
 * @return {number}
 */
 var countGoodRectangles = function(rectangles) {
    const countMap = {};
    let max = -1;
    for(const rect of rectangles) {
        const k = Math.min(rect[0], rect[1]);
        if (countMap[k]) {
            countMap[k]++;
        } else {
            countMap[k] = 1;
        }
        max = Math.max(max, k);
    }
    return countMap[max];
};