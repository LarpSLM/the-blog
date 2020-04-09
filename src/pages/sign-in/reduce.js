const initState = {
  dataForm: {
    login: '',
    password: ''
  },
  errors: {
    login: '',
    password: false,
  }
};


export default function signInReducer(state = initState, action) {
  switch (action.type) {
    case 'SIGN-IN_CHANGE_DATA_FORM':
      return {
        ...state,
        dataForm: {
          ...state.dataForm,
          [action.payload.fieldId]: action.payload.value
        }
      };
    case 'SIGN-IN_SUCCESS': {
      return {
        ...state,
        dataForm: {
          login: '',
          password: ''
        }
      }
    }
    case 'SIGN-IN_FAIL': {
      return {
        ...state,
        errors: {
          login: state.errors.login !== false && action.payload.status,
          password: action.payload.status
        }
      }
    }
    case 'SIGN-IN_CHECKLOGIN_SUCCESS': {
      return {
        ...state,
        errors: {
          ...state.errors,
          login: action.payload.exists ? false : 'not found'
        }
      }
    }
    default:
      return state;
  }
}


