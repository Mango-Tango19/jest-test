import ErrorIndicator from "../error-indicator/error-indicator"
import { useContext } from "react"
import { MyContext } from "../search/search"



const SearchedList = () => {

    const { loading, error, items } = useContext(MyContext)

    if (loading && !error) {
        return <h1>Loading...</h1>
    }

    if ( error ) {
        return <ErrorIndicator />
    }


    return <h1>I'm the List! { items ? items.length  : <span>But I'm empty :(</span>}</h1>
}

export default SearchedList

