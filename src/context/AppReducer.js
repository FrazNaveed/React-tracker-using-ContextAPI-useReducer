// in this we specify state changes in reponse to some actions

const AppReducer = (state, action) =>
{
    switch(action.type)
    {
        case 'add':
            {
                //returning an array
                return [action.payload, ...state.transactions]
            }
        case 'delete':
            {
                return {...state, transactions:state.transactions.filter(transaction=> transaction.id!=action.payload)}
            }
         default:
            return state;
    }
}

export default AppReducer;