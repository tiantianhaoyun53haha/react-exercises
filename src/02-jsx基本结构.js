import React,{Fragment} from 'react';

function App() {
  // 组件内不能同时返回两个根节点
  return (
   <Fragment>
     <h1>1</h1>
     <h1>2</h1>
   </Fragment>
  );
}

export default App;
