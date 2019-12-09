import * as React from 'react';
import './index.scss';
// import { Layout ,Menu, Icon, Button ,Modal} from 'antd';
// import {Switch,withRouter} from 'react-router-dom';

// const { Header, Sider, Content } = Layout;
// const SubMenu = Menu.SubMenu;

class Reincarnation extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false,
      closeAsync : false,
      userObj : sessionStorage.getItem('bx-hell-system-obj') ? JSON.parse(sessionStorage.getItem('bx-hell-system-obj')):"",

    };
  }

 
  render() {
    // let _this = this.state;
    return (
      <div className="reincar-nation-wrap" >
       fasasdfadsfafdasfdsdaf
      </div>
    );
  }
}

// export default withRouter(Reincarnation);
export default Reincarnation;
