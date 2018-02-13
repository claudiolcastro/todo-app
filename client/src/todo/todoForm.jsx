import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => {
  return (
    <div role='form' className='todoForm'>
      <Grid cols='12 9 10'>
        <input
          id='description'
          className='form-control'
          placeholder='Adicione uma tarefa'
          value={props.description}
          onChange={props.handleChange}
        />
      </Grid>

      <Grid cols='12 3 2'>
        <IconButton style='primary' icon='plus' onClick={props.handleAdd}/>
        <IconButton style={`info ${css(styles.buttonToLeft)}`} icon='search' onClick={props.handleSearch} />
      </Grid>
    </div>
  )
}

const styles = StyleSheet.create({
  buttonToLeft: {
    marginLeft: '10px'
  }
})