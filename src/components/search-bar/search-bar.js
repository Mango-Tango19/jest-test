import './search-bar.css'
import { useState } from "react";
import DatePicker from "react-date-picker";

const SearchBar = () => {
  const [yearStart, setYearStart] = useState("");
  const [yearEnd, setYearEnd] = useState("");

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
            />
            <button className='btn btn-primary' type='button' id='btn-search'>
              Search
            </button>
          </div>
          <div className='form-row'>
            <div className='form-group col-md-6'>
              <label htmlFor='yearStart' className='col-form-label mr-3'>
                Year start
              </label>

              <DatePicker
              wrapperClassName="datePicker"
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
              wrapperClassName="datePicker"
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
