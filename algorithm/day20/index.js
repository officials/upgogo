/**
 * https://leetcode-cn.com/problems/top-k-frequent-elements/
 * 347. 前 K 个高频元素
 */
 var topKFrequent = function (nums, k) {
  if (k === 0) return [];
  let obj = {};
  let res=[];
  for (let i = 0; i < nums.length; i++) {
      if(obj[nums[i]]===undefined){
          obj[nums[i]]=1;
      }else{
          obj[nums[i]]++;
      }
  }
  let arr=Object.entries(obj).sort((a,b)=>b[1]-a[1]);
  for(let i=0;i<k;i++){
      res.push(Number(arr[i][0]))
  }
  return res;
};


/**
 * 请使用vue或者react实现断点续传
 */
