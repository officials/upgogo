/**
 * https://leetcode.cn/problems/minimum-window-substring/
 * 76. 最小覆盖子串
 */

 var minWindow = function(s, t) {
  const needs = {}, currentWindow = {};
  for (let i = 0; i < t.length; ++i) {
      needs[t[i]] = needs[t[i]] ? needs[t[i]] + 1 : 1;
  }
  let left = 0, right = 0, matches = 0, res = s, isFound = false;
  while (right < s.length) {
      const c = s[right];
      if (needs[c]) {
          currentWindow[c] = currentWindow[c] ? currentWindow[c] + 1 : 1;
          if (currentWindow[c] === needs[c]) {
              ++matches;
          } 
      }
      ++right;

      while (matches === Object.keys(needs).length) {
          isFound = true;
          res = (right - left) < res.length ? s.slice(left, right) : res;
          const leftChar = s[left];
          if (needs[leftChar]) {
              currentWindow[leftChar] = currentWindow[leftChar] - 1;
              if (currentWindow[leftChar] < needs[leftChar]) {
                  --matches;
              }
          }
          ++left;
      }
  }
  return isFound ? res : '';
};