<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader/>
      <TodoList/>
      <TodoFooter />
    </div>
  </div>
</template>

<script>
  import  TodoHeader from './components/TodoHeader'
  import  TodoFooter from './components/TodoFooter'
  import  TodoList from './components/TodoList'

    export default {
    mounted(){
    this.$store.dispatch("reqTodos")
    },
    components:{
      TodoHeader,
      TodoList,
      TodoFooter
    },
      // methods:{
      //  addtodos(todo){
      //    this.todos.unshift(todo)
      //  },
      //   deletetodos(index){
      //    this.todos.splice(index,1)
      //   },
      //   deletetodostrue(){
      //    this.todos = this.todos.filter(todo => !todo.complete)
      //
      //   },
      //   setAlltodos(check){
      //    this.todos.forEach(todo =>todo.complete=check)
      //   }
      // },
      // watch:{
      //  todos:{
      //    deep:true,
      //    handler:function (value) {
      //      window.localStorage.setItem("todos_key",JSON.stringify(value));
      //    }
      //  }
      // }
    }
</script>

<style scoped>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
