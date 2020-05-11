import React, {useState} from 'react';
import MailBody from '../MailBody';
import MobileHeader from './MobileHeader';
import MobileBody from './MobileRow';
import './../../css/MobileLineItemBlock.css';

function MobileLineItemBlock(props){

    const [showMailBody,setShowMailBody] = useState(false);

    const openMail = () =>{
        if(showMailBody){
            setShowMailBody(false);
        }else{
            setShowMailBody(true);
        }           
    }

    return(
        <div className='mobile-line-item-container'>
            {
                (props.type === 'header')?
                <MobileHeader                     
                    lineItem={props.lineItem}
                    setNewSortOrder={props.setNewSortOrder}
                    sortOrder={props.sortOrder}
                />
                :
                <MobileBody
                    openMail={openMail}
                    lineItem={props.lineItem}
                    screenWidth={props.screenWidth}
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

export default MobileLineItemBlock;