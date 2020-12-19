import React, { useEffect, useState } from 'react'

const formatDate = (date) =>{
    if(!date) return "";
    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);
    return `${hours}:${minutes}:${seconds}`;
}

const Clock = () => {
    const [timeString, setTimeString] = useState("")
    useEffect(() => {
        setInterval(() => {
            const now = new Date();
            // hh:mm:ss
            const newTime = formatDate(now);
            setTimeString(newTime);
        }, 1000);
    }, []);
    return (
        <div>
            <p style={{fontSize : "20px"}}>{timeString}</p>
        </div>
    )
}

export default Clock
