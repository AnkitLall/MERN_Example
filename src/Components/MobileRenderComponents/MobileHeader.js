import React from 'react';
import ArrowIcon from './../../../assets/icon_arrow01.svg';
import './../../css/MobileLineItemBlock.css';

function MobileHeader(props){

    return(
        <div className='header-line-item'>
            <div className='from-block-header'>
                <span className='line-item-text-header'>
                    {props.lineItem.fromMailIds}
                </span>
                <div className='arrow-icon-container'>
                    <img src={ArrowIcon} className={(props.sortOrder === 'asc')?'arrow-icon':'arrow-icon-inverted'} onClick={props.setNewSortOrder}></img>
                </div>                 
            </div>
            <div className='to-block-header'>
                <span className='line-item-text-header'>
                    {props.lineItem.toMailIds}
                </span>                                                                           
            </div>
            <div className='subject-block-header'>
                <span  className='line-item-text-header'>
                    {props.lineItem.mailSubject}
                </span>                                                     
            </div>
            <div className='date-time-block-header'>
                <span  className='line-item-text-header'>
                    {(props.lineItem.currentDay)?
                        props.lineItem.time:
                        (props.lineItem.currentMonth)?
                            props.lineItem.monthDateFormat.dateStr:
                            props.lineItem.date
                    }
                </span>                                                           
            </div> 
        </div>
    );
}

export default MobileHeader;