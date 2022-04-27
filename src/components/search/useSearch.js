import { useCallback, useReducer } from 'react'


const initialState = {
    status: 'idle', // idle | work | success | error
    items: null,
    loading: false,
    error: false,
  }


  const reducer = (state, action) => {
    console.log(`Action: ${action.type}; Payload:`, action.payload)
    switch (action.type) {
        case 'REQUEST_START': {
            return {
              ...state,
              status: 'work',
              loading: true,
            }
          }
          case 'REQUEST_SUCCESS': {
            return {
              ...state,
              status: 'success',
              items: action.payload,
              loading: false,
            }
          }
          case 'REQUEST_ERROR': {
            return {
              ...state,
              status: 'error',
              loading: false,
              error: true
              
            }
          }

          // case 'SEARCH_CHANGE': {
          //   return {
          //     ...state,
          //   status: 'work',
          //   term: action.payload
          //   }
          // }
          default:
              return state
    }
}

const getData = async (url) => {
  return fetch(url).then(res => {
    if (!res.ok || res.status !== 200) {
      throw new Error(`Request failed with status code ${res.status}`)
    }
    return res.json()
  })
}


  export const useItemsList = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

  //  const changeTerm = useCallback((term = '') => dispatch({ type: 'SEARCH_CHANGE', payload: term }), [])

    // useEffect(() => {
    //   changeTerm()
    // }, [ changeTerm, state.term])


  
    const performRequest = useCallback((term) => {
        dispatch({ type: 'REQUEST_START' })
    
        getData(`https://images-api.nasa.gov/search?q=${term}&media_type=image`)
          .then(data => dispatch({ type: 'REQUEST_SUCCESS', payload: data.collection.items }))
          .catch(err => {
            console.error(err)
            dispatch({ type: 'REQUEST_ERROR' })
          })
      }, [])


      // useEffect(() => {
      //   performRequest()
      // }, [performRequest])


      return {
        ...state,
        performRequest
      }

}