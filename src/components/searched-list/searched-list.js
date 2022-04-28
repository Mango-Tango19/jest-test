import ErrorIndicator from "../error-indicator/error-indicator"


import { useFetchSearchQuery } from "../../features/request-slice"

const SearchedList = () => {


  const { data = [], isError, isFetching } = useFetchSearchQuery('mars')


    if (isFetching && !isError) {
        return <h1>Loading...</h1>
    }

    if ( isError ) {
        return <ErrorIndicator />
    }

    return <>
     <h1>I'm the List! </h1><p>{ data.collection.items[0].data[0].keywords}</p>
    </>
}

export default SearchedList

