import React, { useEffect, useState } from 'react';
let interval
const timer = () => {
    const [time, setTime] = useState(new Date)

    useEffect(() => {
        interval = setInterval(() => {
            setTime(new Date)
        }, 1000)
        return () => { clearInterval(interval) }
    }, [])

    return (
        <div>
            Current time is : {time?.toString()}
        </div>
    );
};

export default timer;