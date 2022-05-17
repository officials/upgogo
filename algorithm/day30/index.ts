/**
 * https://leetcode-cn.com/problems/possible-bipartition/
 * 886. 可能的二分法
 */

 function possibleBipartition(n: number, dislikes: number[][]): boolean {
   const x=new Set();
   const y=new Set()
  for(let i=0; i<dislikes.length; i++) {
    const [l,r]=dislikes[i]
    if(!x.has(l)) {
      x.add(l)
    }else{
      if(y.has(l)){
        return false
      }else{
        y.add(l)
      }
    }
    if(!y.has(r)) {
      y.add(r)
    }else{
      if(x.has(r)){
        return false
      }else{
        x.add(r)
      }
    }

  }
  return true
};