import React from 'react'
import {  useSelector } from 'react-redux';

function Index() {
    const value = useSelector(state => state.value);
    return (
        <div>
            <div>Section {value} </div>
        </div>
    )
}

export default Index