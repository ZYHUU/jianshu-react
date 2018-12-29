import React from 'react';
import { connect } from 'react-redux';
import { actionCreators }from './store';
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
    console.log(state)
    return {
        focused: state.header.focused
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.searchFocus())
        },
        handelInputBlur() {
            dispatch(actionCreators.searchBlur())
        }
    }
}

export default connect(mapStateProps, mapDispathToProps)(Header)