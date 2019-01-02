import React, { Component } from 'react';
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
    Button,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearInfoList
} from './style'

class Header extends Component {
    getListArea = (show) => {
        if(show) {
            return (
                <SearchInfo>
                    <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch>换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearInfoList>
                    <SearchInfoItem>web</SearchInfoItem>
                    <SearchInfoItem>java</SearchInfoItem>
                    <SearchInfoItem>php</SearchInfoItem>
                    <SearchInfoItem>python</SearchInfoItem>
                    <SearchInfoItem>react</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    </SearInfoList>  
                </SearchInfo>  
            )
        }
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
                  <NavSearch 
                    className = {this.props.focused ? 'focused' : ''}
                    onFocus = {this.props.handleInputFocus}
                    onBlur = {this.props.handelInputBlur}
                  >
                  </NavSearch>
                  <i className = {this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe614;</i>
                { this.getListArea(this.props.focused)}
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