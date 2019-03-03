


export default {
  //总数量
  totalCount(state){
    return state.todos.length
  },
  //完成数量
  completeCount(state){
    return state.todos.reduce((preTotal,todo) => preTotal + (todo.complete?1:0),0)
  },
  //判断是否全部选中
  isAllComplete( state,getters){
    return getters.totalCount===getters.completeCount && getters.totalCount > 0
  }
}
