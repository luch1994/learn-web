/**
 * @param {number} area
 * @return {number[]}
 */
 var constructRectangle = function(area) {
    const floor = Math.floor(Math.sqrt(area));
    for(let i = floor; i > 0; i--) {
        if (area % i === 0) {
            return [area / i, i];
        }
    }
};

constructRectangle(4)