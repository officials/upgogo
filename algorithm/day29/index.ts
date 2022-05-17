/**
 * https://leetcode-cn.com/problems/find-the-town-judge/
 * 997. 找到小镇的法官
 */

 function findJudge(n: number, trust: number[][]): number {
  const inDegress=new Array(n+1).fill(0)
  const outDegress=new Array(n+1).fill(0)
  for(let i=0; i<trust.length; i++) {
    const [x,y]=trust[i]
    ++inDegress[y]
    ++outDegress[x]
  }
  for(let i=0;i<=n;i++) {
    if(inDegress[i]===n-1 && outDegress[i]===0){
      return i
    }
  }
  return -1
};

/**
 * 实现React useState原理
 */

let index=-1;
const currentState=[]
const useState=(initialSatte)=>{
  index++;
  const currtIndex=index;
  currentState[currtIndex]=currentState[currtIndex] || initialSatte
  const setState=newState=>{
    currentState[currtIndex]=newState
  }
  return [currentState[currtIndex],setState]
}
