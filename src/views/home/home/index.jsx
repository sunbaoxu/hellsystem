import * as React from 'react';
import './home.scss';
import {withRouter} from 'react-router-dom';





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
    return (
      <div className="home-wrap" >
        首页
      </div>
    );
  }
}

export default withRouter(ReactBox);
