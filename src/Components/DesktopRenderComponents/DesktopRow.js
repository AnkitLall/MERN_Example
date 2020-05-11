import React from 'react';
import AttachmentClip from './../../../assets/icon_clip.svg';
import './../../css/DesktopLineItemBlock.css';

function DesktopRow(props){
    return(
        <div className='row-line-item' onClick={props.openMail}>
            <div className='from-block'>
                <span className='line-item-text-row'>
                    {props.lineItem.fromMailIds}
                </span>
            </div>
            <div className='to-block'>  
                <div className='to-block-text-container'>
                    <span className='line-item-text-row'>
                        {props.lineItem.toMailIds}
                    </span>
                </div>                                       
                <div className='to-mails-count'>
                    {
                        (props.lineItem.numToMails>1) && <span className='to-mails-count-text'>
                            {'+'+props.lineItem.numToMails}
                        </span>                           
                    } 
                </div>               
            </div>
            <div className='subject-block'>
                <span  className='line-item-text-row'>
                    {props.lineItem.mailSubject}
                </span> 
                {
                    props.lineItem.attachmentFileExist && <span className='attachment'>
                        <img src={AttachmentClip} className='attachment-img'></img>
                    </span> 
                }                          
            </div>
            <div className='date-time-block'>
                <span  className='line-item-text-row'>
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

export default DesktopRow;