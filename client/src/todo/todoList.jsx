import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import { connect } from 'react-redux';

import IconButton from '../template/iconButton'

const TodoList = props => {

  const renderRows = () => {
    const list = props.list || []
    return list.map(todo => (
      <tr key={todo._id}>
        <td className={ todo.done ? css(styles.descriptionDone) : '' }>{todo.description}</td>
        <td>
          <IconButton style='success' icon='check' hide={todo.done} onClick={() => props.handleMarkAsDone(todo)} />
          <IconButton hide={!todo.done} style={`warning ${css(styles.buttonToLeft)}`} icon='undo' onClick={() => props.handleMarkAsPending(todo)} />
          <IconButton style={`danger ${css(styles.buttonToLeft)}`} icon='trash-o' onClick={() => props.handleRemove(todo)} />
        </td>
      </tr>
    ))
  }

  return (
    <table className={`table ${css(styles.table)}`}>
      <thead>
        <tr>
          <th>Descrição</th>
          <th className={css(styles.actionsTh)} >Ações</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )
}

const styles = StyleSheet.create({
  table: {
    marginTop: '100px'
  },

  buttonToLeft: {
    marginLeft: '10px'
  },

  descriptionDone: {
    textDecoration: 'line-through',
    color: '#777'
  },

  actionsTh: {
    width: '120px'
  }
})

const mapStateToProps = state => ({list: state.todo.list})

export default connect(mapStateToProps)(TodoList)