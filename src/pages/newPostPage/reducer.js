let initialState = {
    dataForm: {
        title: '',
        content: ''
    }
};

export default function addPostReducer(state = initialState, action){
    switch (action.type) {
        case 'ADD-POST_CHANGE_POST_TITLE':
            return {
                dataForm: {
                    ...state.dataForm,
                    title: action.title
                }
            };
        case 'ADD-POST_CHANGE_POST_MESSAGE':
            return {
                dataForm: {
                    ...state.dataForm,
                    content: action.content
                }
            };
        case 'NEW-POST-PAGE-SUCCESS':
            return {
                dataForm: {
                    ...state.dataForm,
                    title: '',
                    content: '',
                }
            };
        default: return state;
    }
}