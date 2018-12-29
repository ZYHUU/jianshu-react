import React from 'react';
import { connect } from 'react-redux';
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

const Header = (props) => {
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
                  <i className = {props.focused ? 'focused iconfont' : 'iconfont'}>&#xe614;</i>
                  <NavSearch 
                      className = {props.focused ? 'focused' : ''}
                      onFocus = {props.handleInputFocus}
                      onBlur = {props.handelInputBlur}
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

const mapStateProps = (state) => {
    return {
        focused: state.header.focused
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus() {
            const action = {
                type: 'search_focus'
            };
            dispatch(action)
        },
        handelInputBlur() {
            const action = {
                type: 'search_blur'
            };
            dispatch(action)
        }
    }
}

export default connect(mapStateProps, mapDispathToProps)(Header)