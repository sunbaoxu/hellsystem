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
        管理员
      </div>
    );
  }
}

export default withRouter(UserList);
