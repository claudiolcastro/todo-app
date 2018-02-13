import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import IconButton from '../template/iconButton'

export default props => {

  const renderRows = () => {
    const list = props.list || []
    return list.map(todo => (
      <tr key={todo._id}>
        <td>{todo.description}</td>
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
          <th>Ações</th>
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
  }
})