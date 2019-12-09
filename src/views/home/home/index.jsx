import * as React from 'react';
import './index.scss';
import { Layout , Icon, Button ,Modal} from 'antd';
import {withRouter} from 'react-router-dom';
import RouterBox from '@/routers/Router';



const { Header } = Layout;

const logoUrl = require('$imgs/logo.png');

class ReactBox extends React.Component{
  constructor(props) {
    super(props);
    this.routerBoxId = React.createRef();
    this.state = {
      collapsed: false,
      closeAsync : false,
      userObj : sessionStorage.getItem('bx-hell-system-obj') ? JSON.parse(sessionStorage.getItem('bx-hell-system-obj')):"",

    };
  }

  //显示隐藏 菜单栏
  toggleCollapsed = () => {
    this.routerBoxId.toggleCollapsed();
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
 

  

  render() {
    let _this = this.state;
    return (
      <div className="react-wrap" >
        <Layout className="antd-wrap">
          <Header className="header-wrap g-text-ove1">
            <section className="left-box">
              <img src={logoUrl} alt="" onClick={()=>{
                this.props.history.push('/');
              }}/>
              <span onClick={()=>{
                window.location.href = 'http://10.15.198.18:8090/pages/viewpage.action?pageId=3932983'
              }} >地府管理系统</span>
            </section>
            <section className="rig-box"> 
              <h4 onClick={()=>{
                if(_this.userObj){
                  this.setState({closeAsync:true})
                } else{
                  this.props.history.push('/login')
                }

               
              }}>{_this.userObj ? `${_this.userObj.username},点击退出` : '点击登录！送VIP' }</h4>
              <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                <Icon type={_this.collapsed ? 'menu-unfold' : 'menu-fold'} />
              </Button>
            </section>
          </Header>
          <RouterBox  onRef={(ref)=>{ this.routerBoxId = ref}}/>
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
