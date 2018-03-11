import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

const changeDescription = event => ({
  type: 'DESCRIPTION_CHANGED',
  payload: event.target.value
})

const search = () => {
  const request = axios.get(`${URL}?sort=-createdAt`)
  return {
    type: 'TODO_SEARCHED',
    payload: request
  }
}

const add = (description) => {
  return dispatch => {
    axios.post(URL, { description })
      .then(resp => dispatch({ type: 'TODO_CLEAR', payload: resp.data }))
      .then(resp => dispatch(search()))
  }
}

const markAsDone = (todo) => {
  return dispatch => {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
      .then(resp => dispatch({ type: 'TODO_MARKED_AS_DONE', payload: resp.data }))
      .then(resp => dispatch(search()))
  }
}

const markAsPending = (todo) => {
  return dispatch => {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
      .then(resp => dispatch({ type: 'TODO_MARKED_AS_PENDING', payload: resp.data }))
      .then(resp => dispatch(search()))
  }
}

const remove = (todo) => {
  return dispatch => {
    axios.delete(`${URL}/${todo._id}`)
      .then(resp => dispatch({ type: 'TODO_REMOVED', payload: resp.data }))
      .then(resp => dispatch(search()))
  }
}

const clear = () => {
  return {
    type: 'TODO_CLEAR'
  }
}


export { changeDescription, search, add, markAsDone, markAsPending, remove, clear }