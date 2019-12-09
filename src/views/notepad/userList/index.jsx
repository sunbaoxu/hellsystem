import * as React from 'react';
import './userList.scss';
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
        用户管理
      </div>
    );
  }
}

export default withRouter(UserList);
