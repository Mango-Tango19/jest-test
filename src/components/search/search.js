import SearchBar from "../search-bar/search-bar";
import SearchedList from "../searched-list/searched-list";
//import { useItemsList } from "./useSearch";
//import { createContext } from "react";

//export const MyContext = createContext();

const Search = () => {



//   const ItemsContextProvider = ({ children }) => {
//     const itemsListData = { loading, error, items };

//     return <MyContext.Provider value={itemsListData} children={children} />;
//   };

//   const SearchContextProvider = ({ children }) => {
//     const searchData = { performRequest };
//     return <MyContext.Provider value={searchData} children={children} />;
//   };


  return (
    <div className='container'>
     
        <SearchBar />

        <SearchedList />
   
    </div>
  );
};

export default Search;
