import React, { useState, useEffect} from 'react';
import './Quote.css';

function Quote() {

    const [ApiData, setApiData] = useState('')


    useEffect(() => {
        const fetchData = async() => {
            await fetch('https://type.fit/api/quotes')
            .then( res => res.json())
            .then( data => {
               setApiData( data[Math.floor(Math.random() * data.length)])
            })
            
        }

        fetchData();
    }, [])
    
    return (
        <div className="quote">
            <div className="quote__layer"></div>
            <h1 className="quote__content">{`"${ApiData.text}"`}</h1>
            <h2 className="quote__author"><b>{ApiData.author}</b></h2>
        </div>
    )
}

export default Quote
