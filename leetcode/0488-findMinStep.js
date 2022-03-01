var findMinStep = function (board, hand) {
    const visited = new Set();
    let r = Number.MAX_SAFE_INTEGER
    const d = (board, hand, count) => {
        if (board.length === 0) return r = Math.min(r, count)
        if (hand.length === 0 || visited.has(board + count)) return
        visited.add(board + count)
        for (let i = 0; i < board.length; i++)
            for (let j = 0; j < hand.length; j++)
                d(combine(board.substring(0, i) + hand[j] + board.substring(i)), hand.substring(0, j) + hand.substring(j + 1), count + 1)
    }
    d(board, hand, 0)
    return r === Number.MAX_SAFE_INTEGER ? - 1 : r
};

const combine = board => {
    for (let slow = fast = 0; fast <= board.length; fast++) {
        if (board[slow] === board[fast]) continue
        if (fast - slow > 2) {
            board = board.substring(0, slow) + board.substring(fast)
            fast = 0
        }
        slow = fast
    }
    return board
}

//   作者：mantoufan
//   链接：https://leetcode-cn.com/problems/zuma-game/solution/ji-yi-hua-di-gui-jian-dan-si-lu-by-manto-bwu7/
//   来源：力扣（LeetCode）
//   著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

console.log(findMinStep('WRRBBW', 'RB')); // -1
// console.log(findMinStep('WWRRBBWW', 'WRBRW')); // 2
// console.log(findMinStep('G', 'GGGGG')); // 2
// console.log(findMinStep('RBYYBBRRB', 'YRBGB')); // 3