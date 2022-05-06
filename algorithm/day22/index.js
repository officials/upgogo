/**
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 */

 var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length;
  let num = 0;
  let result = [];
  let str = '';
  let index = 0;
  while (num + index < s.length) {
      if (str.indexOf(s[num + index]) < 0) {
          str += s[num + index]
          index += 1;
          if(num+index>=s.length-1){
              result.push(index)
          }
      } else {
          result.push(index)
          num++;
          str = '';
          index = 0;
      }
  }
  if(result.length===0){
      return s.length
  }
  return Math.max(...result)
};