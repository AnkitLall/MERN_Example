import React,{ useState,useEffect } from 'react';
import ScreenView from './ScreenView';
import './../css/HomePage.css';

function HomePage(props){
    let [screenWidth,setScreenWidth] = useState(window.innerWidth);
    
    useEffect(() =>{
        window.addEventListener('resize',updateScreenWidth);
    });

    const updateScreenWidth = () =>{
        setScreenWidth(window.innerWidth);
    }
    
    return(            
        <div className='home-page'>
            <ScreenView
                isMobile={(screenWidth <= 1024)?true:false}
                screenWidth={screenWidth}
            />                               
        </div>                        
    );

};

export default HomePage;