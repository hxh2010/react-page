import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import SimpleLineChart from './SimpleLineChart';
import SimpleTable from './SimpleTable';


import {connect} from 'react-redux';

class MOne extends Component {
  render() {
    return (
      <div style={{padding:30}} >
        <Typography variant="h4">
          MUI折线图
        </Typography>
        <Typography component="div" style={{marginLeft: -22}}>
          <SimpleLineChart />
        </Typography>
        <Typography variant="h4">
          MUI表格
        </Typography>
        <div style={{height: 320}}>
          <SimpleTable />
        </div>
      </div>


    );
  }
}

const mapStateToProps = (state) => {
  return {
    menuState: state.app.menuState,
  }
}

export default connect(mapStateToProps, null)(MOne);
