import * as React from 'react';
import './dataList.scss';
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
        数据同步
      </div>
    );
  }
}

export default withRouter(UserList);
