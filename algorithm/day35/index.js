/**
 * https://leetcode-cn.com/problems/change-minimum-characters-to-satisfy-one-of-three-conditions/
 * 1737. 满足三条件之一需改变的最少字符数
 */

var minCharacters = function (a, b) {
    let da = new Array(26).fill(0);
    let db = new Array(26).fill(0);
    for (let i in a) {
        da[a.charCodeAt(i) - 97]++;
    }
    for (let i in b) {
        db[b.charCodeAt(i) - 97]++;
    }
    let an = a.length, bn = b.length, asum = 0, bsum = 0, res = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < 25; i++) {
        // 前缀和计算
        asum += da[i];
        bsum += db[i];
        // 找最小值
        res = Math.min(res, an + bn - da[i] - db[i], an - asum + bsum, bn - bsum + asum);
    }
    // z的特殊处理
    return Math.min(res, an + bn - da[25] - db[25]);
};

/**
 * Array.prototype.reduce()
 */

Array.prototype.reduce = function (func, initValue) {
    let prevValue = initValue || this[0]
    let currValue = initValue || this[1]
    let currIndex = 0
    let i = initValue ? 0 : 1
    for (i; i < this.length; i++) {
        prevValue = func(prevValue, currValue, currIndex, this)
    }
    return prevValue
}