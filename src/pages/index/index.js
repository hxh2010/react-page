import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
    marginTop: 50
  },
  heroContent: {
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: '50px 0 0 0',
  },
});


function Index(props) {
  const {classes} = props;

  return (
    <div>
      {/* Hero unit */}
      <div className={classes.heroUnit}>
        <div className={classes.heroContent}>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Welcome
          </Typography>
          <Typography variant="h6" align="center" color="textSecondary" paragraph>

            项目简介<br/>
            最新的 create-react-app 脚手架创建<br/>
            npm run eject 后引入 less（用于ant design）/stylus（集成stylus和moduleCss）<br/>
            添加.babelrc（用于ant design）/.editorconfig（格式化）<br/>
            redux 采用redux/react-redux/redux-thunk/redux-persist技术栈<br/>
            UI 主要使用Material及AntDesign<br/>
            未登录可查看初始菜单，登录后右上角更换按钮，新增菜单及Tab功能<br/>
            请求采用 axios 登录可选easy-mock（大搜车提供，经常崩w(ﾟДﾟ)w）及spring-boot后台<br/>
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={16} justify="center">
              <Grid item>
                <Button variant="contained" color="primary">
                  Main call to action
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  Secondary action
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          学习是件时而欣喜若狂，时而郁郁寡欢的事
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          可喜的事，人总能在不断的折腾中成长...
        </Typography>
      </footer>
      {/* End footer */}
    </div>
  );
}

export default withStyles(styles)(Index);
