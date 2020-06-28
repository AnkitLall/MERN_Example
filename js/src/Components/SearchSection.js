import React, {useState} from 'react';
import './../css/SearchSection.css';
import DataRangePicker from "react-daterange-picker";
import "react-daterange-picker/dist/css/react-calendar.css";
import DatePickerImage from './../../assets/icon_calender.svg';
import SearchButtonimage from './../../assets/icon_search.svg';

function SearchSection(props){
    
    let [showDatePicker,setShowDatePicker] = useState(false);

    const onSelect = (event) =>{
        let startDate = event.start._d;
        let endDate = event.end._d;
        props.setDateRange(startDate,endDate);
        setShowDatePicker(false);
    }

    const toggleDatePicker = () =>{
        if(showDatePicker){
            setShowDatePicker(false);    
        }else{
            setShowDatePicker(true);
        }        
    }

    const triggerGetMail = () =>{
        props.getMail(props.startDate, props.endDate);
    }

    return(
        <div className='search-section'>
            <div className='search-container'>
                <div className='date-picker-container'>                
                    <button className='date-picker-button' onClick={toggleDatePicker}>
                        <img src={DatePickerImage} className='date-picker-img'></img>                        
                    </button>
                    {
                        (showDatePicker) &&
                        <div className='date-range-picker'>
                            <DataRangePicker
                                onSelect={onSelect}
                                singleDateRange={true}
                            />
                        </div>
                    }
                    <span className='date-range-text'>{props.startDate} - {props.endDate}</span>                    
                    <div className='search-button-container'>
                        <button className='search-button' onClick={triggerGetMail}>
                            <img src={SearchButtonimage} className='search-button-img'></img>
                        </button>
                    </div>
                </div>                
            </div>
            <div className='result-text-container'>
                    <span className='result-text'>
                        <b>
                            Results: <span className='result-number-text'>
                                {props.dataLength}
                            </span> mail(s)
                        </b>
                    </span>
            </div>
        </div>
    );
};

export default SearchSection;