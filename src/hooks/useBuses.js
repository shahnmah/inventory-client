import React, { useEffect, useState } from 'react';

const useBuses = () => {
    const [buses, setBuses] = useState([])
    useEffect( ()=>{
        fetch('https://peaceful-tor-07624.herokuapp.com/allbuses')
        .then(res => res.json())
        .then(data => setBuses(data))
    },[])
    return [buses, setBuses]
};

export default useBuses;