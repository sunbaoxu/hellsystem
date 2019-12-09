import * as React from 'react';
import './roleList.scss';
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
        角色管理
      </div>
    );
  }
}

export default withRouter(UserList);
