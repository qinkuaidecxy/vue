<template>
  <li @mouseenter="headermous(true)" @mouseleave="headermous(false)" :style="{background: bgcolor}">
    <label>
      <input type="checkbox" v-model="todo.complete"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="inshow" @click="deleteItem(index)">删除</button>
  </li>
</template>
<script>
    export default {
      data(){
        return{
          bgcolor:"white",
          inshow:false
        }
      },
      props:{
        todo:Object,
        index:Number,
      },
      methods:{
        headermous(buer){
          if(buer){
            this.bgcolor="#aaaaaa"
            this.inshow=true
          }
          else {
            this.bgcolor="white"
            this.inshow=false
          }
        },
        deleteItem(index){
          this.$store.dispatch("deletetodo",index)
          // this.$store.dispatch("addTodo",todo)
        }
      }
    }
</script>

<style scoped>
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    position: absolute;
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;

    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }

</style>
