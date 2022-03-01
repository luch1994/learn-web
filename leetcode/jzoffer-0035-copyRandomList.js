/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
//  var copyRandomList = function(head) {
//     let cur = head;
//     const array = [];
//     while(cur != null) {
//         const val = cur.val;
//         const randomIndex = findRandomIndex(head, cur.random);
//         array.push({
//             val,
//             randomIndex,
//         })
//         cur = cur.next;
//     }
//     const nodeList = array.map(item => new Node(item.val, null, item.randomIndex));
//     for(let i = 0, end = nodeList.length; i < end; i++) {
//         nodeList[i].next = nodeList[i + 1] ? nodeList[i + 1] : null;
//         nodeList[i].random = nodeList[i].random === -1 ? null : nodeList[nodeList[i].random]
//     }
//     return nodeList[0];
// };

// const findRandomIndex = (head, random) => {
//     let index = 0;
//     let cur = head;
//     while(cur != null) {
//         if (cur === random) {
//             return index;
//         }
//         index++;
//         cur = cur.next;
//     }
//     return -1;
// }

// var copyRandomList = function(head, cachedNode = new Map()) {
//     if (head === null) {
//         return null;
//     }
//     if (!cachedNode.has(head)) {
//         cachedNode.set(head, {val: head.val});
//         const tmp = {next: copyRandomList(head.next, cachedNode), random: copyRandomList(head.random, cachedNode)};
//         Object.assign(cachedNode.get(head), tmp);
//     }
//     return cachedNode.get(head);
// }


var copyRandomList = function(head) {
    if (head === null) {
        return null;
    }
    for (let node = head; node !== null; node = node.next.next) {
        const nodeNew = new Node(node.val, node.next, null);
        node.next = nodeNew;
    }
    for (let node = head; node !== null; node = node.next.next) {
        const nodeNew = node.next;
        nodeNew.random = (node.random !== null) ? node.random.next : null;
    }
    const headNew = head.next;
    for (let node = head; node !== null; node = node.next) {
        const nodeNew = node.next;
        node.next = node.next.next;
        nodeNew.next = (nodeNew.next !== null) ? nodeNew.next.next : null;
    }
    return headNew;
};
