import React ,{ Fragment }from 'react';
// 写循环代码的思路
/* 
1.直接在js代码中写标签
2.有可以在标签中通过加{}来写js代码
3.又可以在js中直接写标签代码
4.又可以在标签中加{}写js代码

*/



function App() {
  // 定义循环数组
  let list=[ { id: 0, name: "小🐖" }, 
  { id: 1, name: "程序猿" }, { id: 2, name: "🐅" }, 
  { id: 3, name: "小聪" } ];
  return (
   <Fragment>
     {/* <div>
       {
         list.map(function(v,i){
          return <div key={v.id}>{v.name} </div>
         })
       }
     </div> */}
     {/* 最简单的数组循环结构 */}
     <ul>
       {
         list.map(v=><li key={v.id}>{v.name}</li>)
       }
     </ul>
   </Fragment>
  );
}

export default App;
