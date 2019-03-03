
import  { ADD_TODO,DELETE_TODO,SELECT_ALL_TODOS,CLEAR_ALL_COMPLETED,RECEIVE_TODOS} from "./mutation-types"
import  storageutil from "../util/storageutil.js"
export default {
  addTodo({commit},todo){
    commit(ADD_TODO,{todo})
  },
  deletetodo({commit},index){
    commit(DELETE_TODO,{index})
  },
  selectAlltodos({commit},value){
    commit(SELECT_ALL_TODOS,{value})
  },
  clearAllcompleted({commit}){
    commit(CLEAR_ALL_COMPLETED)
  },
  reqTodos({commit}){
    setTimeout(() =>{
     const todos = storageutil.readTodos()
      commit(RECEIVE_TODOS,todos)
    },1000)
  }
}
