<template>
  <div class="dashboard-container">
    <h1>home</h1>
    <el-button type="primary" @click="jump">跳转详情</el-button>
  </div>
</template>

<script>

export default {
  name: 'Dashboard',
  data() {
    return {
    }
  },
  computed: {

  },
  created() {

  },
  methods:{
    jump(){
      this.$router.push({
        path:"/details",
        query:{
          id:"阿大声道"
        }
      })
    }
  }
}
</script>
