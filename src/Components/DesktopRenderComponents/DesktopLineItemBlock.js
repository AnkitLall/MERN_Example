import React, {useState} from 'react';
import MailBody from '../MailBody';
import DesktopHeader from './DesktopHeader';
import DesktopRow from './DesktopRow';
import './../../css/DesktopLineItemBlock.css';

function DesktopLineItemBlock(props){

    const [showMailBody,setShowMailBody] = useState(false);

    const openMail = () =>{
        if(showMailBody){
            setShowMailBody(false);
        }else{
            setShowMailBody(true);
        }           
    }

    return(
        <div className='line-item-container'>
            {
                (props.type === 'header')?
                <DesktopHeader
                    lineItem={props.lineItem}
                    setNewSortOrder={props.setNewSortOrder}
                    sortOrder={props.sortOrder}                    
                />
                :
                <DesktopRow
                    lineItem={props.lineItem}
                    openMail={openMail}
                />                
            }            
            {
                (showMailBody) &&
                <MailBody
                    lineItem={props.lineItem}
                />                
            } 
        </div>
    );
}

export default DesktopLineItemBlock;