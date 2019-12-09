import * as React from 'react';
import './trialList.scss';
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
        阎王殿审判
      </div>
    );
  }
}

export default withRouter(UserList);
