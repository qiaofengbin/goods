import React,{Component} from 'react';
import Header from '../../components/header'
import Footer from '../../components/footer'

class List extends Component{
  render(){
   return (
    <div>
      <Header>
        <h1>列表页</h1>
      </Header>
      列表页
      <Footer />
  </div>
   )
  }
}
export default List;