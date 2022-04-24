/**
 * https://leetcode-cn.com/problems/find-bottom-left-tree-value/
 * 513. 找树左下角的值
 */

var findBottomLeftValue = function (root) {
  let currentDeep = -1, res = 0
  const dfs = (node, deep) => {
    if (!node.left && !node.right) {
      if (deep > currentDeep) {
        res = node.val
      }
      currentDeep = Math.max(currentDeep, deep)
      return
    }
    node.left && dfs(node.left, deep + 1)
    node.right && dfs(node.right, deep + 1)
  }
  dfs(root, 0)
  return res
};

/**
 *   实现一个LazyMan，可以按照以下方式调用:
    LazyMan(“Hank”)输出:
    Hi! This is Hank!

    LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
    Hi! This is Hank!
    //等待10秒..
    Wake up after 10
    Eat dinner~

    LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
    Hi This is Hank!
    Eat dinner~
    Eat supper~
    LazyMan(“Hank”).eat(“supper”).sleepFirst(5)输出
    //等待5秒
    Wake up after 5
    Hi This is Hank!
    Eat supper
 */

    function LazyMan(name, logFn) {
      const cmds = [['greet', name]]
    
      const actions = {
        greet: name => logFn(`Hi, I'm ${name}.`),
        eat: food => logFn(`Eat ${food}.`),
        sleep: ms => sleep(ms * 1000).then(() => logFn(`Wake up after ${ms} second${ms > 1 ? 's' : ''}.`)),
      }
    
      Promise.resolve().then(exec)
    
      async function exec() {
        for (const [cmd, val] of cmds) {
          await actions[cmd](val)
        }
      }
    
      return {
        sleep(ms) {
          cmds.push(['sleep', ms])
          return this
        },
        sleepFirst(ms) {
          cmds.unshift(['sleep', ms])
          return this
        },
        eat(food) {
          cmds.push(['eat', food])
          return this
        },
      }
    }