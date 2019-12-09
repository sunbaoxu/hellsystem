import * as React from 'react';
import './Login.scss';
import { Form, Icon, Input, Button } from 'antd';



class DynamicRule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        sessionStorage.setItem('bx-hell-system-obj',JSON.stringify(values));
        this.props.history.push('/infernal')
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <section className="login-wrap">
        <section className="login-main">
          <h6 className="title-box">地府管理系统</h6>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: '请输入账号/手机号/邮箱!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="账号/手机号/邮箱"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="密码"
                />,
              )}
            </Form.Item>
            <Form.Item>
              <Button 
                type="primary" 
                htmlType="submit" 
                className="login-form-button"
              >登录</Button>
            </Form.Item>
          </Form>
        </section>
      </section>
    )
  }
}
const Login = Form.create({ name: 'dynamic_rule' })(DynamicRule);
export default Login;
