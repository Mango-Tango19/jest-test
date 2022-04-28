import ErrorIndicator from "../error-indicator/error-indicator"
import LoadingIndicator from "../loading-indicator/loading-indicator"

const SearchedList = ({isError, isFetching, data}) => {


    if (isFetching && !isError) {
        return <LoadingIndicator />
    }

    if ( isError ) {
        return <ErrorIndicator message={`Cant find any item by your search request, please try another one`} />
    }

    return <>
     <h1>I'm the List! </h1><p>{ data.collection.items.length}</p>
    </>
}

export default SearchedList

