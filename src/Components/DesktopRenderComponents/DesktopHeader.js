import React from 'react';
import ArrowIcon from './../../../assets/icon_arrow01.svg';
import './../../css/DesktopLineItemBlock.css';

function DesktopHeader(props){
    return(
        <div className='header-line-item'>
            <div className='from-block'>
                <span className='line-item-text-header'>
                    {props.lineItem.fromMailIds}
                </span>
            </div>
            <div className='to-block'>  
                <div className='to-block-text-container'>
                    <span className='line-item-text-header'>
                        {props.lineItem.toMailIds}
                    </span>
                </div>               
            </div>
            <div className='subject-block'>
                <span  className='line-item-text-header'>
                    {props.lineItem.mailSubject}
                </span>                        
            </div>
            <div className='date-time-block'>
                <span  className='line-item-text-header'>
                    {(props.lineItem.currentDay)?
                        props.lineItem.time:
                        (props.lineItem.currentMonth)?
                            props.lineItem.monthDateFormat.dateStr:
                            props.lineItem.date
                    }
                </span>    
                {
                    <div className='arrow-icon-container'>
                        <img src={ArrowIcon} className={(props.sortOrder === 'asc')?'arrow-icon':'arrow-icon-inverted'} onClick={props.setNewSortOrder}></img>
                    </div>
                }                                
            </div>                                           
        </div>
    );
}

export default DesktopHeader;