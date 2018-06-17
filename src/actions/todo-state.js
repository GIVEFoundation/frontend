export default {

    initialState: () => [],
  
   
  
    addTask: (todoList, name)=> todoList.concat({id: todoList.length, name: name}),
  
   
  
    setFinished: (todoList, taskId) => (
  
        todoList.map(task=> task.id === taskId ? {...task, complete: true} : task)
  
    ),
  
   
  
    setPending: (todoList, taskId) => (
  
        todoList.map(task=> task.id === taskId ? {...task, complete: false} : task)
  
    ),
  
   
  
    pending: todoList=> todoList.filter(task=> !task.complete)
  
   
  
  };