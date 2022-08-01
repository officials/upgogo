/**
 * https://binarysearch.com/problems/Triple-Inversion
 * 
 */


/**
 * https://bigfrontend.dev/zh/problem/previous-left-sibling
 */

 function previousLeftSibling(root, target) {
  const q = [root];

  while (q.length) {
    const n = q.length;
    let prev = null;

    for (let i=0; i<n; i++) {
      const curr = q.shift();

      if (curr === target) {
        return prev;
      }

      q.push(...curr.children);

      prev = curr;
    }
  }

  return null;
}
