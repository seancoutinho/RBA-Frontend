import React,{ useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

//npm install react-datepicker

function Reactdatepicker()
{
    const [selectesDate, setSelectedDate]= useState('');

    return( 
        <React.Fragment>
            
          <div className="row">
          <div className="col-sm-10">
            
            <form className='row'>
            <div className="row mb-4">
            <div className="col-sm-5">
            <DatePicker selected={ selectesDate}
            onChange={ date=>setSelectedDate(date)}
            dateFormat="dd-MM-yyyy"
            //minDate={ new Date()}
            //maxDate={ new Date()}
            //filterDate={ date=>date.getDay()!=6 && date.getDay()!=0}
           // isClearable
            showYearDropdown
     
            />                 
            </div>
            </div>

            <div className="row mb-4">
            <label className="col-sm-2 col-form-label"></label>
            <div className="col-sm-4">
            <button type="submit" className="btn btn-success">Create Schedule</button>                  
            </div>
            </div>

            </form>

            </div>
        </div>
     
        </React.Fragment>
    );
}

export default Reactdatepicker;