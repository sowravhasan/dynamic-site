import React, { useEffect, useState } from 'react';
import MyPieChart from '../../components/PieChart/PieChart';

const Statistics = () => {
    const [myState, setMyState] = useState([])
    useEffect(() => {
        const stateDonates = JSON.parse(localStorage.getItem('donates'))
        setMyState(stateDonates);
    },[])
    return (
        <div>
            <MyPieChart donationLength = {myState ? myState.length : 0}></MyPieChart>
        </div>
    );
};

export default Statistics;