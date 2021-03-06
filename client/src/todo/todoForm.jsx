import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { changeDescription, search, add, clear } from './todoActions'


class TodoForm extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.search()
  }

  render() {
    const { add, search, description, clear } = this.props
    return(
      <div role = 'form' className = 'todoForm' >
        <Grid cols='12 9 10'>
          <input
            id='description'
            className='form-control'
            placeholder='Adicione uma tarefa'
            value={this.props.description}
            onChange={this.props.changeDescription}
          />
        </Grid>
        
        <Grid cols='12 3 2'>
          <IconButton
            style='primary'
            icon='plus'
            onClick={ () => add(description) }
          />
          <IconButton
            style={`info ${css(styles.buttonToLeft)}` }
            icon='search'
            onClick={ search }
          />
          <IconButton
            style={ `default ${css(styles.buttonToLeft)}` }
            icon='close'
            onClick={ clear }
          />
        </Grid>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  buttonToLeft: {
    marginLeft: '10px'
  }
})

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeDescription, search, add, clear }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)