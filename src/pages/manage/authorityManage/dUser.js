import React, {Component} from 'react';


import {Modal, Button, Input} from 'antd';


class DUser extends Component {

  state = {
    loading: false,
    roleName: ''
  }

  render() {
    const {loading} = this.state
    const {title, visible, cancel, submit} = this.props
    return (

      <Modal
        title={title}
        visible={visible}
        onCancel={cancel}
        maskClosable={false}
        footer={null}
      >
        <div style={{padding: '0 40px 0 20px'}}>
          <div className="form-title">基本信息</div>
          <div className="form-row">
            <div className="form-label">用户名</div>
            <div className="form-item">
              <Input placeholder="请输入" value={this.state.roleName}
                     onChange={(e) => {
                       this.setState({roleName: e.target.value})
                     }}/>
            </div>
          </div>
          <div className="form-row">
            <div className="form-label">真实姓名</div>
            <div className="form-item">
              <Input placeholder="请输入" value={this.state.roleName}
                     onChange={(e) => {
                       this.setState({roleName: e.target.value})
                     }}/>
            </div>
          </div>
          <div className="form-row">
            <div className="form-label">角色</div>
            <div className="form-item">
              <Input placeholder="请输入" value={this.state.roleName}
                     onChange={(e) => {
                       this.setState({roleName: e.target.value})
                     }}/>
            </div>
          </div>
          <div className="form-row">
            <div className="form-label">密码</div>
            <div className="form-item">
              <Input placeholder="请输入" value={this.state.roleName}
                     onChange={(e) => {
                       this.setState({roleName: e.target.value})
                     }}/>
            </div>
          </div>
          <div className="form-row">
            <div className="form-label">确认密码</div>
            <div className="form-item">
              <Input placeholder="请输入" value={this.state.roleName}
                     onChange={(e) => {
                       this.setState({roleName: e.target.value})
                     }}/>
            </div>
          </div>

          <div style={{margin: 10, textAlign: 'center'}}>
            <Button
              //size={"large"}
              type="primary"
              loading={loading}
              style={{marginRight: 30}}
              onClick={() => {
                submit('1111')
              }}>
              提交
            </Button>
            <Button
              //size={"large"}
              onClick={() => {
                cancel()
              }}>
              取消
            </Button>
          </div>
        </div>

      </Modal>

    );
  }
}


export default DUser;
