import * as React from 'react';
import './index.scss';
import { Layout ,Menu, Icon, Button ,Modal} from 'antd';
import {Switch,withRouter} from 'react-router-dom';

const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

class ReactBox extends React.Component{
  constructor(props) {
    super(props);
    let arr = [],
        rootSubmenuKeys=['notepad', 'infernal', 'system'],
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
      userObj : sessionStorage.getItem('bx-hell-system-obj') ? JSON.parse(sessionStorage.getItem('bx-hell-system-obj')):"",

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
              <img src={require('$imgs/logo.png')} alt="" onClick={()=>{
                this.props.history.push('/');
              }}/>
              <span onClick={()=>{
                window.location.href = 'http://10.15.198.18:8090/pages/viewpage.action?pageId=3932983'
              }} >地府管理系统</span>
            </section>
            <section className="rig-box"> 
              <h4 onClick={()=>{
                let obj = _this.userObj ? {closeAsync:true}:{loginAsync:true};

                this.setState(obj)
              }}>{_this.userObj ? `${_this.userObj.username},点击退出` : '点击登录！送VIP' }</h4>
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
                <Menu.Item key="/">
                  <Icon type="file" />
                  <span>首页</span>
                </Menu.Item>
                <SubMenu 
                  key="notepad" 
                  title={
                    <span><Icon type="bars" /><span>生死薄</span></span>
                  } 
                  visible={true}
                >
                  <Menu.Item key="/notepad/userList">
                    <Icon type="file" />
                    <span>用户管理</span>
                  </Menu.Item>
                  <Menu.Item key="/notepad/dataList">
                    <Icon type="file" />
                    <span>数据同步</span>
                  </Menu.Item>
                </SubMenu>
                <Menu.Item key="/hookList">
                  <Icon type="file" />
                  <span>勾魂管理</span>
                </Menu.Item>
                <Menu.Item key="/trialList">
                  <Icon type="file" />
                  <span>阎王殿审判记录</span>
                </Menu.Item>
                <SubMenu key="infernal" title={<span><Icon type="bars" /><span>十八层地狱</span></span>} visible={true}>
                  <Menu.Item key="/infernal/equipment">
                    <Icon type="file" />
                    <span>设备管理</span>
                  </Menu.Item>
                  <Menu.Item key="/infernal/task">
                    <Icon type="file" />
                    <span>作业流程</span>
                  </Menu.Item>
                  <Menu.Item key="/react/tube">
                    <Icon type="file" />
                    <span>用户管理</span>
                  </Menu.Item>
                </SubMenu>
                <Menu.Item key="/reincarnation">
                  <Icon type="file" />
                  <span>六道轮回</span>
                </Menu.Item>
                <Menu.Item key="/money">
                  <Icon type="file" />
                  <span>冥币管理</span>
                </Menu.Item>
                <Menu.Item key="/journal">
                  <Icon type="file" />
                  <span>日志管理</span>
                </Menu.Item>
                <SubMenu key="system" title={<span><Icon type="bars" /><span>系统管理</span></span>} visible={true}>
                  <Menu.Item key="/system/user">
                    <Icon type="file" />
                    <span>管理员</span>
                  </Menu.Item>
                  <Menu.Item key="/system/role">
                    <Icon type="file" />
                    <span>角色权限</span>
                  </Menu.Item>
                </SubMenu>
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
            sessionStorage.removeItem('bx-hell-system-obj');
            this.props.history.push('/login')
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
