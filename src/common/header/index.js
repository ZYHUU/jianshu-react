import React, { Component } from 'react';
import '../../statics/iconfont/iconfont.css';
import { 
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWapper,
    NavSearch,
    Addition,
    Button
} from './style'

class Header extends Component {
    render() {
       return (
          <HeaderWrapper>
            <Logo />
            <Nav>
                <NavItem className='left active'>首页</NavItem>       
                <NavItem className='left'>下载App</NavItem>       
                <NavItem className='right'>登录</NavItem>       
                <NavItem className='right'>
                       <i className="iconfont">&#xe636;</i>

                   </NavItem> 
                   <SearchWapper>
                       <i className="iconfont">&#xe614;</i>
                       <NavSearch></NavSearch>
                   </SearchWapper>
                      
                
            </Nav>
               <Addition>            
                <Button className='writting'>    
                <i className="iconfont">&#xe624;</i>    
                写文章
                </Button>   
                <Button className='reg'>注册</Button>             
            </Addition>
          </HeaderWrapper>  
       ) 
    }
}

export default Header