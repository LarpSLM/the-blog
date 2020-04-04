let initialState = {
    title: '',
    content: ''
};

export default function addPostReducer(state = initialState, action){
    switch (action.type) {
        case 'ADD-POST_CHANGE_POST_TITLE':
            return {
                ...state,
                title: action.title
            };
        case 'ADD-POST_CHANGE_POST_MESSAGE':
            return {
                ...state,
                content: action.content
            };
        case 'ADD-POST_SEND-NEW-POST':
            return {
                ...state,
                title: '',
                content: '',
            };
        default: return state;
    }
}