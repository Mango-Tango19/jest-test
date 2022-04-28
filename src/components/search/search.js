import SearchBar from "../search-bar/search-bar";
import SearchedList from "../searched-list/searched-list";
import { useFetchSearchQuery } from "../../features/request-slice"
import { useState } from "react";

const Search = () => {

  const [ searchQuery, setSearchQuery ] = useState('')

  const { data = [], isError, isFetching } = useFetchSearchQuery(searchQuery)

const handleSearch = (val) => {
  setSearchQuery(val)
}

  return (
    <div className='container'>
     
        <SearchBar setSearchQuery={handleSearch}/>

        <SearchedList data={data} isError={isError} isFetching={isFetching} />
   
    </div>
  );
};

export default Search;
