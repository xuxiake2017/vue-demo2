<template>
  <div>
    <el-table :data="empList">
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
  </div>
</template>

<script>
export default {
  name: 'vuex-demo3',
  data () {
    return {
      empList: []
    }
  },
  methods: {
    loadDate: function () {
      this.$store.dispatch('GET_EMP_LIST').then(res => {
        console.log(this.$store.state.empList.empList)
        this.empList = this.$store.state.empList.empList
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted: function () {
    this.loadDate();
  },
  computed: {

  }
}
</script>

<style scoped>

</style>
