import React, { Component } from 'react';
import logo from './../../assets/logo.png';
import DesktopLineItemBlock from './DesktopRenderComponents/DesktopLineItemBlock';
import MobileLineItemBlock from './MobileRenderComponents/MobileLineItemBlock';
import {
    getHeaderLineitem   
} from './../util/Util';
import './../css/MailSection.css';

class MailSection extends Component{

    constructor(props){
        super(props);        
    };

    render(){
        return(
            <div className={(this.props.isMobile)?'mail-section-container mobile-container':'mail-section-container '}>
                {
                    (this.props.data.length)?
                    <div className='mail-list-container'>
                        <div className='mail-header'>
                            {
                                (this.props.isMobile)?
                                <MobileLineItemBlock
                                    lineItem={getHeaderLineitem()}
                                    type={'header'}
                                    setNewSortOrder={this.props.setNewSortOrder}
                                    sortOrder={this.props.sortOrder}
                                />
                                :
                                <DesktopLineItemBlock
                                    lineItem={getHeaderLineitem()}
                                    type={'header'}
                                    setNewSortOrder={this.props.setNewSortOrder}
                                    sortOrder={this.props.sortOrder}
                                />
                            }                             
                        </div>                                               
                        
                        <div className='mail-list'>
                            {
                                this.props.data.map((lineItem) =>{
                                    return (this.props.isMobile)?
                                    <MobileLineItemBlock
                                        lineItem={lineItem}
                                        type={'row'}
                                        screenWidth={this.props.screenWidth}
                                    />
                                    :
                                    <DesktopLineItemBlock
                                        lineItem={lineItem}
                                        type={'row'}
                                    />
                                })
                            }
                        </div>
                        
                    </div>:
                    <div className={(this.props.isMobile)?'empty-list-mobile':'empty-list'}>
                        <img src={logo} className='logo-img'></img>
                    </div>
                }
            </div>
        );
    };
};

export default MailSection;