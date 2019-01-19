import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {Table, Tag} from 'antd';



import {action as appAction} from '@/store/appStore';
import {action as userAction} from '@/store/userStore';
import {connect} from 'react-redux';
import {message} from 'antd';
import axios from '@/common/axios'
import DUser from "./dUser";

const {Column} = Table;

const data = [
  {
    key: 1,
    userName: 'admin',
    realName: 'admin',
    createTime: '2010-01-01 00:00:00',
    roleId: 1,
  },
  {
    key: 2,
    userName: 'zhangsan',
    realName: '张三',
    createTime: '2010-01-01 00:00:00',
    roleId: 2,
  },
  {
    key: 4,
    userName: 'lisi',
    realName: '李四',
    createTime: '2010-01-01 00:00:00',
    roleId: 3,
  },
  {
    key: 5,
    userName: 'wangwu',
    realName: '王五',
    createTime: '2010-01-01 00:00:00',
    roleId: 3,
  },
];


class AuthorityManage extends Component {

  state = {
    userName: '',
    realName: '',
    roleType: '',
    dUserData: {},
    dUserTile: '新增用户',
    visible: false,
  }


  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  }

  onsubmit = (event) => {
    event.preventDefault();
    console.log(this.state, this.props)
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (data) => {
    console.log(data)
  }


  render() {
    return (
      <div style={{padding: 30}}>
        <DUser
          data={this.state.dUserData}
          title={this.state.dUserTile}
          visible={this.state.visible}
          cancel={()=>{this.setState({visible: false})}}
          submit={this.handleOk}/>

        <Typography variant="h4">
          用户筛选
        </Typography>
        <Typography component="div" style={{margin: '10px 0 30px 0'}}>
          <form onSubmit={this.onsubmit} autoComplete="off">
            <div className={'form-control-div'}>
              <FormControl className={'form-control-item'}>
                <InputLabel htmlFor="userName">用户名</InputLabel>
                <Input
                  id="userName"
                  value={this.state.userName}
                  onChange={this.handleChange('userName')}
                />
              </FormControl>
              <FormControl className={'form-control-item'}>
                <InputLabel htmlFor="realName">真实姓名</InputLabel>
                <Input
                  id="realName"
                  value={this.state.realName}
                  onChange={this.handleChange('realName')}
                />
              </FormControl>
              <FormControl className={'form-control-item'}>
                <InputLabel htmlFor="roleType">角色类型</InputLabel>
                <Select
                  value={this.state.roleType}
                  onChange={this.handleChange('roleType')}
                  input={
                    <Input name="roleType" id="roleType"/>
                  }>
                  <MenuItem value="">请选择</MenuItem>
                  <MenuItem value={1}>普通用户</MenuItem>
                  <MenuItem value={2}>管理员</MenuItem>
                </Select>
              </FormControl>
              <Button
                variant="outlined"
                type="submit"
                color="primary">
                筛选
              </Button>
              <Button
                variant="contained"
                onClick={this.showModal}
                style={{marginLeft: 10}} color="primary">
                新增用户
              </Button>
            </div>
          </form>

        </Typography>
        <Typography variant="h4">
          用户列表
        </Typography>
        <Typography component="div" style={{margin: '10px 0 30px 0'}}>
          <Table dataSource={data} pageSize={10}>
            <Column align={"center"} title="序号" dataIndex="key"/>
            <Column align={"center"} title="用户名" dataIndex="userName"/>
            <Column align={"center"} title="真实姓名" dataIndex="realName"/>
            <Column align={"center"} title="角色" dataIndex="roleId"
                    render={roleId => {
                      switch (roleId) {
                        case 1:
                          return (
                            <span>
                              <Tag color="blue">系统管理员</Tag>
                            </span>
                          )
                        case 2:
                          return (
                            <span>
                              <Tag color="blue">管理员</Tag>
                            </span>
                          )
                        default:
                          return (
                            <span>
                              <Tag color="blue">普通用户</Tag>
                            </span>
                          )
                      }
                    }}/>
            <Column align={"center"} title="操作" key="action"
                    render={(text, record) => {
                      if (record.roleId === 1) {
                        return (<span>-----</span>)
                      } else {
                        return (
                          <span>
                            <Button color="primary">编辑</Button>
                            <Button color="secondary">删除</Button>
                          </span>
                        )
                      }
                    }}/>
          </Table>
        </Typography>
      </div>
    );
  }
}


const mapDispatch = (dispatch) => ({
  setLogin(value) {
    dispatch(appAction.setLogin(value));
  }
});

export default connect(null, mapDispatch)(AuthorityManage);
