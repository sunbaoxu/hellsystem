import * as React from 'react';
import './index.scss';
import { Row, Col ,Button} from 'antd';
// import {Switch,withRouter} from 'react-router-dom';

// const { Header, Sider, Content } = Layout;
// const SubMenu = Menu.SubMenu;

class Reincarnation extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      btnAsync :false,
      rotateObj :{},
      rotateObj1:{},
      zongNum :0,
      zongNum1:0
    };
  }

  transformFn = ()=>{
    let random = this.randomFn(0,6),
        random1 = this.randomFn(0,12),
        zongNum = Math.floor(360*10 + random*60+this.state.zongNum),
        zongNum1 = Math.floor(this.state.zongNum1 - (360*3 + random1*30));

    this.setState({zongNum,zongNum1});
    
    if(this.state.btnAsync) return;
    this.setState({btnAsync:true});



    this.setState({
      rotateObj:{
        'WebkitTransform': `rotate(${zongNum}deg)`,
        transform: `rotate(${zongNum}deg)`,
        'WebkitTransitionDuration': '8s',
        'transitionDuration':'8s',
        'WebkitTransitionTimingFunction': 'ease',
        'transitionTimingFunction': 'ease'
      },
      rotateObj1:{
        'WebkitTransform': `rotate(${zongNum1}deg)`,
        transform: `rotate(${zongNum1}deg)`,
        'WebkitTransitionDuration': '8s',
        'transitionDuration':'8s',
        'WebkitTransitionTimingFunction': 'ease',
        'transitionTimingFunction': 'ease'
      }
    });

    setTimeout(()=>{
      this.setState({btnAsync:false});
    },8000)
  }

  randomFn = (min, max)=> {
    return Math.floor(Math.random() * (max - min)) + min   
  }

 
  render() {
    const backUrl ={
      background:`url(${require('@/assets/img/1.png')}) no-repeat center`
    }
    let backUrl2 ={
      background:`url(${require('@/assets/img/6.png')}) no-repeat center`
    }

    return (
      <section className="reincar-nation-wrap" >
        <Row>
          <Col>
            <div className="reincar-main" style={{...backUrl,...this.state.rotateObj1}}>
              <div className="reincar-box" style={{...backUrl2,...this.state.rotateObj}}></div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="btn-box">
            <Button type="primary" disabled={this.state.btnAsync} onClick={this.transformFn}>开始轮回</Button>
          </Col>
        </Row>
      </section>
    );
  }
}

export default Reincarnation;
