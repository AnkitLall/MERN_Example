import React, { useEffect } from 'react';
import AttachmentClip from './../../../assets/icon_clip.svg';
import MailIcon from './../../../assets/icon_mail_sp.svg';
import ArrowIcon from './../../../assets/icon_arrow02.svg';
import './../../css/MobileLineItemBlock.css';

function MobileBody(props){

    let numToMailsOffset = props.lineItem.numToMails;

    useEffect(() =>{
        if(props.screenWidth > 320 && props.screenWidth < 414){
            numToMailsOffset = 2;
        }     
    },[props.screenWidth]);

    return(
        <div className='row-line-item' onClick={props.openMail}>    
            <div className='from-to-block'>
                <div className='icon-container'>
                    <img src={MailIcon} className='mail-icon'></img>
                </div>
                <div className='text-blocks-container'>
                    <div className='from-block'>
                            <span className='line-item-text-row'>
                                {props.lineItem.fromMailIds}
                            </span>                      
                        <div className='date-attachment-block'>
                            {
                                props.lineItem.attachmentFileExist ?<span className='attachment'>
                                    <img src={AttachmentClip} className='attachment-img'></img>
                                </span> :
                                <span></span>
                            }  
                            
                                <span  className='line-item-date-row'>
                                    {(props.lineItem.currentDay)?
                                        props.lineItem.time:
                                        (props.lineItem.currentMonth)?
                                            props.lineItem.monthDateFormat.dateStr:
                                            props.lineItem.date
                                    }
                                </span>                                                           
                         
                            <img src={ArrowIcon} className='side-arrow-icon'></img>
                        </div>                
                    </div>
                    <div className='to-block'>
                        <div className='line-item-text-row'>
                            {props.lineItem.toMailIds}
                        </div>
                        <div className='to-mails-count'>
                            {
                                (props.lineItem.numToMails>numToMailsOffset) && <span className='to-mails-count-text'>
                                    {'+'+(props.lineItem.numToMails-2)}
                                </span>                           
                            } 
                        </div>
                                                                                                    
                    </div>
                </div>                
            </div>                            
            <div className='subject-block'>
                <span  className='line-item-subject-text'>
                    {props.lineItem.mailSubject}
                </span>                                                     
            </div>                                                     
        </div>
    );
}

export default MobileBody;