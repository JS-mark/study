// 二叉树深度优先遍历
// 前序遍历： 144.二叉树的前序遍历
// 后序遍历： 145.二叉树的后序遍历
// 中序遍历： 94.二叉树的中序遍历
// 二叉树广度优先遍历
// 层序遍历：102.二叉树的层序遍历

// 前序遍历
var preorderTraversal = function(root, res = []) {
    if (!root) return res;
    res.push(root.val);
    preorderTraversal(root.left, res)
    preorderTraversal(root.right, res)
    return res;
};

// 中序遍历
var preorderTraversal = function (root, res = []) {
  if (!root) return res;
  preorderTraversal(root.left, res);
  res.push(root.val);
  preorderTraversal(root.right, res);
  return res;
};

// 后序遍历
var preorderTraversal = function (root, res = []) {
  if (!root) return res;
  preorderTraversal(root.left, res);
  preorderTraversal(root.right, res);
  res.push(root.val);
  return res;
};