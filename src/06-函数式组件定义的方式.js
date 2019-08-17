import React from 'react';

// 1.创建函数式组件
// 1.1 最简单的方式
// const App=()=><div>组件</div>

// 1.2 第二种方式，方便拓展加代码的
const App = () => {
   /*  2.没有自己的内部数据 
            2.1 不是普通的局部变量
            1 当数据发生改变的时候，页面跟着改变
   */
    let msg = "2019年8月7日  11:58:26"
    // 2.修改msg试试
    setTimeout(()=>{
        msg='佛祖';
    })
    return (
        <div>{msg} </div>
    )
}


export default App;
