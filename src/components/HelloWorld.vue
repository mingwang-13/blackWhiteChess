<template>
<el-container style="height: 100vh; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu router :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>管理分类</template>
        <el-menu-item-group>
          <el-menu-item index="/list">我的列表</el-menu-item>
          <el-menu-item index="/create">创建列表</el-menu-item>
          <el-menu-item index="/special">标签特效</el-menu-item>
          <el-menu-item index="/animation">标签动画</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">个人中心</template>
          <el-menu-item index="/myinfo">我的信息</el-menu-item>
             <el-menu-item index="/game">游戏中心</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>

  export default {
    components:{
      
    },
    name:'HelloWorld',
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    },
     methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped>
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
}
.el-aside {
    color: #333;
 }

</style>
