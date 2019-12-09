import * as React from 'react';
import './journal.scss';
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
        日志管理
      </div>
    );
  }
}

export default withRouter(UserList);
