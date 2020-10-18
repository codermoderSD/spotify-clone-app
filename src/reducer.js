export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    token: null
    //Remove after finished developing...
    // token: "BQCiG_RfVvLXUGuGKRkg4_KUjCCTfGB3Rd1gaSN5tj7ddnOim-0Xbdf6bgA3mTXQQeHAzCnNfXEzTlVQThAHap9fTZWs7T81ILTz2sKmpUqAYK5fhJcjfw2Z_YDv8w3PwNGT-zdCSwpYaQ1FsnV7JRhTDOyJFUykvPs6PQl5HC8AFbTU",
};

const reducer = (state, action) => {

    console.log(action);

    //Action --> type, [payload]

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        default:
            return state;
    }
}

export default reducer;