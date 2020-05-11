import React from 'react';
import './../css/MailBody.css';

function MailBody(props){
    return(
        <div className='mail-body-container'>
            <span className='mail-body-text'>
                <p>
                {props.lineItem.mailBody}
                </p>                
            </span>            
        </div>
    );
}

export default MailBody;