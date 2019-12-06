import * as React from 'react';
// import './index.scss';
import { Layout ,Menu, Icon, Button ,Modal} from 'antd';
import {Switch,withRouter} from 'react-router-dom';
// import AsyncLoader from '$AsyncLoader'; 
// import LoginBox from '$view/login';
// import filter  from '$filter';

const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

class ReactBox extends React.Component{
  constructor(props) {
    super(props);
    let arr = [],
        rootSubmenuKeys=['router', 'loop', 'around'],
        openKeys = [],
        async =false;
        arr[0] = props.location.pathname;

        //判断是否是直接输入，默认不调取本地存储
        rootSubmenuKeys.map((m)=>{
          if(props.location.pathname.indexOf(m) !==-1){
            async =true;
          }
          return async
        });

        if(async){
          openKeys =  sessionStorage.getItem('react-menu-arr-openkeys') ? JSON.parse(sessionStorage.getItem('react-menu-arr-openkeys')):[];
        } else{
          openKeys = [];
        }

    this.state = {
      collapsed: false,
      key :arr,
      rootSubmenuKeys,
      openKeys,
      loginAsync : false,
      closeAsync : false,
      userObj : localStorage.getItem('react-user-obj') ? JSON.parse(localStorage.getItem('react-user-obj')):"",

    };
  }

  //显示隐藏 菜单栏
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  // 点击菜单，改变url，更改页面
  navClickFn = (res)=>{
    if(res.keyPath.length>1){
      sessionStorage.setItem('react-menu-arr-openkeys',JSON.stringify(this.state.openKeys)); 
    } else{
      sessionStorage.removeItem('react-menu-arr-openkeys');
    }

    this.props.history.push(res.key);
  }

  

  //默认打开submenu  key 数组
  onOpenChange = (openKeys) =>{
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);

    if (this.state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
    
  }
 
  render() {
    let _this = this.state;
    return (
      <div className="react-wrap" >
        <Layout className="antd-wrap">
          <Header className="header-wrap g-text-ove1">
            <section className="left-box">
              {/* <img src={require('$img/back/logo.png')} alt="" onClick={()=>{
                this.props.history.push('/');
              }}/> */}
              <span onClick={()=>{
                window.location.href = 'http://10.15.198.18:8090/pages/viewpage.action?pageId=3932983'
              }} >create-react-app 脚手架学习及运用</span>
            </section>
            <section className="rig-box"> 
              {/* <h4 onClick={()=>{
                let obj = _this.userObj ? {closeAsync:true}:{loginAsync:true};

                this.setState(obj)
              }}>{_this.userObj ? `${filter.phoneHid(_this.userObj.loginPhone)},点击退出` : '点击登录！送VIP' }</h4> */}
              <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                <Icon type={_this.collapsed ? 'menu-unfold' : 'menu-fold'} />
              </Button>
            </section>
          </Header>
          <Layout>
            <Sider 
              trigger={null}
              collapsible
              collapsed={_this.collapsed}
            >
              <Menu
                defaultSelectedKeys={_this.key}
                openKeys={_this.openKeys}
                mode="inline"
                theme="dark"
                onClick = {(res)=>{
                  this.navClickFn(res)
                }}
                onOpenChange={(res)=>{
                  this.onOpenChange(res)
                }}
              >
              {/* jsx */}
                <Menu.Item key="/react/jsx">
                  <Icon type="file" />
                  <span>JSX 介绍</span>
                </Menu.Item>
                {/* 路由跳转 */}
                <SubMenu key="router" title={<span><Icon type="bars" /><span>路由跳转</span></span>} visible={true}>
                  <Menu.Item key="/react/router/normal">
                    <Icon type="file" />
                    <span>使用路由</span>
                  </Menu.Item>
                  <Menu.Item key="/react/router/nesting">
                    <Icon type="file" />
                    <span>嵌套路由</span>
                  </Menu.Item>
                </SubMenu>
                {/* 遍历循环 */}
                <SubMenu key="loop" title={<span><Icon type="bars" /><span>遍历循环</span></span>} visible={true}>
                  <Menu.Item key="/react/loop/arr">
                    <Icon type="file" />
                    <span>数组渲染</span>
                  </Menu.Item>
                  <Menu.Item key="/react/loop/condition">
                    <Icon type="file" />
                    <span>条件渲染</span>
                  </Menu.Item>
                </SubMenu>
                {/* 前后端 */}
                <SubMenu key="around" title={<span><Icon type="bars" /><span>前后端</span></span>} visible={true}>
                  {/* 前后分离 */}
                  <Menu.Item key="/react/around/separate">
                    <Icon type="file" />
                    <span>前后分离</span>
                  </Menu.Item>
                  {/* 请求接口 */}
                  <SubMenu key="ajax" title={<span><Icon type="bars" /><span>请求接口</span></span>} visible={true}>
                    <Menu.Item key="/react/around/ajax">
                      <Icon type="file" />
                      <span>jquery调用接口</span>
                    </Menu.Item>
                    <Menu.Item key="/react/around/vue">
                      <Icon type="file" />
                      <span>vue调用接口</span>
                    </Menu.Item>
                    <Menu.Item key="/react/around/react">
                      <Icon type="file" />
                      <span>react调用接口</span>
                    </Menu.Item>
                  </SubMenu>
                  {/* axios,fetch */}
                  <Menu.Item key="/react/around/axios">
                    <Icon type="file" />
                    <span>axios,fetch</span>
                  </Menu.Item>
                </SubMenu>
                {/* mvvm */}
                <Menu.Item key="/react/mvvm">
                  <Icon type="file" />
                  <span>数据绑定</span>
                </Menu.Item>
                {/* dom */}
                <Menu.Item key="/react/dom">
                  <Icon type="file" />
                  <span>dom成本</span>
                </Menu.Item>
              </Menu>
            </Sider>
            <Content className="react-content-wrap">
              <Switch>
                {/* 首页 */}
                {/* <Route
                  exact
                  path="/react"
                  component={
                    AsyncLoader (() => import('$view/react/home') )
                  }
                /> */}
                {/* jsx */}
                {/* <Route
                  exact
                  path="/react/jsx"
                  component={
                    AsyncLoader (() => import('$view/react/jsx') )
                  }
                /> */}
                {/* 正常路由 */}
                {/* <Route
                  exact
                  path="/react/router/normal"
                  component={
                    AsyncLoader (() => import('$view/react/router/normal') )
                  }
                /> */}
                {/* 嵌套路由 */}
                {/* <Route
                  exact
                  path="/react/router/nesting"
                  component={
                    AsyncLoader (() => import('$view/react/router/nesting') )
                  }
                />   */}
                {/* 数组渲染 */}
                {/* <Route
                  exact
                  path="/react/loop/arr"
                  component={
                    AsyncLoader (() => import('$view/react/loop/arr') )
                  }
                />   */}
                {/* 判断渲染 */}
                {/* <Route
                  exact
                  path="/react/loop/condition"
                  component={
                    AsyncLoader (() => import('$view/react/loop/condition') )
                  }
                />   */}
                {/* 前后分离 */}
                {/* <Route
                  exact
                  path="/react/around/separate"
                  component={
                    AsyncLoader (() => import('$view/react/around/around') )
                  }
                />   */}
                {/* axios，fetch */}
                {/* <Route
                  exact
                  path="/react/around/axios"
                  component={
                    AsyncLoader (() => import('$view/react/around/axios') )
                  }
                />   */}
                {/* ajax请求接口 */}
                {/* <Route
                  exact
                  path="/react/around/ajax"
                  component={
                    AsyncLoader (() => import('$view/react/around/ajax') )
                  }
                />  */}
                {/* vue请求接口 */}
                {/* <Route
                  exact
                  path="/react/around/vue"
                  component={
                    AsyncLoader (() => import('$view/react/around/vue') )
                  }
                />  */}
                {/* 错误路由 404  */}
                
                {/* <Redirect  to={{pathname: '/404'}} /> */}
              </Switch>
            </Content>
          </Layout>
          {/* <Login /> */}
          <Modal
            closable ={false}
            visible={_this.loginAsync}
            width ={440}
            onCancel={()=>{
              this.setState({loginAsync:false})
            }}
            footer ={null}
            destroyOnClose ={true}
          >
          {/* <LoginBox  onClickFn = {(userObj)=>{
            this.setState({
              loginAsync:false,
              userObj
            });
          }}/> */}
          </Modal>
          {/* 退出 */}
          <Modal
          title="退出登录！！！"
          visible={_this.closeAsync}
          onOk={()=>{
            localStorage.removeItem('react-user-obj');
            this.setState({closeAsync:false,userObj:''})
          }}
          onCancel={()=>{
            this.setState({closeAsync:false})
          }}
          cancelText = "浪子回头仍不晚"
          okText     = "哥的任性你不懂"
        >
          <p>您确定退出吗？这将使您无法访问VIP权限的项目</p>
        </Modal>
        </Layout>
      </div>
    );
  }
}

export default withRouter(ReactBox);
