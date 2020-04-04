export const changePostTitle = (value) => {
    return {
        type: 'ADD-POST_CHANGE_POST_TITLE',
        title: value,
    }
};

export const changeMessagePost = (value) => {
    return {
        type: 'ADD-POST_CHANGE_POST_MESSAGE',
        content: value,
    }
};

export const sendNewPost = () => {
    return {
        type: 'ADD-POST_SEND-NEW-POST',
    }
};