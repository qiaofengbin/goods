import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import axios from 'axios';

// 模拟数据方法一
import { queryMusic, productList } from '../../services/music.js'
import { connect } from 'react-redux';
import Header from '../../components/header'
import Footer from '../../components/footer'
import './style.css'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            list: []
        }
    }
    componentDidMount() {
        // 调用接口
        // queryMusic().then((res)=>{
        //   this.setState({
        //     data:res.data
        //   })
        // })
        // productList().then((res) => {
        //     this.setState({
        //         data: res.data
        //     })

        // })
        axios('/api/homeList').then((res) => {
            this.setState({
                list: res.data
            })
        })
    }
    render() {
        const { list } = this.state;
        return (
            <div>
                <Header>
                    <div className="js-nav-back left"><a className="txt" href="javascript:;"><span>back</span></a></div>
                    <div>
                        <h1>首页</h1>
                    </div>
                    <div className="js-nav-r-wrap right"><span className="js-nav-csch fun csch">分类</span><span className="js-nav-info fun info none" data-info="店铺信息" data-sort="筛选">店铺信息</span></div>
                </Header>
                <div id="we-page">
                    <div className="logo">
                        <div className="left_logo">
                            <div style={{ 'width': '4rem' }}>
                                {/* 引用图片问题 */}
                                <img src={require('../../static/img/logo.jpg_.webp')} alt="" />
                            </div>
                            <div className="logo_name">
                                <span>指尖杂货铺MINI</span>
                                <img src={require('../../static/img/like.jpg_.webp')} alt="" />
                            </div>
                        </div>

                        <div>
                            <span>14</span>
                            <span>粉丝数</span>
                        </div>
                    </div>
                    <Router>
                        <div>
                            <nav className="nav_list">
                                <NavLink to='/home/shop' activeClassName="show">
                                    <span>店铺首页</span>
                                </NavLink>
                                <NavLink to='/home/goods' activeClassName="show">
                                    <span>全部宝贝</span>
                                </NavLink>
                                <NavLink to='/home/shelf' activeClassName="show">
                                    <span>新品上架</span>
                                </NavLink>
                                <NavLink to='/home/dynamic' activeClassName="show">
                                    <span>微淘动态</span>
                                </NavLink>
                            </nav>
                            <Route path='/home/shop' component={shop}>
                            <div className='list'>
                                {
                                    list.map((item, idx) => {
                                        return (
                                            <dl key={idx}>
                                                <dt><img src={item.src} alt="" /></dt>
                                                <dd>
                                                    <p>{item.tit}</p>
                                                    <span>{item.num}</span>
                                                </dd>
                                            </dl>
                                        )
                                    })
                                }
                            </div>
                            </Route>
                            <Route path='/home/goods' component={goods}></Route>
                            <Route path='/home/shelf' component={shelf}></Route>
                            <Route path='/home/dynamic' component={dynamic}></Route>
                        </div>
                    </Router>
                </div>
                <Footer />
            </div>
        )
    }
}
function mapStateToProps({ list }) {
    return {
        list
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getProductList() {
            productList().then((res) => {
                dispatch({
                    type: 'GETPRODUCT',
                    payload: res.data
                })

            })
        }
    }
}
export default connect(mapStateToProps,
    mapDispatchToProps)(Home);