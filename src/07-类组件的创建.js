import React,{ Component }  from 'react';

//1.最简单的定义类组件的方式
// class App extends Component {
//   state = {  }
//   render() { 
//     return ( 
//       <div>类组件</div>
//      );
//   }
// }
// 2.演示类组件有自己的内部数据，当数据改变了，页面数据也发生改变
class App extends Component {
  state = {  
    msg:"佛祖"
  }
  render() { 
    // 1.以下写法不严谨  不要模仿
    setTimeout(()=>{
      this.setState({
        msg:"菩萨"
      })
    })
    return ( 
      <div>
        {
          this.state.msg
        }
        </div>
     );
  }
}
 

export default App;
