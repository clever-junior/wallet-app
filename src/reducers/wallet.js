import { FAILED_REQUEST, SET_CURRENCIES } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
  error: '',
};

const wallet = (state = INITIAL_STATE, { type, value, payload }) => {
  switch (type) {
  case SET_CURRENCIES:
    return { ...state, currencies: value };
  case FAILED_REQUEST:
    return { ...state, error: payload };
  default:
    return state;
  }
};

export default wallet;
