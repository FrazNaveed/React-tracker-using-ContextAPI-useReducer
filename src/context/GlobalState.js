import react , {useReducer, createContext} from 'react'
import AppReducer from './AppReducer'

//initial state

const initialState = {
    transactions:[
      {id:1, desc: 'Cash', amount: 20},
      {id:2, desc: 'hello', amount: -40}
    ]
}
// we created a context

export const GlobalContext = createContext(initialState);

// we will make a provider so that transactions become global

export const GlobalProvider =({ children }) =>   //GlobalProvider or ContextProvider
{
  const [state, dispatch] = useReducer(AppReducer, initialState);


  /*
  function AddUsers (desc, amount)
  {
       dispatch({type: 'Add_Transaction', payload:{desc, amount}})
  }

  */
  function deleteTransaction(id)
  {
    dispatch ({type: 'Delete' , payload: id})
  }

  function addTransaction(transaction)
  {
      dispatch({type: 'Add', payload:transaction});
  }




  return (<GlobalContext.Provider value = {{transactions: state.transactions, deleteTransaction, addTransaction }}>{children} </GlobalContext.Provider>)

  /*
  return (<GlobalContext.Provider value={{transactions: state.transactions}}>
     {children}
  </GlobalContext.Provider>)
  */
}

export default GlobalProvider;
