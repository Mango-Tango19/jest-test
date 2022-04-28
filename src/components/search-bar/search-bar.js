import "./search-bar.css";
import { useState } from "react";
import DatePicker from "react-date-picker";

const SearchBar = ({ setSearchQuery }) => {
  const [yearStart, setYearStart] = useState("");

  const [yearEnd, setYearEnd] = useState("");

  const [inputVal, setInputVal] = useState("");

  const handleInput = (e) => {
    setInputVal(e.target.value);
  };

  const serializeFilter = () => {
    const startDate = yearStart
      ? `&year_start=${yearStart.getFullYear()}`
      : null;
    const endDate = yearEnd ? `&year_end=${yearEnd.getFullYear()}` : null;

    return `${inputVal}${startDate ? startDate : ""}${endDate ? endDate : ""}`;
  };

  const hadleSearch = (e) => {
    e.preventDefault();
    const query = serializeFilter();
    setSearchQuery(query);
  };

  return (
    <form>
      <div className='form-group'>
        <label className='form-label mt-4'>NASA Items Search</label>
        <div className='form-group'>
          <div className='input-group mb-3'>
            <input
              type='text'
              className='form-control'
              placeholder='Please, type something :)'
              aria-describedby='btn-search'
              onInput={handleInput}
              value={inputVal}
            />
            <button
              className='btn btn-primary'
              type='submit'
              id='btn-search'
              onClick={hadleSearch}
              disabled={!inputVal}
            >
              Search
            </button>
          </div>
          <div className='form-row'>
            <div className='form-group col-md-6'>
              <label htmlFor='yearStart' className='col-form-label mr-3'>
                Year start
              </label>

              <DatePicker
                wrapperClassName='datePicker'
                selectsStart
                selected={yearStart}
                startDate={yearStart}
                endDate={yearEnd}
                format='y'
                maxDetail='decade'
                onChange={setYearStart}
                value={yearStart}
              />
            </div>

            <div className='form-group col-md-6'>
              <label htmlFor='yearStart' className='col-form-label mr-3'>
                Year end
              </label>

              <DatePicker
                wrapperClassName='datePicker'
                selectsEnd
                selected={yearEnd}
                startDate={yearStart}
                endDate={yearEnd}
                minDate={yearStart}
                format='y'
                maxDetail='decade'
                onChange={setYearEnd}
                value={yearEnd}
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
