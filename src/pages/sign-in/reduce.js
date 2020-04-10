const initState = {
  dataForm: {
    login: '',
    password: ''
  },
  errors: {
    login: false,
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
        },
        errors: {
          ...state.errors,
          [action.payload.fieldId]: false
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
          login: action.payload.status,
          password: action.payload.status
        }
      }
    }
    default:
      return state;
  }
}


