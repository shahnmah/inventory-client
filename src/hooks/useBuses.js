import React, { useEffect, useState } from 'react';

const useBuses = () => {
    const [buses, setBuses] = useState([])
    useEffect( ()=>{
        fetch('http://localhost:5000/bus')
        .then(res => res.json())
        .then(data => setBuses(data))
    },[])
    return [buses, setBuses]
};

export default useBuses;