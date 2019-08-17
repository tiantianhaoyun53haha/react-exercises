import React from 'react';
/* 
0 在react中建议尽量使用单标签
1 class属性变成className
2 label标签的for=》htmlFor
3 富文本渲染v-html功能
*/


function App() {
  // 2.富文本标签的显示
  let htmlStr='<h1>点击进入下一个关卡</h1>';
      // 2.1 把富文本的内容用专门的对象属性定义
      let dangerObj={__html:htmlStr}
  return (
    <div className="root">
      {/* 1.label标签中的for属性变成htmlfor的格式 */}
      {/* <label htmlFor="iinnppuu">姓名</label>
      <input id="iinnppuu" type="text"></input> */}

      {/* 2.将数据进行渲染 */}
      {/* <div  dangerouslySetInnerHTML={dangerObj} /> */}
      {/* 3.写行内样式的方式 */}
      <div style={{color:"blue",fontSize:"100px"}}>今天老师让班长请吃饭</div>
    </div>

  );
}

export default App;
