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
      num:360,
      btnAsync :false
    };
  }

  transformFn = ()=>{
    let random = this.randomFn(0,6);
    let zongNum = Math.floor(360*10 + random*60);

    this.setState({num:zongNum});
    // return
    
    if(this.state.btnAsync) return;
    this.setState({btnAsync:true});



    // let num =0;
    // let timer = setInterval(()=>{
    //   if(num<240){
    //     num++
    //     this.setState({num})
    //   } else{
    //     clearInterval(timer);
    //     this.setState({btnAsync:false});
    //   }

    // },1)

    setTimeout(()=>{
      this.setState({btnAsync:false});
    },4000)
  }

  randomFn = (min, max)=> {
    return Math.floor(Math.random() * (max - min)) + min   
  }

 
  render() {
    const backUrl ={
      background:`url(${require('@/assets/img/1.png')}) no-repeat center`
    }
    let backUrl2 ={
      background:`url(${require('@/assets/img/6.png')}) no-repeat center`,
      // transform :`rotate(${this.state.num}deg)`,
      // animation: hide-item 2s ease-in forwards
    }

    return (
      <section className="reincar-nation-wrap" >
        <Row>
          <Col>
            <div className="reincar-main" style={backUrl}>
              <div className={["reincar-box",this.state.btnAsync?'dong':''].join(' ')} style={backUrl2}></div>
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
