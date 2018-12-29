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
    constructor(props) {
        super(props);
        this.state = {
            focused: false
        }
        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handelInputBlur = this.handelInputBlur.bind(this);
    }
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
                        <i className = {this.state.focused ? 'focused iconfont' : 'iconfont'}>&#xe614;</i>
                        <NavSearch 
                            className = {this.state.focused ? 'focused' : ''}
                            onFocus = {this.handleInputFocus}
                            onBlur = {this.handelInputBlur}
                        >
                        </NavSearch>
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
    handleInputFocus() {
        this.setState({
            focused: true
        })
    }
    handelInputBlur() {
        this.setState({
            focused: false
        })
    }
}

export default Header