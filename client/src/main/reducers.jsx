import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  todo: () => ({
    description: 'Ler livro',
    list:  [
      {
        _id: 1,
        description: 'Pagar fatura',
        done: true
      },
      {
        _id: 2,
        description: 'Correr no Parque',
        done: false
      }
    ]
  })
})

export default rootReducer