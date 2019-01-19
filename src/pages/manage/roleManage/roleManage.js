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
import * as style from './roleManage.styl'
import DRole from "./dRole";

const {Column} = Table;

const data = [
  {
    key: 1,
    roleName: '系統管理员',
    createTime: '2010-01-01 00:00:00',
  },
  {
    key: 2,
    roleName: '管理员',
    createTime: '2010-01-01 00:00:00',
  },
  {
    key: 3,
    roleName: '普通用户',
    createTime: '2010-01-01 00:00:00',
  },
];


class RoleManage extends Component {

  state = {
    search:{
      pageNum: 1,
      pageSize:10,
      roleName: '',
    },
    dRoleData:{},
    dRoleTile:'新增角色',
    visible: false,
  };


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
    const {visible} = this.state;

    return (
      <div style={{padding: 30}}>
        <DRole
          data={this.state.dRoleData}
          title={this.state.dRoleTile}
          visible={visible}
          cancel={()=>{this.setState({visible: false})}}
          submit={this.handleOk}/>

        <Typography variant="h4">
          角色筛选
        </Typography>
        <Typography component="div"  style={{margin:'10px 0 30px 0'}}>
          <form onSubmit={this.onsubmit} autoComplete="off">
            <div className={'form-control-div'}>

              <FormControl className={'form-control-item'}>
                <InputLabel htmlFor="search.roleName">角色名称</InputLabel>
                <Input
                  id="search.realName"
                  value={this.state.search.roleName}
                  onChange={(e)=>{
                    this.setState({
                      search:Object.assign({},this.state.search,{roleName:e.target.value})
                    })
                  }}
                />
              </FormControl>

              <Button
                variant="outlined" type="submit" color="primary">
                筛选
              </Button>
              <Button
                variant="contained"
                onClick={this.showModal}
                style={{marginLeft: 10}} color="primary">
                新增角色
              </Button>

            </div>
          </form>

        </Typography>
        <Typography variant="h4">
          角色列表
        </Typography>
        <Typography component="div"  style={{margin:'10px 0 30px 0'}}>
          <Table dataSource={data} pageSize={10}>
            <Column align={"center"} title="序号" dataIndex="key"/>
            {/*<Column align={"center"} title="角色类型" dataIndex="roleType"*/}
                    {/*render={roleType => {*/}
                      {/*if (roleType === 1) {*/}
                        {/*return (<span><Tag color="blue">系统管理员</Tag></span>);*/}
                      {/*} else if (roleType === 2) {*/}
                        {/*return (<span><Tag color="blue">管理员</Tag></span>);*/}
                      {/*}*/}

                      {/*return (<span><Tag color="blue">普通用户</Tag></span>);*/}
                    {/*}}*/}
            {/*/>*/}
            <Column align={"center"} title="角色名称" dataIndex="roleName"/>
            <Column align={"center"} title="创建时间" dataIndex="createTime"/>
            <Column align={"center"} title="操作" key="action"
                    render={(text, record) => {
                      if (record.key === 1) {
                        return(<span>-----</span>)
                      }else {
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

export default connect(null, mapDispatch)(RoleManage);
