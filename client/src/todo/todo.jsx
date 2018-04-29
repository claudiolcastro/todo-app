import React, { Component } from 'react'

import PageHeader from '../template/pageHeader'
import TodoForm from '../todo/todoForm'
import TodoList from '../todo/todoList'

export default props => {
  return (
    <div>
      <PageHeader
        name="Tarefas"
        small="cadastro"
      />
      <TodoForm />
      <TodoList />
    </div>
  )
}
