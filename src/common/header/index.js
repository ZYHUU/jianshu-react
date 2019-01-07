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
    getListArea() {
        const { focused, list, mouseIn, page, totalPage, handelMouseEnter, handelMouseLeave } = this.props;
        console.log(mouseIn,'+++')
        const pageList = [];
        for (let i = (page - 2) * 10; i < page * 10; i++) {
            pageList.push(
                <SearchInfoItem key={i}>{list[i]}</SearchInfoItem>
            )
        }
        if (focused || mouseIn) {
            // console.log(this)
            return (
                <SearchInfo
                    onMouseEnter={handelMouseEnter}
                    onMouseLeave={handelMouseLeave}
                >
                    <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch>换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearInfoList>
                        { pageList }
                    </SearInfoList>  
                </SearchInfo>  
            )
        }
    }
    render() {
        const { focused, handleInputFocus, handelInputBlur } = this.props;
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
                    className = {focused ? 'focused' : ''}
                    onFocus = {handleInputFocus}
                    onBlur = {handelInputBlur}
                  >
                  </NavSearch>
                  <i className = {focused ? 'focused iconfont' : 'iconfont'}>&#xe614;</i>
                { this.getListArea()}
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
        focused: state.header.focused,
        list: state.header.list,
        page: state.header.page,
        totalPage: state.header.totalPage,
        mouseIn: state.header.mouseIn
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus() {
            // dispatch(actionCreators.searchFocus());
            dispatch(actionCreators.getList());
        },
        handelInputBlur() {
            dispatch(actionCreators.searchBlur())
        },
        handelMouseEnter() {
            console.log(111)
            dispatch(actionCreators.mouseEnter())
        },
        handelMouseLeave() {
            console.log(222)
            dispatch(actionCreators.mouseLeave())
        }
    }
}

export default connect(mapStateProps, mapDispathToProps)(Header)