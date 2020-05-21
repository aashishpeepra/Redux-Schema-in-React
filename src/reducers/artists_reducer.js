export default function(state={},action){
    switch(action.type)
    {
        case 'GET_ARTIST':
            return {...state,artistList:action.payload}
        case 'GET_ARTITST_LIST':
            return {...state,artistList:action.payload}
        case "GET_ARTITST_DATA":
            return {...state,artistData:action.payload}
        case "CLEAR_DATA":
            return {...state,artistData:action.payload}
        default:
            return state
    }
}

