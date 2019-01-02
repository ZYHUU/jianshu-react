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
    getListArea (){
        if (this.props.focused) {
            console.log(this)
            return (
                <SearchInfo>
                    <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch>换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearInfoList>
                        { 
                            this.props.list.map((item) => {
                                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                            })
                           
                        }
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
        list: state.header.list
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.searchFocus());
            dispatch(actionCreators.getList());
            console.log(this)
        },
        handelInputBlur() {
            dispatch(actionCreators.searchBlur())
        }
    }
}

export default connect(mapStateProps, mapDispathToProps)(Header)