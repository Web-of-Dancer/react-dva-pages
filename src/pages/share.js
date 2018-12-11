/**
 * create by wyg 2018年7月16日
 */
import dva from 'dva';
import './index.css';

// import VConsole from 'vconsole';
// const vConsole = new VConsole();

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
/* 
app.model(require('./models/login'));
*/
// 4. Router
app.router(require('../share_router'));

// 5. Start
app.start('#root');