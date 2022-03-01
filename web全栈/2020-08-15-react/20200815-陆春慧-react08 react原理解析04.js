// 暗号： 几内亚
function reconcileChildren(returnFiber, newChildren) {
  let previousNewFiber = null;

  // oldfiber 的第一个子fiber
  let oldFiber = returnFiber.base && returnFiber.base.child;
  // 记录上次的插入位置
  let lastPlacedIndex = 0;
  // 做累加，遍历newChildren数组
  let newIdx = 0;
  // oldFiber的中转，记录下个oldFiber
  let nextOldFiber = null;

  let shouldTrackSideEffects = true;
  if (!oldFiber) {
    // 初次渲染
    shouldTrackSideEffects = false;
  }

  // 1. 界面更新阶段 相对位置没有发生变化 这行这个循环
  for (; oldFiber !== null && newIdx < newChildren.length; newIdx++) {
    // 判断相对位置
    // old 1  2  3_  4
    // new    1  2  3  4   _
    if (oldFiber.index > newIdx) {
      nextOldFiber = oldFiber;
      oldFiber = null;
    } else {
      nextOldFiber = oldFiber.sibling;
    }

    let newChild = newChildren[newIdx];

    if (!(newChild.key === oldFiber.key && newChild.type === oldFiber.type)) {
      if (oldFiber === null) {
        oldFiber = nextOldFiber;
      }
      break;
    }

    const newFiber = {
      key: newChild.key,
      type: newChild.type,
      props: newChild.props,
      node: oldFiber.node,
      base: oldFiber,
      return: returnFiber,
      effectTag: UPDATE
    };
    lastPlacedIndex = placeChild(
      newFiber,
      lastPlacedIndex,
      newIdx,
      shouldTrackSideEffects
    );
    if (previousNewFiber === null) {
      returnFiber.child = newFiber;
    } else {
      previousNewFiber.sibling = newFiber;
    }
    previousNewFiber = newFiber;
    // !
    oldFiber = nextOldFiber;
  }

  if (newIdx === newChildren.length) {
    // We've reached the end of the new children. We can delete the rest.
    // deleteRemainingChildren(returnFiber, oldFiber);
    // return resultingFirstChild;
    while (oldFiber) {
      deletions.push({
        ...oldFiber,
        effectTag: DELETION
      });
      oldFiber = oldFiber.sibling;
    }
  }

  //2.  新增fiber 老链表已经遍历完
  if (oldFiber === null) {
    for (; newIdx < newChildren.length; newIdx++) {
      let newChild = newChildren[newIdx];
      const newFiber = {
        key: newChild.key,
        type: newChild.type,
        props: newChild.props,
        node: null,
        base: null,
        return: returnFiber,
        effectTag: PLACEMENT
      };
      lastPlacedIndex = placeChild(
        newFiber,
        lastPlacedIndex,
        newIdx,
        shouldTrackSideEffects
      );
      if (previousNewFiber === null) {
        returnFiber.child = newFiber;
      } else {
        previousNewFiber.sibling = newFiber;
      }
      previousNewFiber = newFiber;
    }
    return;
  }

  // 3. 新老链表都有参数值
  // 1->2-》3-》4->5
  // [1,2,3,4]
  // 生成map图，方便链表查找、设置和删除
  const existingChildren = mapRemainingChildren(returnFiber, oldFiber);
  for (; newIdx < newChildren.length; newIdx++) {
    let newChild = newChildren[newIdx];

    let newFiber = {
      key: newChild.key,
      type: newChild.type,
      props: newChild.props,
      return: returnFiber
      // node: null,
      // base: null,
      // effectTag: PLACEMENT
    };

    // 判断新增还是复用
    let matchedFiber = existingChildren.get(
      newChild.key === null ? newIdx : newChild.key
    );
    if (matchedFiber) {
      // 找到啦
      newFiber = {
        ...newFiber,
        node: matchedFiber.node,
        base: matchedFiber,
        effectTag: UPDATE
      };
      // 找到就要删除链表上的元素，防止重复查找
      shouldTrackSideEffects &&
        existingChildren.delete(newFiber.key === null ? newIdx : newFiber.key);
    } else {
      newFiber = {
        ...newFiber,
        node: null,
        base: null,
        effectTag: PLACEMENT
      };
    }
    lastPlacedIndex = placeChild(
      newFiber,
      lastPlacedIndex,
      newIdx,
      shouldTrackSideEffects
    );
    if (previousNewFiber === null) {
      returnFiber.child = newFiber;
    } else {
      previousNewFiber.sibling = newFiber;
    }
    previousNewFiber = newFiber;
  }

  if (shouldTrackSideEffects) {
    existingChildren.forEach(child =>
      deletions.push({
        ...child,
        effectTag: DELETION
      })
    );
  }
}