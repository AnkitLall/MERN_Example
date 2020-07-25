import React, {Component} from 'react';
import SearchSection from './SearchSection';
import MailSection from './MailSection';
import './../css/ScreenView.css';
import {
    getDate, sortByDate, sortLineItems
} from '../util/Util';

class ScreenView extends Component{
    constructor(props){
        super(props);
        this.state = {
            startDate: getDate(),
            endDate: getDate(),
            sortOrder: 'asc', 
            data: []
        };
    };

    componentDidMount(){
        fetch(`http://localhost:8080/data/${this.state.startDate.dateStr}/${this.state.endDate.dateStr}`,{
            method: 'GET',
            headers:{
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if(this.props.isMobile){
                data = sortLineItems(data,'fromMailId',this.state.sortOrder);
            }else{
                data = sortByDate(data,this.state.sortOrder);        
            }
            this.setState({
                data
            });
        })        
        // let data = getData(this.state.startDate.dateStr,this.state.endDate.dateStr,this.props.isMobile,this.state.sortOrder);
        // this.setState({
        //     data
        // });
    };

    setDateRange = (fromDate,toDate) =>{
        let startDate = getDate(fromDate);
        let endDate = getDate(toDate);
        this.setState({
            startDate,
            endDate            
        });
    };

    getMail = (fromDate, toDate) => {
        fetch(`http://localhost:8080/data/${fromDate}/${toDate}`,{
            method: 'GET',
            headers:{
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if(this.props.isMobile){
                data = sortLineItems(data,'fromMailId',this.state.sortOrder);
            }else{
                data = sortByDate(data,this.state.sortOrder);        
            }
            this.setState({
                data
            });
        }) 
    }

    setNewSortOrder = () =>{
        if(this.state.sortOrder === 'asc'){
            this.setState({
                sortOrder: 'desc',
                data: (this.props.isMobile)?sortLineItems(this.state.data,'fromMailId','desc'):sortByDate(this.state.data,'desc')
            });
        }else{
            this.setState({
                sortOrder: 'asc',
                data: (this.props.isMobile)?sortLineItems(this.state.data,'fromMailId','asc'):sortByDate(this.state.data, 'asc')
            });
        }     
    }

    render(){
        return(
            <div className='screen-view-container'>                
                <SearchSection 
                    startDate={this.state.startDate.dateStr}
                    endDate={this.state.endDate.dateStr}
                    setDateRange={this.setDateRange}
                    dataLength={this.state.data.length}
                    getMail={this.getMail}
                />
                <MailSection
                    data={this.state.data}
                    setNewSortOrder={this.setNewSortOrder}
                    sortOrder={this.state.sortOrder}
                    isMobile={this.props.isMobile}
                    screenWidth={this.props.screenWidth}
                />
            </div>
        );
    };
};

export default ScreenView;