import * as React from 'react';
import './hookList.scss';
import {withRouter} from 'react-router-dom';





class UserList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

 

  

  render() {
    return (
      <div className="home-wrap" >
        勾魂管理
      </div>
    );
  }
}

export default withRouter(UserList);
