<template>
  <div>
    <h1>ids:{{ ids }}</h1>
  </div>
</template>
<script>
export default {
  name:"Details",
  data(){
    return {
      ids:"110"
    }
  },
  created(){
    this.ids=this.$route.query.id;
    // console.log(1,this.$router)
  },
}
</script>
