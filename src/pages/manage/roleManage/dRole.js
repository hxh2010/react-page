import React, {Component} from 'react';


import {Modal, Button, Input, Tree} from 'antd';

import all from '@/common/js/allMenu'

const {TreeNode} = Tree;

const treeData = all;

class DRole extends Component {

  state = {
    loading: false,
    checkedKeys: ['/index'],
    roleName:''
  }

  onExpand = (expandedKeys) => {
    console.log('onExpand', expandedKeys);
    // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.
    this.setState({
      expandedKeys,
      autoExpandParent: false,
    });
  }

  onCheck = (checkedKeys) => {
    console.log('onCheck', checkedKeys);
    this.setState({ checkedKeys });
  }


  renderTreeNodes = data => data.map((item) => {
    if (item.children) {
      return (
        <TreeNode title={item.title} key={item.key} dataRef={item}>
          {this.renderTreeNodes(item.children)}
        </TreeNode>
      );
    }
    return <TreeNode {...item} />;
  })


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
        <div style={{padding:'0 40px 0 20px'}}>
          <div className="form-title">基本信息</div>
          <div className="form-row">
            <div className="form-label">角色名称</div>
            <div className="form-item">
              <Input placeholder="请输入" value={this.state.roleName} onChange={(e)=>{this.setState({roleName:e.target.value})}}/>
            </div>
          </div>
          <div className="form-title">权限信息</div>
          <div style={{padding:10}}>
            <Tree
              checkable
              showLine
              onExpand={this.onExpand}
              defaultExpandAll
              onCheck={this.onCheck}
              checkedKeys={this.state.checkedKeys}
            >
              {this.renderTreeNodes(treeData)}
            </Tree>
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


export default DRole;
