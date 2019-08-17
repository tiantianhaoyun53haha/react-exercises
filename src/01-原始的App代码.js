import React from 'react';



function App() {
  // 理解：这里的定义是指将某种数据类型赋值给某个变量，布尔值不能定义
  // 1.定义字符串
  let data="2019.8.16";
  // 2.定义数字
  let money="10000";
  // 3.bool类型  不能直接渲染  underfined
  let isRichWomen=true;
  // 4. 对象  不能渲染 直接报错
        // 能渲染对象的属性
  let isRichWomen1={
    name:"翠花",
    money:"10000"
  }

  // 5.函数
  function showMsg(msg){
    return "hello"+'--'+msg
  }

  // 注意：这里不能写其他的标签
  return (
    <div className="App">
  {/* 1.使用变量 */}
   {data}
   {/* 2.数字 */}
   <hr/>
   {money}
   <hr/>
   {/* 3.布尔类型 不能渲染 */}
   {true}
   <hr/>

   {/* 4. 对象 */}
   {/* {isRichWomen1} */}

    {/* 4.1 渲染对象的属性 */}
    {isRichWomen1.name}

    {/* 5.3元表达式 */}
    {true?"海鲜":"海带"}
    {/* 6 函数 */}
    <hr/>
    {showMsg("马云")}





    </div>
  );
}

export default App;
