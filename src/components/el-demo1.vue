<template>
  <el-container>
    <el-header>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4"><a target="_blank">订单管理</a></el-menu-item>
      </el-menu>
      <div class="line"></div>
    </el-header>
    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <template>
          <el-table
            :data="empList"
            style="width: 100%">
            <el-table-column
              prop="empno"
              label="员工编号"
              width="180">
            </el-table-column>
            <el-table-column
              prop="ename"
              label="员工姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="job"
              label="工作">
            </el-table-column>
            <el-table-column
              prop="sal"
              label="工资">
            </el-table-column>
          </el-table>
        </template>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import 'element-ui/lib/theme-chalk/index.css'
// import qs from 'qs'
// import { findEmpList } from '@/api/emp'
export default {
  name: 'el-demo1',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      empList: []
    };
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath);
    },
    loadData () {
      let params = {
        name: '张三'
      }
      this.$axios.post('empList', params).then(res => {
        console.log(res.data)
        this.empList = res.data.data
      }).catch(() => {
        this.$notify({
          title: '提示',
          message: '发生了点错误',
          duration: 2000
        });
      })
      // console.log(data)
      // this.empList = data.data
    }
  },
  mounted: function () {
    console.log('mounted')
    this.loadData();
  },
  created: function () {
    console.log('created')
  }
}
</script>

<style scoped>
  /*.el-header, .el-footer {*/
    /*background-color: #B3C0D1;*/
    /*color: #333;*/
    /*text-align: center;*/
    /*line-height: 60px;*/
  /*}*/

  /*.el-aside {*/
    /*background-color: #D3DCE6;*/
    /*color: #333;*/
    /*text-align: center;*/
    /*line-height: 200px;*/
  /*}*/

  /*.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }*/
</style>
