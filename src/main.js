import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import VueResource from 'vue-resource'
// import Routers from './router.js';

import UserList from './components/UserList.vue'
import DeptList from './components/DeptList.vue'
import Test from './components/Test.vue'
import Global from './components/Global.vue'

import iView from 'iview'; // 导入组件库
import 'iview/dist/styles/iview.css'; // 导入样式

Vue.config.productionTip = false
Vue.use(iView);
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.prototype.GLOBAL = Global;


// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
    {path: '/user/user-list', component: UserList},
    {path: '/test', component: Test},
    {path: '/dept/dept-list', component: DeptList}
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

// const router = new VueRouter({
// routes // (缩写) 相当于 routes: routes
// })
new Vue({
    render: h => h(App),
    router: router
}).$mount('#app')
