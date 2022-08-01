/**
 * https://leetcode-cn.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length
 * 1456. 定长子串中元音的最大数目
 */

 var maxVowels = function(s, k) {
  if(!s){
      return 0
  }
  var len = s.length;
  var p1 = 0;
  var p2 = k-1;
  var originLen = 0;
  var yuanStr = 'aeiouAEIOU'
  for(var i=0;i<k;i++){
      if(yuanStr.indexOf(s[i])>=0){
          originLen+=1
      }
  }
  var maxLen = originLen
  while(p2<len-1){
      if(yuanStr.indexOf(s[p1])>=0){
          originLen-=1
      }
      p2+=1;
      p1+=1;
      if(yuanStr.indexOf(s[p2])>=0){
          originLen+=1
      }
      maxLen = Math.max(maxLen,originLen)
  }
  return maxLen;
};