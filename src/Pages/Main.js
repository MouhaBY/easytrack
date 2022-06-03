import React from 'react'
import Routes from "../routes";
import Drawer from '../Components/Drawer';
import Appbar from '../Components/Appbar';


export default function Main() {
    return (
        <div style={{flex:1, flexDirection:"row"}}>
            <Drawer />
            <div style={{flex:1, flexDirection:"column"}}>
                <Appbar />
                <Routes />
            </div>
        </div>
    )
}
