import React from 'react'
import Routes from "../routes";
import Drawer from '../Components/Drawer';
import Appbar from '../Components/Appbar';


export default function Main() {
    return (
        <div className='main-app'>
            <Drawer />
            <div style={{flex:1, flexDirection:"column"}}>
                <Appbar />
                <div className='main-div'>
                    <Routes />
                </div>
            </div>
        </div>
    )
}
