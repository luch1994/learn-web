from collections import deque
from itertools import product
import re

class Solution:
    def findMinStep(self, board: str, hand: str) -> int:
        def clean(s):
            # 消除桌面上需要消除的球
            n = 1
            while n:
                s, n = re.subn(r"(.)\1{2,}", "", s)
            return s

        hand = "".join(sorted(hand))

        # 初始化用队列维护的状态队列：其中的三个元素分别为桌面球状态、手中球状态和回合数
        queue = deque([(board, hand, 0)])
        print(queue)

        # 初始化用哈希集合维护的已访问过的状态
        visited = {(board, hand)}
        print(visited)
        while queue:
            cur_board, cur_hand, step = queue.popleft()
            for i, j in product(range(len(cur_board) + 1), range(len(cur_hand))):
                # 第 1 个剪枝条件: 当前球的颜色和上一个球的颜色相同
                if j > 0 and cur_hand[j] == cur_hand[j - 1]:
                    continue

                # 第 2 个剪枝条件: 只在连续相同颜色的球的开头位置插入新球
                if i > 0 and cur_board[i - 1] == cur_hand[j]:
                    continue

                # 第 3 个剪枝条件: 只在以下两种情况放置新球
                #  - 第 1 种情况 : 当前球颜色与后面的球的颜色相同
                #  - 第 2 种情况 : 当前后颜色相同且与当前颜色不同时候放置球      
                choose = False
                if 0 < i < len(cur_board) and cur_board[i - 1] == cur_board[i] and cur_board[i - 1] != cur_hand[j]:
                    choose = True
                if i < len(cur_board) and cur_board[i] == cur_hand[j]:
                    choose = True

                if choose:
                    new_board = clean(cur_board[:i] + cur_hand[j] + cur_board[i:])
                    new_hand = cur_hand[:j] + cur_hand[j + 1:]
                    if not new_board:
                        return step + 1
                    if (new_board, new_hand) not in visited:
                        queue.append((new_board, new_hand, step + 1))
                        visited.add((new_board, new_hand))

        return -1

# 作者：LeetCode-Solution
# 链接：https://leetcode-cn.com/problems/zuma-game/solution/zu-ma-you-xi-by-leetcode-solution-lrp4/
# 来源：力扣（LeetCode）
# 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。



s = Solution()


print(s.findMinStep('WRRBBW', 'RB')); # -1
# print(s.findMinStep('WWRRBBWW', 'WRBRW')); # 2
# print(s.findMinStep('G', 'GGGGG')); # 2
# print(s.findMinStep('RBYYBBRRB', 'YRBGB')); # 3