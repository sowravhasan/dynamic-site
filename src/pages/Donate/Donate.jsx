import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import DonateCard from './DonateCard';

const Donate = () => {
    const [donate, setDonate] = useState({})

    const {id} = useParams()

    const donates = useLoaderData()

    useEffect(() => {
        const findDonate = donates?.find(donate=>donate.id == id)
        setDonate(findDonate);


    }, [ id , donates]);
   
    return (
      <div>
        {
         <DonateCard donate={donate}></DonateCard>
        }
      </div>
    );
};

export default Donate;