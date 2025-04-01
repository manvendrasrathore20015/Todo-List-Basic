const taskReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_TASK":
            return [...state, action.payload]
        case "DELETE_ALL_TASK":
            return []
        case "COMPLETE_TASK":
            return state.filter((task) => task !== action.payload)
        default:
            return state;
    }
}

export default taskReducer;
